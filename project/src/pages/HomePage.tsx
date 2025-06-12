import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import TrendingPosts from '../components/home/TrendingPosts';
import AITrendSection from '../components/home/AITrendSection';
import { mockPosts, mockTrends } from '../data/mockData';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TrendingPosts posts={mockPosts} />
      <AITrendSection trends={mockTrends} />
    </Layout>
  );
};

export default HomePage;