import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-gray-50 pt-16 pb-20">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900 mb-6">
              Discover <span className="text-primary-500">Fashion</span> Trends 
              <span className="block">Powered by <span className="relative">
                <span className="text-primary-500">AI</span>
                <span className="absolute top-0 right-0 -mr-4 -mt-4">
                  <Sparkles size={20} className="text-accent-500" />
                </span>
              </span></span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Join a community of fashion enthusiasts, share your personal style, and get AI-powered insights on the latest trends.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/join">
                <Button size="lg" leftIcon={<Sparkles size={18} />}>
                  Join TrendSetter
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Explore Trends
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start items-center space-x-6">
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-500">10k+</span>
                <span className="text-sm text-gray-500">Fashion Enthusiasts</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-500">5k+</span>
                <span className="text-sm text-gray-500">Style Posts</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-500">200+</span>
                <span className="text-sm text-gray-500">AI Trends</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fashion Trend" 
                className="rounded-xl shadow-xl w-full max-w-lg mx-auto"
              />
              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 w-64"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 rounded-full p-2 text-primary-500">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">AI Fashion Insight</h3>
                    <p className="text-xs text-gray-600">This style is trending up 23% this season in urban demographics</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg h-20 w-20 flex items-center justify-center text-center"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div>
                  <div className="text-accent-500 font-bold text-lg">2025</div>
                  <div className="text-xs">Trends</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;