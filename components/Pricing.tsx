import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimationWrapper';

const Pricing: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "backOut" } }
  };

  return (
    <section className="px-6 md:px-20 py-16" id="pricing">
      <div className="max-w-[1200px] mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            PRICING (STARTING RANGE)
          </h2>
          <p className="text-muted-grey mb-12 max-w-2xl mx-auto">
            Final pricing depends on design, fabric, and collection. Contact
            us on WhatsApp for exact prices & availability.
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {/* Card 1 */}
          <StaggerItem className="h-full" variants={cardVariants}>
            <div className="h-full p-10 rounded-2xl border border-border-subtle bg-card-bg flex flex-col items-center gap-6 relative overflow-hidden transition-all duration-300 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h4 className="text-xl font-bold text-white group-hover:text-accent-white transition-colors">
                Bridal Dress Rentals
              </h4>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-grey">Starting from</span>
                <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300 origin-bottom">₹5,000</span>
              </div>
              <ul className="text-left space-y-4 w-full border-t border-border-subtle pt-6 flex-grow">
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Multiple sizes & colors
                </li>
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Modern + traditional designs
                </li>
              </ul>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917907068994?text=Hi%2C%20I%20would%20like%20to%20check%20availability%20for%20Bridal%20Dress%20Rentals%20(Starting%20from%20%E2%82%B95%2C000).%20Please%20share%20details."
                rel="noopener noreferrer"
                target="_blank"
                className="w-full py-4 bg-transparent rounded-full font-bold text-white border border-white mt-4 hover:bg-white hover:text-black transition-colors"
              >
                Check Availability
              </motion.a>
            </div>
          </StaggerItem>

          {/* Card 2 */}
          <StaggerItem className="h-full" variants={cardVariants}>
            <div className="h-full p-10 rounded-2xl border border-border-subtle bg-card-bg flex flex-col items-center gap-6 relative overflow-hidden transition-all duration-300 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h4 className="text-xl font-bold text-white group-hover:text-accent-white transition-colors">
                Bridal Jewellery Rentals
              </h4>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-grey">Starting from</span>
                <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300 origin-bottom">₹2,000</span>
              </div>
              <ul className="text-left space-y-4 w-full border-t border-border-subtle pt-6 flex-grow">
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Heavy bridal sets
                </li>
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Lightweight elegant designs
                </li>
              </ul>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917907068994?text=Hi%2C%20I%20would%20like%20to%20check%20availability%20for%20Bridal%20Jewellery%20Rentals%20(Starting%20from%20%E2%82%B92%2C000).%20Please%20share%20details."
                rel="noopener noreferrer"
                target="_blank"
                className="w-full py-4 bg-transparent rounded-full font-bold text-white border border-white mt-4 hover:bg-white hover:text-black transition-colors"
              >
                Check Availability
              </motion.a>
            </div>
          </StaggerItem>

          {/* Card 3 */}
          <StaggerItem className="h-full" variants={cardVariants}>
            <div className="h-full p-10 rounded-2xl border border-border-subtle bg-card-bg flex flex-col items-center gap-6 relative overflow-hidden transition-all duration-300 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h4 className="text-xl font-bold text-white group-hover:text-accent-white transition-colors">
                Bridal Look Packages
              </h4>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-grey">Available via</span>
                <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300 origin-bottom">Custom</span>
              </div>
              <ul className="text-left space-y-4 w-full border-t border-border-subtle pt-6 flex-grow">
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Dress + Jewellery matching
                </li>
                <li className="flex gap-3 items-center text-muted-grey text-sm">
                  <span className="material-symbols-outlined text-white text-sm bg-white/10 rounded-full p-1">check</span>
                  Styling guidance
                </li>
              </ul>
              <motion.a
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                href="https://wa.me/917907068994?text=Hi%2C%20I%20would%20like%20to%20check%20availability%20for%20Bridal%20Look%20Packages%20(Custom%20%E2%80%93%20Dress%20%2B%20Jewellery%20matching%20%26%20Styling%20guidance).%20Please%20share%20details."
                rel="noopener noreferrer"
                target="_blank"
                className="w-full py-4 bg-transparent rounded-full font-bold text-white border border-white mt-4 hover:bg-white hover:text-black transition-colors"
              >
                Enquire Now
              </motion.a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Pricing;