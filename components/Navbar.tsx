import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 px-6 md:px-20 py-4 ${
        scrolled 
          ? 'border-border-subtle bg-background-main/90 backdrop-blur-md shadow-lg' 
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="size-8 overflow-hidden rounded-full bg-white/5 p-1">
            <img
              src="/empty_logo_transparent_c.png"
              alt="logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white uppercase">
            Mehandis Bridal
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              className="text-sm font-medium hover:text-white transition-colors text-muted-grey relative group"
              href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/917907068994?text=Hi%2C%20I%E2%80%99d%20like%20to%20book.%20Please%20share%20details%20and%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-accent-white text-background-main text-sm font-bold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >
          <i className="fa-brands fa-whatsapp text-green-600 mr-1 text-xl"></i>
          <span>Book via WhatsApp</span>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;