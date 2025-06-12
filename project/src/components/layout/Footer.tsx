import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Youtube, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Scissors className="text-primary-400 mr-2" size={24} />
              <span className="font-serif font-bold text-2xl">TrendSetter</span>
              <span className="ml-1 bg-primary-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover and share fashion trends powered by AI. Join TrendSetter, the community for fashion enthusiasts.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/explore" className="hover:text-primary-400 transition-colors">Discover</Link></li>
              <li><Link to="/trends" className="hover:text-primary-400 transition-colors">Trending</Link></li>
              <li><Link to="/categories" className="hover:text-primary-400 transition-colors">Categories</Link></li>
              <li><Link to="/collections" className="hover:text-primary-400 transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/events" className="hover:text-primary-400 transition-colors">Events</Link></li>
              <li><Link to="/forum" className="hover:text-primary-400 transition-colors">Forum</Link></li>
              <li><Link to="/creators" className="hover:text-primary-400 transition-colors">Creators</Link></li>
              <li><Link to="/ambassadors" className="hover:text-primary-400 transition-colors">Ambassadors</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TrendSetter AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-primary-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;