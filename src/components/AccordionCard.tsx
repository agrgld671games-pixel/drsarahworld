import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Heart, Leaf, CheckCircle, Star, Users } from 'lucide-react';

interface AccordionCardProps {
  title: string;
  content: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ 
  title, 
  content, 
  icon: Icon, 
  isOpen, 
  onToggle 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <Icon className="w-8 h-8 text-[#4B7F52] mr-4 flex-shrink-0" />
          <h3 className="text-2xl md:text-3xl font-bold text-[#4B7F52]">
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-[#4B7F52]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-0">
              <div className="border-t border-gray-200 pt-6">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionCard;