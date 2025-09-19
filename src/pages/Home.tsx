import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Leaf, Users, Star, CheckCircle } from 'lucide-react';
import PinkTelegramButton from '../components/PinkTelegramButton';
import InteractiveSlider from '../components/InteractiveSlider';
import AccordionSection from '../components/AccordionSection';
import FullWidthInteractivePanel from '../components/FullWidthInteractivePanel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/Vejetaryen-Mutfaklarda-Ne-Yenir-.jpg)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left pt-40"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block #2F4538 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 -ml-3"
            >
              Free Guide
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              5 Weight Loss Mistakes You Don't Even Realize You're Making
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              A psychologist-backed nutrition guide to stop overeating, reduce food guilt, and start losing weight without diets or restrictions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
             className="flex justify-start"
            >
              <PinkTelegramButton text="Get it on Telegram" size="large" className="ml-0 mr-auto" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Interactive Slider Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-white/50"
      >
        <InteractiveSlider />
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-white/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Real Results: Before & After
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how my clients transformed their relationship with food and body — without strict diets or restrictions.
            </p>
          </motion.div>

          {/* Desktop Version - 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "/photo_5330024869712232250_y(1).jpg",
                testimonial: "I finally stopped binge eating after years of failed diets. Sarah's approach actually works!",
                author: "Emma R.",
                timeframe: "15 weeks"
              },
              {
                image: "/IMG_5958(1).JPEG",
                testimonial: "No more food guilt or shame. I eat intuitively now and feel amazing in my body.",
                author: "Lisa K.",
                timeframe: "8 weeks"
              },
              {
                image: "/photo_5328199813554105216_y(3).jpg",
                testimonial: "After many years of trying to lose weight, I was finally able to start changing! Sarah explained to me that all these years I was eating too little, which is why I couldn't lose weight! I was shocked!",
                author: "Sarah M.",
                timeframe: "4 weeks"
              }
            ].map((client, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg transform scale-110"
              >
                {/* Before & After Labels */}
                {index === 1 ? (
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
                
                {/* Single Collage Image */}
                <div className="mb-6">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                    <img 
                      src={client.image}
                      alt="Before and after transformation collage" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial */}
                <p className="text-gray-700 mb-4 italic text-center">"{client.testimonial}"</p>
                
                {/* Author and Timeframe */}
                <div>
                  <p className="font-bold text-gray-800 text-center">{client.author}</p>
                  <p className="text-pink-600 text-sm text-center">{client.timeframe}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Version - Carousel */}
          <div className="lg:hidden mb-12">
            <TestimonialsCarousel 
              testimonials={[
                {
                  image: "/photo_5330024869712232250_y(1).jpg",
                  testimonial: "I finally stopped binge eating after years of failed diets. Sarah's approach actually works!",
                  author: "Emma R.",
                  timeframe: "15 weeks"
                },
                {
                  image: "/IMG_5958(1).JPEG",
                  testimonial: "No more food guilt or shame. I eat intuitively now and feel amazing in my body.",
                  author: "Lisa K.",
                  timeframe: "8 weeks"
                },
                {
                  image: "/photo_5328199813554105216_y(3).jpg",
                  testimonial: "After many years of trying to lose weight, I was finally able to start changing! Sarah explained to me that all these years I was eating too little, which is why I couldn't lose weight! I was shocked!",
                  author: "Sarah M.",
                  timeframe: "4 weeks"
                }
              ]}
            />
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <PinkTelegramButton text="Get daily support on Telegram" />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Diets Don't Work */}
      <AccordionSection />

      {/* Full Width Interactive Panel */}
      <FullWidthInteractivePanel />

      {/* Final CTA Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-10 bg-white/50"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Ready to feel in control around food?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands who've transformed their relationship with food using psychology-backed methods
          </p>
          <PinkTelegramButton text="Start your transformation on Telegram" size="large" />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;