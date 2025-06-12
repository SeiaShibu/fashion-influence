import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, Compass, Menu, X, Scissors, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled 
      ? 'bg-white shadow-md py-3' 
      : 'bg-transparent py-5'
  );

  const navLinks = [
    { path: '/', label: 'Home', icon: <Sparkles size={18} /> },
    { path: '/explore', label: 'Explore', icon: <Compass size={18} /> },
    { path: '/trends', label: 'Trends', icon: <Scissors size={18} /> },
    { path: '/saved', label: 'Saved', icon: <Heart size={18} /> },
    { path: '/profile', label: 'Profile', icon: <User size={18} /> },
  ];

  return (
    <header className={headerClasses}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-primary-500 mr-2">
            <Scissors size={28} />
          </div>
          <span className="font-serif font-bold text-2xl text-gray-800">TrendSetter</span>
          <span className="ml-1 bg-primary-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">AI</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search for trends, users or styles..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50"
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                isActive(link.path)
                  ? "text-primary-500"
                  : "text-gray-600 hover:text-primary-500"
              )}
            >
              <span className="mr-1.5">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <Button 
            variant="primary" 
            size="sm"
            leftIcon={<Sparkles size={16} />}
          >
            New Post
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 py-3">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search for trends, users or styles..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50"
              />
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center p-2 rounded-md text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "bg-primary-50 text-primary-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary-500"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              <Button 
                variant="primary" 
                fullWidth 
                leftIcon={<Sparkles size={18} />}
              >
                New Post
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;