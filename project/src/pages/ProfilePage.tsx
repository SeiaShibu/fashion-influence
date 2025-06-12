import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import Layout from '../components/layout/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import FashionPostCard from '../components/posts/FashionPostCard';
import { mockUsers, mockPosts, currentUser } from '../data/mockData';
import { User, FashionPost } from '../types';

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [userPosts, setUserPosts] = useState<FashionPost[]>([]);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch user profile data
    const fetchedUser = username 
      ? mockUsers.find(u => u.username === username) 
      : currentUser;
    
    if (fetchedUser) {
      setUser(fetchedUser);
      setIsCurrentUser(fetchedUser.id === currentUser.id);
      
      // Filter posts by this user
      const posts = mockPosts.filter(post => post.userId === fetchedUser.id);
      setUserPosts(posts);
    }
  }, [username]);

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <p className="text-center text-gray-600">Loading profile...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProfileHeader user={user} isCurrentUser={isCurrentUser} />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="posts">
          <TabsList className="mb-8">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="liked">Liked</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            {userPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {userPosts.map(post => (
                  <FashionPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts yet.</p>
                {isCurrentUser && (
                  <button className="mt-4 text-primary-500 font-medium">
                    Create your first post
                  </button>
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="text-center py-12">
              <p className="text-gray-500">No saved posts yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="liked">
            <div className="text-center py-12">
              <p className="text-gray-500">No liked posts yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="followers">
            <div className="text-center py-12">
              <p className="text-gray-500">No followers yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="following">
            <div className="text-center py-12">
              <p className="text-gray-500">Not following anyone yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;