import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 text-sm">
              We are dedicated to bringing you the best events and experiences. Stay connected with us!
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-red-700"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-red-700"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-red-700"></i>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-red-700"></i>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Connect</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a href="https://facebook.com" className="hover:text-white transition flex items-center">
                  <i className="fab fa-facebook text-blue-500 mr-2"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-white transition flex items-center">
                  <i className="fab fa-twitter text-blue-400 mr-2"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-white transition flex items-center">
                  <i className="fab fa-instagram text-pink-500 mr-2"></i>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
