import React from 'react';
import { Menu, X, Building } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onPageChange, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'properties', label: 'Properties' },
    { id: 'launching', label: 'Launching Soon' },
    { id: 'portfolio', label: 'Our Portfolio' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Building className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-white">TajMall</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-orange-500'
                    : 'text-white hover:text-orange-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Special Rentals Button */}
            <button
              onClick={() => onPageChange('properties')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Rentals
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:text-orange-400"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-orange-500 bg-gray-700'
                      : 'text-white hover:text-orange-400 hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Rentals Button */}
              <button
                onClick={() => {
                  onPageChange('properties');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-200 mt-2"
              >
                Rentals
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;