import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, ScaleIn } from './AnimationWrapper';

const CTA: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-background-main border-t border-border-subtle text-center">
      <div className="max-w-[1200px] mx-auto space-y-8">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Book Your Bridal Look Today
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Don’t compromise on your bridal dreams. Choose Mehandis Bridal
            Rentals and shine on your special day.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 text-white font-bold">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>Affordable Luxury</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></span>Trusted by Brides</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></span>Instagram-Famous Collections</span>
          </div>
        </FadeInUp>
        
        <ScaleIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0)", "0 0 0 10px rgba(255, 255, 255, 0.1)", "0 0 0 20px rgba(255, 255, 255, 0)"]
              }}
              transition={{ 
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              href="https://wa.me/917907068994?text=Hi%2C%20I%E2%80%99d%20like%20to%20book.%20Please%20share%20details%20and%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full h-16 px-12 bg-accent-white text-background-main font-bold text-xl hover:bg-white transition-colors"
            >
              Book Now on WhatsApp
              <i className="fa-brands fa-whatsapp text-green-600 text-3xl ml-1"></i>
            </motion.a>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default CTA;