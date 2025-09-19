import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PinkTelegramButton from '../components/PinkTelegramButton';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, readTime, image, content }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
        className="py-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              {date} • <Clock className="w-4 h-4 ml-2 mr-2" /> {readTime}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              {title}
            </h1>
            
            <div className="aspect-video overflow-hidden rounded-3xl shadow-lg mb-8">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
        className="pb-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg prose-gray max-w-none"
          >
            {content}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16 pt-12 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to transform your relationship with food?
            </h3>
            <PinkTelegramButton text="Join me in Telegram" size="large" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPost;