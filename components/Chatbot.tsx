import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `You are a helpful, polite, and professional customer service chatbot for Mehandis Bridal Rentals.
Your primary goals are:
1. Help customers with booking inquiries.
2. Provide information about our services (premium bridal dress and luxury jewellery rentals).
3. Answer general questions about pricing, sizing, and availability.

Our services include:
- Premium Bridal Dress Rentals (Lehengas, Gowns, Sarees)
- Luxury Jewellery Rentals (Necklaces, Earrings, Bangles, Maang Tikkas)
- Custom Fitting & Alterations
- Styling Consultations

BOOKING FLOW:
1. If a user wants to book, politely ask for their preferred date, the specific items they are interested in, and their contact information (email or phone number).
2. Once they provide their contact information, ask them: "Can you confirm your booking enquiry?"
3. If they say "yes" or give a positive confirmation, you MUST include the exact text "[TRIGGER_WHATSAPP_ENQUIRY]" at the very end of your response. Also, provide a polite confirmation message that their details are ready to be sent to the owner on WhatsApp.`;

const GEMINI_MODELS = [
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-2.5-flash',
];
const GEMINI_API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY ||
  (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : undefined) ||
  '';
const WHATSAPP_NUMBER = '917907068994';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string; action?: 'whatsapp' }[]>([
    { role: 'model', text: 'Hello! Welcome to Mehandis Bridal Rentals. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const chatRef = useRef<any>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);
  const modelIndexRef = useRef(0);

  const createChatSession = (historyMessages: { role: 'user' | 'model'; text: string }[] = []) => {
    if (!aiRef.current) {
      throw new Error('Gemini client is not initialized.');
    }

    const history = historyMessages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    }));

    return aiRef.current.chats.create({
      model: GEMINI_MODELS[modelIndexRef.current],
      history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  };

  useEffect(() => {
    if (!chatRef.current) {
      try {
        if (!GEMINI_API_KEY) {
          throw new Error('Chatbot is not configured yet. Add VITE_GEMINI_API_KEY to .env.local and restart the app.');
        }

        aiRef.current = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        chatRef.current = createChatSession(messages);
        setInitError(null);
      } catch (error) {
        console.error("Failed to initialize Gemini API:", error);
        setInitError(error instanceof Error ? error.message : 'Failed to initialize chatbot.');
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const openWhatsAppEnquiry = (chatMessages: { role: 'user' | 'model'; text: string }[]) => {
    const chatTranscript = chatMessages
      .map(m => `${m.role === 'user' ? 'Customer' : 'Bot'}:\n${m.text}`)
      .join('\n\n');
    const text = encodeURIComponent(`New Booking Enquiry!\n\nFull Chat Transcript:\n${chatTranscript}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        throw new Error(initError || 'Chat session not initialized.');
      }
      let response;

      try {
        response = await chatRef.current.sendMessage({ message: userMessage });
      } catch (error) {
        const isQuotaError =
          error instanceof Error &&
          (error.message.includes('429') ||
            error.message.includes('RESOURCE_EXHAUSTED') ||
            error.message.toLowerCase().includes('quota exceeded'));

        if (!isQuotaError || modelIndexRef.current >= GEMINI_MODELS.length - 1) {
          throw error;
        }

        modelIndexRef.current += 1;
        chatRef.current = createChatSession(messages);
        response = await chatRef.current.sendMessage({ message: userMessage });
      }
      
      let responseText = response.text || 'Sorry, I could not generate a response.';
      let hasAction = false;
      
      if (responseText.includes('[TRIGGER_WHATSAPP_ENQUIRY]')) {
        hasAction = true;
        responseText = responseText.replace('[TRIGGER_WHATSAPP_ENQUIRY]', '').trim();
        
        // Automatically open WhatsApp with the enquiry details.
        setTimeout(() => {
          openWhatsAppEnquiry([
            ...messages,
            { role: 'user', text: userMessage },
            { role: 'model', text: responseText }
          ]);
        }, 1000);
      }

      setMessages(prev => [...prev, { role: 'model', text: responseText, action: hasAction ? 'whatsapp' : undefined }]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage =
        error instanceof Error &&
        (error.message.includes('429') ||
          error.message.includes('RESOURCE_EXHAUSTED') ||
          error.message.toLowerCase().includes('quota exceeded'))
          ? 'The chatbot is temporarily out of free Gemini quota. Please wait a little and try again.'
          : error instanceof Error
            ? error.message
            : 'The chatbot could not reply right now. Please try again in a moment.';

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card-bg shadow-2xl sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border-subtle bg-background-main p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white">Mehandis Assistant</h3>
                <p className="text-xs text-muted-grey">Online | Replies instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted-grey transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-white text-black'
                        : 'bg-background-main text-white border border-border-subtle'
                    }`}
                  >
                    {msg.role === 'model' ? (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                        {msg.action === 'whatsapp' && (
                          <button
                            onClick={() => openWhatsAppEnquiry(messages)}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
                          >
                            <MessageCircle size={16} />
                            Send on WhatsApp
                          </button>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] items-center gap-2 rounded-2xl border border-border-subtle bg-background-main px-4 py-3 text-white">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm text-muted-grey">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border-subtle bg-background-main p-4">
            <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-card-bg px-4 py-2 focus-within:border-white/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-transparent py-2 text-sm text-white placeholder-muted-grey outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
        >
          <MessageCircle size={28} className="transition-transform group-hover:scale-110" />
        </button>
      )}
    </div>
  );
}
