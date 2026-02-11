import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="IDLY SHOP Logo" className="w-16 h-16" />
            <span className="text-2xl font-serif font-bold">IDLY SHOP</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-lg transition-colors hover:text-accent-500 ${
                    isActive ? 'font-medium text-accent-500' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary-900 shadow-xl"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `py-2 text-xl transition-colors hover:text-accent-500 ${
                    isActive ? 'font-medium text-accent-500' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;