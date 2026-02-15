import React from "react";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const Footer: React.FC = () => {
  return (
    <footer
      className="px-6 md:px-20 py-20 bg-card-bg border-t border-border-subtle"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <StaggerItem className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-1">
              <div className="size-8 overflow-hidden rounded-full bg-white/5 p-1">
                <img
                 src="empty_logo_transparent_c.png"
                  alt="logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white uppercase">
                Mehandis Bridal
              </h2>
            </div>
            <p className="text-muted-grey max-w-sm">
              Perinthalmanna's premier destination for high-end bridal rental
              wear. From exquisite lehengas to antique jewellery, we bring
              luxury to your special day.
            </p>
            <div className="flex flex-col gap-4 text-muted-grey text-sm">
              <p className="font-bold text-white">👉 DM or WhatsApp us for:</p>
              <ul className="space-y-1">
                <li>• Availability check</li>
                <li>• Pricing details</li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem className="space-y-6">
            <h4 className="font-bold text-lg text-white">📍 Visit Our Store</h4>
            <ul className="space-y-4 text-muted-grey text-sm">
              <li className="flex items-start gap-3 group">
                <i className="fa-solid fa-location-dot text-white text-lg mt-1 transition-colors group-hover:text-muted-grey"></i>
                <a
                  href="https://maps.app.goo.gl/2V5pq56WY1VkFqhs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white transition-colors"
                >
                  1st Floor, Ayisha Complex, Perinthalmanna Malappuram, Kerala
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <i className="fa-solid fa-clock text-white text-lg transition-colors group-hover:text-muted-grey"></i>
                Mon – Sun: 10:00 AM – 8:00 PM
              </li>
              <li className="flex items-center gap-3 group">
                <i className="fa-brands fa-whatsapp text-white text-lg transition-colors group-hover:text-muted-grey"></i>
                <a
                  href="https://wa.me/917907068994?text=Hi%2C%20I%E2%80%99d%20like%20to%20book.%20Please%20share%20details%20and%20availability."
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Click to Book
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <i className="fa-brands fa-instagram text-white text-lg transition-colors group-hover:text-muted-grey"></i>
                <a
                  href="https://instagram.com/mehandis_bridal_rentals"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  @mehandis_bridal_rentals
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem className="space-y-6">
            <h4 className="font-bold text-lg text-white">Location Map</h4>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-lg overflow-hidden h-40 border border-border-subtle group cursor-pointer hover:border-white transition-all"
            >
              <iframe
                allowFullScreen
                className="w-full h-full object-cover rounded-lg"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.3087363456886!2d76.22557494541785!3d10.977228800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ccd0f546682d%3A0xa693892794eb8492!2sAyisha%20Complex!5e0!3m2!1sen!2sin!4v1715424838647!5m2!1sen!2sin"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(1) contrast(0.85)",
                }}
                title="Mehandis Bridal Rentals Location at Ayisha Complex"
                width="100%"
              ></iframe>
              <a
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                href="https://maps.app.goo.gl/2V5pq56WY1VkFqhs6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg hover:bg-white/20 transition-all">
                  <i className="fa-solid fa-map-location-dot"></i>
                  Open in Google Maps
                </div>
              </a>
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded text-[10px] text-white/80 pointer-events-none z-20 border border-white/10">
                Ayisha Complex, 1st Floor
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp delay={0.4}>
          <div className="mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-muted-grey/60 text-xs">
            <p>© 2024 Mehandis Bridal Rentals. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
};

export default Footer;
