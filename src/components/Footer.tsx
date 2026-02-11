import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/assets/logo.png" alt="IDLY SHOP Logo" className="w-12 h-12" />
              <span className="text-2xl font-serif font-bold">IDLY SHOP</span>
            </div>
            <p className="mb-6 text-primary-100">We love to cook for you</p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a> */}
              <a href="https://www.instagram.com/idlyshop_muvattupuzha/" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-primary-200 hover:text-accent-500 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-primary-200 hover:text-accent-500 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-primary-200 hover:text-accent-500 transition-colors">
                  Our Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-200 hover:text-accent-500 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-500" />
                <span className="text-primary-200">Velloorkunnam, Muvattupuzha, Kerala</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-500" />
                <a href="tel:+919539266677" className="text-primary-200 hover:text-accent-500 transition-colors">
                  +91-9539266677
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent-500" />
                <a href="mailto:idlyshopkerala@gmail.com" className="text-primary-200 hover:text-accent-500 transition-colors">
                  idlyshopkerala@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-accent-500 mt-1" />
                <div>
                  <p className="font-medium">Monday - Sunday</p>
                  <p className="text-primary-200">06:00 AM - 10:50 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-800 text-center text-primary-300">
          <p>&copy; {new Date().getFullYear()} IDLY SHOP Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;