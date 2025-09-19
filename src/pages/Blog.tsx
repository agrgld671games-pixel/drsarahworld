import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PinkTelegramButton from '../components/PinkTelegramButton';

const Blog: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const blogPosts = [
    {
      title: "5 Signs You're an Emotional Eater (And What to Do About It)",
      excerpt: "Learn to identify the subtle signs of emotional eating and discover psychology-backed strategies to break the cycle.",
      image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 15, 2025",
      readTime: "7 min read",
      slug: "/blog/emotional-eating"
    },
    {
      title: "Why Your Last Diet Failed (It's Not Your Fault)",
      excerpt: "Understanding the psychological and physiological reasons why diets don't work long-term.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 10, 2025",
      readTime: "7 min read",
      slug: "/blog/why-diets-fail"
    },
    {
      title: "The Mindful Eating Revolution: How to Start Today",
      excerpt: "Simple, practical steps to begin eating mindfully and reconnect with your body's natural hunger cues.",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 5, 2025",
      readTime: "6 min read",
      slug: "/blog/mindful-eating"
    },
    {
      title: "Breaking the Binge-Restrict Cycle Once and for All",
      excerpt: "Evidence-based strategies to escape the exhausting cycle of restriction and overeating.",
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "December 28, 2024",
      readTime: "8 min read",
      slug: "/blog/binge-restrict-cycle"
    }
  ];

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
            Latest Insights
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed mb-12"
          >
            Psychology-backed strategies, nutrition insights, and real-world tips to transform your relationship with food.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <PinkTelegramButton text="Get personalized tips on Telegram" />
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-20 bg-gradient-to-br from-pink-50 to-orange-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date} • {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={post.slug}
                      className="text-pink-600 font-medium hover:text-pink-700 flex items-center"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <PinkTelegramButton text="Discuss on Telegram" size="small" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Want personalized advice?
            </h3>
            <PinkTelegramButton text="Chat with me on Telegram" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;