import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimationWrapper';

const servicesList = [
  {
    title: "Bridal Dress Rentals",
    desc: "Bridal Lehengas, Wedding Gowns, Engagement & Reception dresses, Traditional Kerala Wear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2IRaEnuVdJEni6yBpUKlpbusfB3I2zrw6zAJBiveu_mOH-67JMbSku_4q10jg4HWj-XWbfO9kk0vGr_mp5JsLLW8p6hD27ltt6E1W8LDNdb3cAz0NuSj9_Mr1XTvFdIIDUWYW-SBF_w5FC_PV4M8RHB-4yhNAe5hfJvaLTcpffFU8ZgfduOs9EvC87EXarClL_qwfacYfXAf-DiLbT9XLnceIEGpwS1UKxcdS7DJOe4fTIi_ukbczl_wwMbZ4tzzeqhtqfRRNaWtw",
    alt: "A row of luxury designer bridal lehengas on hangers"
  },
  {
    title: "Jewellery Rentals",
    desc: "Temple Jewellery, Antique Gold Finish, Heavy bridal sets, and Lightweight elegant designs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIHW3hOH_3IqH0dWtSBdWvkO1zI_-jZGd9C0tkrUn511wUXvOfWyxswTA-4QF47CSSPHjO8lPd5mtLuYstrMfSEnMa_ZIZndc9PHadP9FPspHLG7NaQ3ryS152-ET4Hie3iEEZ1wZtk9s8UkFhcwX5UVHqZC2l1iXAVelq9H4H6vzCXLfgGLEz2PMEFzmdvvv6FqwlHqYJaVmJuBbt0Aaq03GxgjoO0pRv5eU4DJYwtSzBZC7_oDG9NjakEoYBCVvToz0UpYd3ebSP",
    alt: "Close up of intricate gold and diamond bridal necklace set"
  },
  {
    title: "Look Assistance",
    desc: "Dress + Jewellery matching, styling guidance, and look suggestions based on face & outfit.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7cXshaI_I4k-Pmr_5TSlncrL7bVb0jfk01wCsA40uQGf-dr6HE3gBAJM3ToomMjlf7PO-EMVlXgLtKHRqxTl2G7VHRZkUQy53JuEoPFLP3jMjT-E66_oACKCjXgnsfTA1ao9uJLCkBmVcdQMF8igeiQRLvowWYnbQnlLTp_tyDK0pI_tCWaPPeZgBXj_NcPgbVwEMDN6uS0autpB5EojkSTZPvmtXPcDfVSUPBYk5FNjzd1LJp32FX3MTgw-Vlcr8ORvzaYMa-Sc-",
    alt: "Professional stylist adjusting a bride's dupatta"
  }
];

const Services: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-background-main relative" id="services">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="flex justify-between items-end mb-10 border-b border-border-subtle pb-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                OUR SERVICES
              </h2>
              <p className="text-muted-grey">
                We offer a wide range of bridal outfits and premium jewellery collections.
              </p>
            </div>
          </div>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer border border-border-subtle shadow-lg"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Background Image Layer */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />
                
                {/* Gradient Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Layer */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.h4 
                    className="text-2xl font-bold text-white mb-2"
                    variants={{
                      rest: { y: 10 },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h4>
                  <motion.p 
                    className="text-muted-grey text-sm"
                    variants={{
                      rest: { opacity: 0, height: 0, y: 10 },
                      hover: { opacity: 1, height: 'auto', y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.desc}
                  </motion.p>
                  
                  {/* Decorative line */}
                  <motion.div 
                    className="h-1 bg-white mt-4 rounded-full"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: '40%' }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;