import { Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { Trend } from '../../types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AITrendSectionProps {
  trends: Trend[];
}

const AITrendSection = ({ trends }: AITrendSectionProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Cpu size={16} className="mr-2" />
            <span>AI-Powered Insights</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Trending Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes global fashion data to identify emerging trends before they go mainstream.
            Stay ahead of the curve with our predictive fashion insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={trend.imageUrl} 
                    alt={trend.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute top-0 right-0 m-3">
                    <div className="flex items-center space-x-1 bg-black/70 text-white text-xs font-medium py-1 px-2 rounded">
                      <TrendingUp size={14} />
                      <span>{trend.popularity}%</span>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 m-3">
                    <span className={`
                      text-xs font-semibold py-1 px-2 rounded
                      ${trend.category === 'Rising' ? 'bg-accent-500 text-white' : ''}
                      ${trend.category === 'Popular' ? 'bg-primary-500 text-white' : ''}
                      ${trend.category === 'Seasonal' ? 'bg-secondary-500 text-white' : ''}
                      ${trend.category === 'Classic' ? 'bg-gray-700 text-white' : ''}
                    `}>
                      {trend.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                    {trend.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1 mb-4">
                    {trend.description}
                  </p>
                  <Link 
                    to={`/trends/${trend.id}`}
                    className="inline-flex items-center text-primary-500 font-medium text-sm hover:text-primary-600 mt-auto"
                  >
                    Explore trend
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITrendSection;