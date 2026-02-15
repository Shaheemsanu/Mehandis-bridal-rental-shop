import React from 'react';
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from './AnimationWrapper';

const features = [
  {
    icon: "verified",
    title: "Premium Collection",
    desc: "Luxury bridal wear and premium jewellery collections, featuring trendy and traditional designs, with clean and well-maintained outfits for every bride."
  },
  {
    icon: "favorite",
    title: "Trusted by Thousands",
    desc: "Built on genuine trust and reviews, we have styled hundreds of happy brides across Kerala with professional and personalized service."
  },
  {
    icon: "payments",
    title: "Affordable Packages",
    desc: "Luxury bridal looks made truly affordable. Enjoy premium quality, elegant styling, and flawless designs, helping every bride look stunning on her big day without financial stress."
  }
];

const About: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-16" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-12">
          <FadeInUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-sm font-bold uppercase tracking-widest border-l-2 border-white pl-4">
                ABOUT US
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight max-w-[800px] text-white">
                Every bride deserves to look stunning — without financial stress.
              </h3>
              <p className="text-muted-grey text-lg max-w-[720px]">
                Mehandis Bridal Rentals is a premium bridal rental boutique
                located in Perinthalmanna, Malappuram district. We specialize
                in providing high-quality bridal dresses, jewellery, and
                complete bridal styling support for weddings, engagements,
                receptions, and special occasions.
              </p>
              <p className="text-muted-grey text-lg max-w-[720px]">
                With years of experience and strong social media presence, we
                have styled hundreds of happy brides across Kerala.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="h-full flex flex-col gap-5 rounded-xl border border-border-subtle bg-card-bg p-8 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:-translate-y-2 transition-all duration-300 group cursor-default">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <span className="material-symbols-outlined text-3xl">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-accent-white transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-grey leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;