import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaClock, FaGem } from 'react-icons/fa';

// Import your building/architecture images
import homeBanner from '../assets/imageBanner3.png';

const HeroStatic = () => {
  const { t } = useTranslation();

  // This data structure is assumed based on your code
  const heroElements = t('pages.home.heroElements', { returnObjects: true }) || [];

  const icons = [
    <FaCalculator className="h-8 w-8" />,
    <FaClock className="h-8 w-8" />,
    <FaGem className="h-8 w-8" />
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced overlay for better text contrast */}
      <div className="absolute inset-0">
        <img 
          src={homeBanner} 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title with white text and hover effects */}
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4 drop-shadow-2xl">
          <span className="block mb-4 text-white font-serif opacity-90 hover:opacity-100 transition-opacity duration-300">
            {t('pages.home.heroTitle1')}
          </span>
          <span className="block text-white font-serif opacity-85 hover:opacity-100 transition-opacity duration-300">
            {t('pages.home.heroTitle2')}
          </span>
        </h1>

        {/* Luxury Accent Line */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Description with white text and opacity */}
        <p className="text-xl md:text-[20px] text-white leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-lg opacity-85 hover:opacity-100 transition-opacity duration-300">
          {t('pages.home.heroDescription')}
        </p>
      
        {/* Luxury Icons with white text */}
        <div className="flex justify-center gap-12 md:gap-16">
          {heroElements.map((element, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#04244D] group-hover:scale-110 group-hover:shadow-2xl opacity-90 group-hover:opacity-100">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white font-serif tracking-wide opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                {element.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;