import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PinkTelegramButton from './PinkTelegramButton';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work With Me', href: '/work-with-me' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Floating background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-60 right-20 w-48 h-48 bg-orange-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-300/25 rounded-full blur-xl"
        />
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Dr. Sarah Chen
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-pink-600 transition-colors font-medium ${
                    location.pathname === item.href ? 'text-green-800' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <PinkTelegramButton size="small" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-pink-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-gray-700 hover:text-pink-600 transition-colors font-medium ${
                      location.pathname === item.href ? 'text-pink-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <PinkTelegramButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Layout;