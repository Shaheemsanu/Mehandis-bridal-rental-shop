import React from 'react';
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimationWrapper';

const reviews = [
  "Beautiful collection and very affordable pricing. Highly recommended!",
  "Jewellery quality was amazing, everyone asked where we got it from.",
  "Friendly staff and perfect bridal suggestions.",
  "Trusted shop in Perinthalmanna for bridal rentals."
];

const Testimonials: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-card-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-4 text-white">TESTIMONIALS</h2>
          <p className="text-muted-grey mb-12">
            Hundreds of happy brides across Kerala
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="h-full bg-black p-8 rounded-xl border border-border-subtle space-y-4 text-left hover:border-white/30 transition-all duration-300 hover:bg-black/80 hover:shadow-lg group">
                <p className="italic text-muted-grey text-sm group-hover:text-white transition-colors">
                  “{review}”
                </p>
                <div className="flex star-rating pt-2 text-yellow-500">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-xs">star</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeInUp delay={0.6}>
          <p className="mt-12 text-white font-bold tracking-widest uppercase opacity-80 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-white/50"></span>
            Hundreds of happy brides across Kerala
            <span className="w-8 h-[1px] bg-white/50"></span>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Testimonials;