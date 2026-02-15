import React from "react";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const Collection: React.FC = () => {
  // Using picsum to replace missing local assets
  const images = Array.from({ length: 8 }).map(
    (_, i) => `assets/image_${i + 1}.png`,
  );

  return (
    <section className="py-16 overflow-hidden">
      <div className="px-6 md:px-20 mb-8 max-w-[1200px] mx-auto flex justify-between items-center">
        <FadeInUp>
          <div>
            <h2 className="text-2xl font-bold text-white">
              OUR BRIDAL COLLECTION
            </h2>
            <p className="text-muted-grey text-sm">Real Brides • Real Beauty</p>
          </div>
        </FadeInUp>
        <motion.a
          whileHover={{ x: 5, color: "#ffffff" }}
          className="text-muted-grey font-bold hover:underline transition-colors flex items-center gap-2"
          href="https://instagram.com/mehandis_bridal_rentals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow @mehandis_bridal_rentals
          <i className="fa-solid fa-arrow-right text-sm"></i>
        </motion.a>
      </div>

      <StaggerContainer
        className="flex gap-4 sm:gap-4 md:gap-6 lg:gap-8 px-6 md:px-20 overflow-x-auto no-scrollbar py-8"
        staggerDelay={0.05}
      >
        {images.map((img, i) => (
          <StaggerItem
            key={i}
            variants={{
              hidden: { opacity: 0, x: 50 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[220px] md:min-w-[260px] lg:min-w-[300px] aspect-square rounded-lg overflow-hidden border border-border-subtle hover:border-white transition-all duration-500 shrink-0 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Collection Item ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default Collection;
