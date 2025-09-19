import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PinkTelegramButton from './PinkTelegramButton';

const InteractiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      headline: "Stop Emotional Eating",
      description: "Learn to break free from stress-eating patterns with psychology-backed tools.",
      image: "/IMG_5925.JPG"
    },
    {
      headline: "Gentle Nutrition",
      description: "Eat without guilt and find balance — discover healthy food that's satisfying and stress-free.",
      image: "/IMG_5940.JPG"
    },
    {
      headline: "Sustainable Results",
      description: "Create lasting habits that make weight loss natural and enjoyable, without diets or restrictions.",
      image: "/IMG_5936(1).JPG"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="grid lg:grid-cols-3 h-full relative">
            {/* Content Side */}
            <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-16 bg-white/50 lg:bg-white/50 relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                {slides[currentSlide].headline}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-md"
              >
                <PinkTelegramButton text="Join me in Telegram" size="large" className="mx-0" />
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative overflow-hidden bg-white/50 flex justify-end lg:relative absolute inset-0 lg:inset-auto">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].headline}
                className="w-auto h-full object-cover aspect-[9/16] image-rendering-crisp lg:w-auto lg:h-full w-full"
                loading="eager"
                decoding="sync"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 lg:bg-gradient-to-l lg:from-transparent lg:to-white/10 bg-black/40"></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gray-800 shadow-lg scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-white/80 px-4 py-2 rounded-xl text-gray-800 font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default InteractiveSlider;