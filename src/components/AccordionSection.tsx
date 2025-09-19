import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Leaf, CheckCircle, Star, Users } from 'lucide-react';
import AccordionCard from './AccordionCard';
import PinkTelegramButton from './PinkTelegramButton';

const AccordionSection: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const accordionData = [
    {
      title: "Why Diets Don't Work",
      icon: Brain,
      content: (
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            Traditional dieting ignores the psychological factors that drive our eating behaviors.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#4B7F52] rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Stress, boredom, and emotions drive 80% of overeating episodes</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#4B7F52] rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Restriction leads to binge cycles and negative self-talk</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#4B7F52] rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Your body and mind rebel against artificial restrictions</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Psychology + Nutrition = Lasting Change",
      icon: Heart,
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            I combine evidence-based psychology with gentle nutrition principles to heal your relationship with food.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-[#4B7F52] mb-4">Cognitive Behavioral Therapy (CBT):</h4>
              <ul className="space-y-3">
                {[
                  "Identify emotional eating triggers",
                  "Reframe negative thought patterns", 
                  "Build healthy coping mechanisms",
                  "Practice mindful eating techniques"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#4B7F52] mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-[#4B7F52] mb-4">Intuitive Nutrition:</h4>
              <ul className="space-y-3">
                {[
                  "Honor your hunger and fullness cues",
                  "Make peace with all foods",
                  "Learn what healthy eating truly means for your body",
                  "Enjoy food that tastes good while losing weight easily and without stress"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#4B7F52] mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What You'll Experience",
      icon: Leaf,
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: "Peace with food", description: "End the guilt-binge cycle forever" },
              { icon: Brain, title: "Mental clarity", description: "Stop obsessing about food choices" },
              { icon: Users, title: "Confident eating", description: "Feel comfortable in any social situation" },
              { icon: Star, title: "Natural weight loss", description: "Sustainable results without dieting" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <benefit.icon className="w-6 h-6 text-[#4B7F52] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#4B7F52] mb-1">{benefit.title}</h5>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        animate: { transition: { staggerChildren: 0.2 } }
      }}
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{backgroundImage: 'url(/IMG_5978(2).JPG)'}}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6">
          {accordionData.map((card, index) => (
            <AccordionCard
              key={index}
              title={card.title}
              content={card.content}
              icon={card.icon}
              isOpen={openCard === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <PinkTelegramButton text="Learn the solution on Telegram" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccordionSection;