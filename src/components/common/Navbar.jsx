import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
    { path: '/full-members', label: 'Life Members' } 
  ];

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-10 transition ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none transition hover:text-red-700"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>

            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <ul className="flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.path} className="py-2 mx-4">
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      isActive 
                        ? "text-red-700 font-semibold border-b-2 border-red-700 pb-2 transition"
                        : "text-gray-600 hover:text-red-700 font-medium pb-2 border-b-2 border-transparent hover:border-red-700 transition"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Join Us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'block py-4' : 'hidden'}`}>
          <ul className="space-y-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.path} className="py-2 mx-4">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-red-700 font-semibold block w-full pl-4 border-l-4 border-red-700"
                      : "text-gray-600 hover:text-red-700 block w-full pl-4 border-l-4 border-transparent hover:border-red-700 transition"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded w-full transition">
                Join Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;