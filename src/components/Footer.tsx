import React from 'react';
import { Link } from 'react-router-dom';
import PinkTelegramButton from './PinkTelegramButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="/privacy" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>&copy; 2025 Dr. Sarah Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;