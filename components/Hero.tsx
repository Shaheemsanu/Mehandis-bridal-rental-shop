import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimationWrapper';

const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl min-h-[600px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center border border-border-subtle shadow-2xl group"
        >
          {/* Background Image with Parallax/Zoom Effect */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFnSKHgXd69in7Q-h7bc0sEoNeCVC5pkdm5PmxuTv-wmRE52eT8hyKLrzpKJXTfrbkkwvNNKT6PkcP4H44YHVpYYRh3db1NqqRzZ-k_TdTd802h2WnRM3rNUxyoVj8vmORO4s6AzWdyPNNOH2O8LxhF4GIVy_zdwxUESvASXbK6Dz4XmZ3XdwOJ-WCQwDdb08jNam_u3Z0S41yGpkf8I14QvRcXnoPCBfongS1ZywVjgnJqKXY_mjA4WYkiphmgu6YJfgP89rjDoAf")`,
            }}
          />
          
          <StaggerContainer className="max-w-3xl space-y-6 relative z-10">
            <StaggerItem>
              <p className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                MEHANDIS BRIDAL RENTALS <br className="md:hidden"/> Perinthalmanna, Kerala
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
                Your Dream Bridal Look{' '}
                <span className="text-white border-b-4 border-white inline-block pb-1">Starts Here</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl font-light text-muted-grey max-w-2xl mx-auto">
                Mehandis Bridal Rentals is a trusted name in bridal dress and
                jewellery rentals in Perinthalmanna. We help brides look
                royal, elegant, and confident on their most special day —
                without spending lakhs.
              </p>
            </StaggerItem>

            <StaggerItem>
              <ul className="text-white/80 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-medium mt-4">
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>Luxury bridal wear
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>Premium jewellery collections
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>Affordable rental packages
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>Trusted by thousands
                </li>
              </ul>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/917907068994?text=Hi%2C%20I%E2%80%99d%20like%20to%20book.%20Please%20share%20details%20and%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-transparent text-white border border-white font-bold text-lg transition-all"
                >
                  Book Now on WhatsApp
                </motion.a>
                <motion.a
                   whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                   whileTap={{ scale: 0.95 }}
                  href="https://instagram.com/mehandis_bridal_rentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-transparent text-white border border-white font-bold text-lg transition-all"
                >
                  Explore Instagram Gallery
                </motion.a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;