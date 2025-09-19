import React from 'react';
import { motion } from 'framer-motion';
import PinkTelegramButton from './PinkTelegramButton';

const StickyMobileCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 p-2 bg-white/95 backdrop-blur-sm shadow-lg z-50 md:hidden border-t"
    >
      <PinkTelegramButton text="Get daily support on Telegram" />
    </motion.div>
  );
};

export default StickyMobileCTA;