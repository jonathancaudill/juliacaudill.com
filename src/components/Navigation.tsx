
import React, { useState } from 'react';
import { Menu, X, Instagram, Youtube, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-playfair text-2xl font-bold gradient-text">
            JULIA CAUDILL
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-cormorant text-lg text-gray-700 hover:text-burgundy-700 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
            </div>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-cormorant text-lg text-gray-700 hover:text-burgundy-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
