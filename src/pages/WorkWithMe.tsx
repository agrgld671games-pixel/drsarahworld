import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Target, Send } from 'lucide-react';
import PinkTelegramButton from '../components/PinkTelegramButton';

const WorkWithMe: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Intro Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="pt-20 pb-20 bg-cover bg-center bg-no-repeat relative h-[70vh]"
        style={{backgroundImage: 'url(/IMG_5985.JPG)'}}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center h-full">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            Step-by-step lifestyle transformation — not strict diets
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Choose the level of support that fits your needs. Both programs include psychology-backed strategies, personalized guidance, and ongoing support through Telegram.
          </motion.p>
        </div>
      </motion.section>

      {/* Package Cards */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.3 } }
        }}
        className="py-20 bg-white/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Light Package */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-pink-200 text-gray-800 px-4 py-2 rounded-bl-2xl font-medium">
                Perfect for beginners
              </div>
              
              <Sparkles className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Light — 7 Days</h3>
              <p className="text-gray-600 mb-8">
                Get started with the fundamentals of emotional eating awareness and gentle nutrition.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Daily check-ins on Telegram",
                  "5 Weight Loss Mistakes guide",
                  "Emotional eating triggers assessment",
                  "Mindful eating techniques",
                  "Basic meal planning principles",
                  "7 days of personal support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-900 text-white p-6 rounded-2xl mb-8 text-center">
                <div className="text-lg text-green-200 line-through mb-2">$199</div>
                <div className="text-4xl font-bold">$139</div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#2F4538] to-[#2F4538] hover:from-[#253a2e] hover:to-[#253a2e] text-white font-bold rounded-xl px-6 py-4 text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="w-4 h-4" />
                Start Light Program
              </button>
            </motion.div>

            {/* Deep Package */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden border-2 border-pink-200"
            >
              <div className="absolute top-0 right-0 bg-pink-300 text-gray-800 px-4 py-2 rounded-bl-2xl font-medium">
                Most popular
              </div>
              
              <Target className="w-12 h-12 text-pink-500 mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Deep — 30 Days</h3>
              <p className="text-gray-600 mb-8">
                Comprehensive transformation program with personalized coaching and ongoing support.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Everything from Light program",
                  "Weekly 1-on-1 coaching calls",
                  "Personalized CBT exercises",
                  "Custom meal planning guidance",
                  "24/7 Telegram support access",
                  "Habit tracking and accountability",
                  "Relapse prevention strategies",
                  "30 days of intensive support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-900 text-white p-6 rounded-2xl mb-8 text-center">
                <div className="text-lg text-green-300 line-through mb-2">$499</div>
                <div className="text-4xl font-bold">$349</div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#2F4538] to-[#2F4538] hover:from-[#253a2e] hover:to-[#253a2e] text-white font-bold rounded-xl px-6 py-4 text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="w-4 h-4" />
                Start Deep Program
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Questions CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white/50"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm here to help you choose the right program for your goals and answer any questions you might have.
          </p>
          <PinkTelegramButton text="Ask me anything on Telegram" size="large" />
        </div>
      </motion.section>
    </div>
  );
};

export default WorkWithMe;