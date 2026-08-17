import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useCinemaMode } from '../../context/CinemaModeContext';
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isCinemaMode } = useCinemaMode();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Stack", href: "/stack" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    // { name: "Comprar", href: "https://web.whatsapp.com/", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMenuClick = () => {
    scrollToTop(); // Scroll to top
    setMobileMenuOpen(false); // Close the menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isCinemaMode
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2.5 group"
            onClick={handleMenuClick}
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-[36%_50%] transform transition-transform duration-200 group-hover:scale-125"
              />
            </span>
            <span className="text-lg sm:text-xl font-bold leading-none bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Julian's Portfolio
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={handleMenuClick}
                className={({ isActive }) => `
                  relative font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 
                  transition-colors duration-200
                  ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}
                `}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
                )}
              </NavLink>
            ))}
            
            
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kalugy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub className="w-5 h-5 dark:text-white text-gray-700" />
            </a>
            <a
              href="https://community-hub.replit.app/profile/jtreplitsupport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Replit"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <SiReplit className="w-5 h-5 dark:text-white text-gray-700" />
            </a>
          </div>
          
          {/*ES y EN button */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={handleMenuClick}
              className={({ isActive }) => `
                block px-4 py-2 rounded-lg text-base font-medium
                ${isActive 
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
                transition-colors duration-200
              `}
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="flex items-center gap-4 px-4 py-2">
            <a
              href="https://github.com/kalugy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub className="w-5 h-5 dark:text-white text-gray-700" />
            </a>
            <a
              href="https://community-hub.replit.app/profile/jtreplitsupport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Replit"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <SiReplit className="w-5 h-5 dark:text-white text-gray-700" />
            </a>
          </div>

          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="font-medium">Theme</span>
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const BackgroundCircle = () => {
  return (
    <div
      className="absolute top-5 left-5 w-12 h-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/logo.png')", // Replace with your image path
      }}
    ></div>
  );
};

export default Navbar;