import { Heart, MessageCircle, Sparkles } from 'lucide-react';
import { FashionPost } from '../../types';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

interface FashionPostCardProps {
  post: FashionPost;
}

const FashionPostCard = ({ post }: FashionPostCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <Link to={`/posts/${post.id}`}>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </Link>
        {/* AI Tag */}
        {post.aiInsights && post.aiInsights.length > 0 && (
          <div className="absolute top-3 left-3 bg-black/70 text-white text-xs rounded-full px-2.5 py-1 flex items-center">
            <Sparkles size={12} className="text-primary-400 mr-1" />
            <span>AI Insights</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* User info */}
        <div className="flex items-center mb-3">
          <Link to={`/profile/${post.userId}`} className="flex items-center">
            <img 
              src={post.userProfileImage} 
              alt={post.username} 
              className="w-8 h-8 rounded-full object-cover border border-gray-200" 
            />
            <span className="ml-2 font-medium text-sm text-gray-900">
              {post.username}
            </span>
          </Link>
        </div>
        
        {/* Post details */}
        <Link to={`/posts/${post.id}`} className="group">
          <h3 className="font-serif font-medium text-lg text-gray-900 group-hover:text-primary-500 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {post.description}
          </p>
        </Link>
        
        {/* Tags */}
        <div className="flex flex-wrap mt-3 gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <Link 
              key={tag} 
              to={`/tags/${tag}`}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              #{tag}
            </Link>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-gray-500 px-1 py-1">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
        
        {/* Post stats */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Heart size={16} className="mr-1" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle size={16} className="mr-1" />
            <span>{post.comments}</span>
          </div>
          <div className="text-xs text-gray-400">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FashionPostCard;