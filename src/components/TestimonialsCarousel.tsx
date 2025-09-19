import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface Testimonial {
  image: string;
  testimonial: string;
  author: string;
  timeframe: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative h-auto min-h-[500px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg min-h-[500px] flex flex-col">
              {/* Before/After Labels */}
              {currentIndex === 1 ? (
                <div className="grid grid-cols-2 gap-0 mb-2">
                  <p className="text-sm font-medium text-gray-500 text-center">Before</p>
                  <p className="text-sm font-medium text-gray-500 text-center">After</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-0 mb-2">
                  <p className="text-sm font-medium text-gray-500 text-center">After</p>
                  <p className="text-sm font-medium text-gray-500 text-center">Before</p>
                </div>
              )}
              
              {/* Image */}
              <div className="mb-6">
                <div className="aspect-[3/4] max-h-[300px] overflow-hidden rounded-2xl shadow-md">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt="Before and after transformation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic text-center text-sm leading-relaxed">
                "{testimonials[currentIndex].testimonial}"
              </p>
              
              {/* Author and Timeframe */}
              <div className="mt-auto">
                <p className="font-bold text-gray-800 text-center">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-pink-600 text-sm text-center">
                  {testimonials[currentIndex].timeframe}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-pink-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Swipe left or right to see more testimonials
      </p>
    </div>
  );
};

export default TestimonialsCarousel;