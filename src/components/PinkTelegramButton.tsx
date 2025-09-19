import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface PinkTelegramButtonProps {
  text?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  className?: string;
}

const PinkTelegramButton: React.FC<PinkTelegramButtonProps> = ({ 
  text = "Join me in Telegram", 
  size = "large",
  className = "" 
}) => {
  const sizeClasses = {
    'extra-small': "px-4 py-2 text-sm",
    small: "px-6 py-3 text-base",
    medium: "px-6 py-6 text-lg",
    large: "px-5 py-10 text-xl"
  };

  const handleClick = () => {
    window.open('https://t.me/+Evlm-2Q99_c4OTIy', '_blank');
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(247, 198, 217, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`
        bg-gradient-to-r from-[#2F4538] to-[#2F4538] hover:from-[#253a2e] hover:to-[#253a2e] text-white font-bold rounded-xl 
        shadow-lg hover:shadow-xl transition-all duration-300 
        flex items-center justify-center gap-2
        ${sizeClasses[size]} mx-auto ${className}
      `}
    >
      <Send size={size === 'extra-small' || size === 'small' ? 16 : 20} />
      {text}
    </motion.button>
  );
};

export default PinkTelegramButton;