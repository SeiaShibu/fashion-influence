import { User, FashionPost, Trend } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user1',
    username: 'sophia_styles',
    fullName: 'Sophia Chen',
    bio: 'Fashion designer and style enthusiast. Sharing my creative journey and fashion finds.',
    profileImage: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coverImage: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    followers: 2543,
    following: 365,
    joinedDate: '2023-03-15',
  },
  {
    id: 'user2',
    username: 'marcus_threads',
    fullName: 'Marcus Johnson',
    bio: 'Streetwear enthusiast. Always on the hunt for the next big trend.',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coverImage: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    followers: 1876,
    following: 421,
    joinedDate: '2023-05-22',
  },
  {
    id: 'user3',
    username: 'elena_couture',
    fullName: 'Elena Rodriguez',
    bio: 'Fashion stylist and image consultant. Helping you find your unique style.',
    profileImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coverImage: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    followers: 3298,
    following: 267,
    joinedDate: '2023-01-10',
  },
];

export const currentUser = mockUsers[0];

export const mockPosts: FashionPost[] = [
  {
    id: 'post1',
    userId: 'user2',
    username: 'marcus_threads',
    userProfileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Urban Essentials',
    description: 'Monochrome layers for the perfect street style look this fall. What do you think about the oversized silhouette trend?',
    tags: ['streetwear', 'monochrome', 'layering', 'fall2025'],
    likes: 342,
    comments: 28,
    createdAt: '2025-09-18T14:23:00Z',
    aiInsights: [
      'This style combines contemporary streetwear with classic minimalism',
      'Oversized silhouettes are trending up 32% this season',
      'Monochrome outfits are gaining popularity among urban fashion enthusiasts'
    ],
  },
  {
    id: 'post2',
    userId: 'user3',
    username: 'elena_couture',
    userProfileImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Parisian Chic',
    description: 'Effortless elegance inspired by French fashion. Simple yet sophisticated for everyday wear.',
    tags: ['parisian', 'minimalist', 'elegant', 'everyday'],
    likes: 529,
    comments: 47,
    createdAt: '2025-09-15T09:45:00Z',
    aiInsights: [
      'This aesthetic aligns with the growing "quiet luxury" movement',
      'Neutral tones are forecasted to remain strong through 2026',
      'Similar styles are trending in major European fashion centers'
    ],
  },
  {
    id: 'post3',
    userId: 'user1',
    username: 'sophia_styles',
    userProfileImage: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Summer Vibes',
    description: 'Bright colors and flowy fabrics are my go-to for the perfect summer look. This dress makes me feel so free and confident!',
    tags: ['summer', 'bright', 'colorful', 'dress'],
    likes: 678,
    comments: 53,
    createdAt: '2025-09-12T16:30:00Z',
    aiInsights: [
      'Vibrant summer patterns are expected to see a 45% increase next season',
      'This style reflects the "dopamine dressing" trend that\'s gaining momentum',
      'Similar color palettes are trending across multiple designer collections'
    ],
  },
  {
    id: 'post4',
    userId: 'user2',
    username: 'marcus_threads',
    userProfileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Athleisure Redefined',
    description: 'Comfort meets style in this athleisure outfit. Perfect for both workout and casual outings.',
    tags: ['athleisure', 'sportswear', 'comfort', 'versatile'],
    likes: 421,
    comments: 36,
    createdAt: '2025-09-10T11:15:00Z',
    aiInsights: [
      'Athleisure continues to dominate casual wear markets in 2025',
      'This style balances performance features with fashion elements',
      'Similar looks are trending among 25-34 year old demographics'
    ],
  },
];

export const mockTrends: Trend[] = [
  {
    id: 'trend1',
    name: 'Eco-Conscious Fabrics',
    category: 'Rising',
    description: 'Sustainable materials are taking center stage as fashion becomes more environmentally aware.',
    imageUrl: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    popularity: 89,
  },
  {
    id: 'trend2',
    name: 'Y2K Revival',
    category: 'Popular',
    description: 'Early 2000s fashion is making a strong comeback with modern twists.',
    imageUrl: 'https://images.pexels.com/photos/4004418/pexels-photo-4004418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    popularity: 95,
  },
  {
    id: 'trend3',
    name: 'Oversized Everything',
    category: 'Popular',
    description: 'Loose-fitting garments continue to dominate both casual and formal wear.',
    imageUrl: 'https://images.pexels.com/photos/1820656/pexels-photo-1820656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    popularity: 92,
  },
  {
    id: 'trend4',
    name: 'Digital Prints',
    category: 'Rising',
    description: 'AI-generated patterns and digital art are transforming textile design.',
    imageUrl: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    popularity: 84,
  },
  {
    id: 'trend5',
    name: 'Genderless Fashion',
    category: 'Rising',
    description: 'Breaking barriers with designs that transcend traditional gender categories.',
    imageUrl: 'https://images.pexels.com/photos/5726782/pexels-photo-5726782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    popularity: 87,
  },
];