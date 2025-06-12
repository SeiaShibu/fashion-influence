import { Edit, MapPin, Calendar, Users, Camera } from 'lucide-react';
import { User } from '../../types';
import Button from '../ui/Button';

interface ProfileHeaderProps {
  user: User;
  isCurrentUser?: boolean;
}

const ProfileHeader = ({ user, isCurrentUser = false }: ProfileHeaderProps) => {
  return (
    <div className="relative">
      {/* Cover image */}
      <div className="h-64 w-full relative bg-gray-200 overflow-hidden">
        <img 
          src={user.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover" 
        />
        {isCurrentUser && (
          <button className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
            <Camera size={20} />
          </button>
        )}
      </div>
      
      {/* Profile section */}
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row -mt-16 md:-mt-24 pb-4">
          {/* Profile image */}
          <div className="z-10 md:ml-4 lg:ml-10 flex-shrink-0 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
              <img 
                src={user.profileImage} 
                alt={user.username} 
                className="w-full h-full object-cover"
              />
            </div>
            {isCurrentUser && (
              <button className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <Camera size={16} />
              </button>
            )}
          </div>
          
          {/* Profile info */}
          <div className="flex-grow pt-4 md:pt-16 px-2 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  {user.fullName}
                </h1>
                <div className="flex items-center mt-1 text-gray-500 text-sm">
                  <span>@{user.username}</span>
                </div>
                
                <div className="mt-3">
                  <p className="text-gray-700">{user.bio}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {isCurrentUser ? (
                  <Button
                    variant="outline"
                    leftIcon={<Edit size={16} />}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button>Follow</Button>
                )}
              </div>
            </div>
            
            {/* Stats and info */}
            <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-6 gap-3 md:gap-6">
              <div className="flex space-x-6">
                <div className="text-center md:text-left">
                  <span className="block text-lg font-bold">{user.followers.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">Followers</span>
                </div>
                
                <div className="text-center md:text-left">
                  <span className="block text-lg font-bold">{user.following.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">Following</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={16} className="mr-1" />
                <span>Joined {new Date(user.joinedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;