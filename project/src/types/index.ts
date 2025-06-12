export interface User {
  id: string;
  username: string;
  fullName: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  followers: number;
  following: number;
  joinedDate: string;
}

export interface FashionPost {
  id: string;
  userId: string;
  username: string;
  userProfileImage: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  createdAt: string;
  aiInsights?: string[];
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userProfileImage: string;
  content: string;
  createdAt: string;
}

export type TrendCategory = 'Rising' | 'Popular' | 'Seasonal' | 'Classic';

export interface Trend {
  id: string;
  name: string;
  category: TrendCategory;
  description: string;
  imageUrl: string;
  popularity: number;
}