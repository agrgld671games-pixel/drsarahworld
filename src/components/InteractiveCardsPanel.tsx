import React from 'react';
import { motion } from 'framer-motion';

const InteractiveCardsPanel: React.FC = () => {
  const cards = [
    {
      image: "/photo_5332715855701735466_y.jpg",
      title: "Quick Tips",
      description: "Get practical, science-based advice to apply immediately in your daily life."
    },
    {
      image: "/photo_5332715855701735465_x.jpg", 
      title: "Recipes Library",
      description: "Access a growing base of healthy, tasty, and easy recipes."
    },
    {
      image: "/IMG_5978(4).JPG",
      title: "Support & Psychology", 
      description: "Daily motivation, mindset tools, and personal feedback in Telegram."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Text Overlay - appears on hover */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCardsPanel;