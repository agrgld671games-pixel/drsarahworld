import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import PinkTelegramButton from '../components/PinkTelegramButton';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Personal Intro */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <img 
                src="/openart-image_P--fwfQ7_1755438786171_raw.jpg"
                alt="Dr. Sarah Chen in her office" 
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Hi, I'm Dr. Sarah Chen
              </h1>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  My journey with food wasn't always healthy. As a psychology graduate student, I found myself caught in the same diet-binge cycles I now help others escape from.
                </p>
                <p>
                  That personal struggle led me to dive deep into the research on eating psychology, cognitive behavioral therapy, and intuitive eating. I discovered that lasting change happens when we address both the mind and body together.
                </p>
                <p>
                  Today, I've helped over 2,000 people break free from emotional eating and build sustainable, guilt-free relationships with food. My approach isn't about another diet—it's about understanding why you eat and creating lasting change from the inside out.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Two-column Approach */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              My Two-Pillar Approach
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl shadow-lg">
              <Heart className="w-12 h-12 text-green-800 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-6">CBT Tools for Emotional Eating</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Cognitive Behavioral Therapy techniques help you identify and change the thought patterns that drive emotional eating.
                </p>
                <ul className="space-y-3">
                  <li>• Trigger identification and management</li>
                  <li>• Thought challenging and reframing</li>
                  <li>• Mindfulness and emotional regulation</li>
                  <li>• Healthy coping strategy development</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl shadow-lg">
              <GraduationCap className="w-12 h-12 text-green-800 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Gentle Nutrition Principles</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Evidence-based nutrition without the restriction. Learn to nourish your body while honoring your natural hunger and fullness cues.
                </p>
                <ul className="space-y-3">
                  <li>• Intuitive eating fundamentals</li>
                  <li>• Hunger and fullness awareness</li>
                  <li>• Food peace and neutrality</li>
                  <li>• Sustainable lifestyle habits</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience & Education */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20 bg-gradient-to-br from-orange-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Experience & Education
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: GraduationCap,
                title: "Ph.D. Clinical Psychology",
                subtitle: "Stanford University",
                description: "Specialized in eating disorders and cognitive behavioral therapy"
              },
              {
                icon: Award,
                title: "Certified Nutrition Coach",
                subtitle: "Precision Nutrition",
                description: "Evidence-based nutrition coaching certification"
              },
              {
                icon: Users,
                title: "2000+ Clients Helped",
                subtitle: "5+ Years Practice",
                description: "Successfully guided thousands to food freedom"
              },
              {
                icon: Heart,
                title: "Continuing Education",
                subtitle: "Latest Research",
                description: "Regularly updated on eating psychology advances"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <item.icon className="w-12 h-12 text-green-800 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-green-800 font-medium mb-3">{item.subtitle}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <PinkTelegramButton text="Join me in Telegram" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;