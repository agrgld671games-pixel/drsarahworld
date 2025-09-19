import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullWidthInteractivePanel: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const sections = [
    {
      title: "Quick Tips",
      image: "/photo_5332715855701735466_y.jpg",
      text: "Get practical, science-based advice to apply immediately in your daily life."
    },
    {
      title: "Recipes Library", 
      image: "/photo_5332715855701735465_x.jpg",
      text: "Access a growing base of healthy, tasty, and easy recipes."
    },
    {
      title: "Support & Psychology",
      image: "/IMG_5978(4).JPG", 
      text: "Daily motivation, mindset tools, and personal feedback in Telegram."
    }
  ];

  const handleTelegramClick = () => {
    window.open('https://t.me/+Evlm-2Q99_c4OTIy', '_blank');
  };

  return (
    <section className="w-full bg-white/50">
      {/* Desktop Version */}
      <div className="hidden md:block relative w-full aspect-[32/9] overflow-hidden">
        
        {/* Background Images */}
        <AnimatePresence>
          {hoveredSection !== null && (
            <motion.div
              key={hoveredSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={sections[hoveredSection].image}
                alt={sections[hoveredSection].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Three Title Sections */}
        <div className="absolute inset-0 grid grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center cursor-pointer group px-8"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Title - Always Visible */}
              <motion.h3
                className={`text-3xl lg:text-4xl font-bold text-center leading-tight transition-colors duration-300 ${
                  hoveredSection === null 
                    ? 'text-gray-800' 
                    : hoveredSection === index 
                      ? 'text-white' 
                      : 'text-white/70'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {section.title}
              </motion.h3>

              {/* Description Text and Button - Appears on Hover */}
              <AnimatePresence>
                {hoveredSection === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-col items-center text-center mt-6"
                  >
                    <p className="text-white text-lg leading-relaxed max-w-xs mb-6">
                      {section.text}
                    </p>
                    
                    {/* Individual Button for this slide */}
                    <motion.button
                      whileHover={{ 
                        opacity: 1,
                        scale: 1.05 
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleTelegramClick}
                      className="bg-[#2E5339]/80 hover:bg-[#2E5339] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Join me in Telegram
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version - Stacked Sections */}
      <div className="md:hidden space-y-0">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative min-h-[400px] overflow-hidden"
            onClick={() => setHoveredSection(hoveredSection === index ? null : index)}
          >
            <div className="absolute inset-0">
              <img 
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 min-h-[400px]">
              <h3 className="text-2xl font-bold text-white mb-4">
                {section.title}
              </h3>
              <p className="text-white/90 leading-relaxed mb-6 px-2 max-w-sm">
                {section.text}
              </p>
              
              {/* Individual Mobile Button */}
              <motion.button
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTelegramClick}
                className="bg-[#2E5339]/90 hover:bg-[#2E5339] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg text-base mt-2"
              >
                Join me in Telegram
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FullWidthInteractivePanel;