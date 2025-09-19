import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Clock } from 'lucide-react';
import PinkTelegramButton from '../components/PinkTelegramButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Netlify Forms submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Have questions about emotional eating or want to learn more about my programs? I'm here to help.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form & Telegram CTA */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20 bg-gradient-to-br from-pink-50 to-orange-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-colors flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  } text-white`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl"
                  >
                    ❌ Error sending message. Please try again or message me on Telegram.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Telegram Priority */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-pink-100 p-8 rounded-3xl">
                <MessageCircle className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  For fastest help, message me on Telegram
                </h3>
                <p className="text-gray-600 mb-6">
                  Get immediate responses and personalized support. I'm active on Telegram daily and respond within hours.
                </p>
                <PinkTelegramButton text="Message me in Telegram" />
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <Clock className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Response Times
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Telegram:</strong> Within 2-4 hours</li>
                  <li>• <strong>Email:</strong> Within 24-48 hours</li>
                  <li>• <strong>Form submissions:</strong> Within 48 hours</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Ready to start your transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join me on Telegram for daily support, tips, and personalized guidance on your journey to food freedom.
          </p>
          <PinkTelegramButton text="Start your journey on Telegram" size="large" />
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;