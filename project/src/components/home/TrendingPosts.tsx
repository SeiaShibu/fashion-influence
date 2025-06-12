import { ChevronRight } from 'lucide-react';
import { FashionPost } from '../../types';
import Card from '../ui/Card';
import FashionPostCard from '../posts/FashionPostCard';
import { Link } from 'react-router-dom';

interface TrendingPostsProps {
  posts: FashionPost[];
}

const TrendingPosts = ({ posts }: TrendingPostsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-600 mt-2">Discover what's hot in the fashion world right now</p>
          </div>
          <Link 
            to="/explore" 
            className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
          >
            View all
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <FashionPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;