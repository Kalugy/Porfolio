import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { name: "About me", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
    // { name: "Comprar", href: "https://web.whatsapp.com/", isButton: true },
  ];

  const handleMenuClick = () => {
    scrollToTop(); // Scroll to top
    setMobileMenuOpen(false); // Close the menu
  };

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 transition duration-300 bg-transparent text-black dark:text-white`}
    >
      <div className="flex items-center justify-between px-4 py-1 xl:px-80 ">
        {/* Logo */}
        <NavLink className="cursor-pointer" to="/" >
          <div className="flex ml-1 md:ml-9 align-middle items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12 " />
            <h1 className={`text-xs md:text-lg xl:text-2xl italic font-bold ml-2 `}>
              Julian's Portfolio
            </h1>
          </div>
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          {menuItems.map((item) =>
            item.isButton ? (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={`px-4 py-2 rounded transition hover:opacity-90`}
                //activeStyle={styles.activeLink}
                
                >
                {item.name}
              </NavLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={`font-semibold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors`}
              > 
                {item.name}
              </NavLink>
            )
          )}
          
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          {menuItems.map((item) =>
            item.isButton ? (
              <></>
              // <li key={item.name}>
              //   <a
              //     href={item.href}
              //     onClick={handleMenuClick} // Close the menu on click
              //     className={`px-6 py-3 rounded transition button-${theme} ${themeStyles[theme].navbarText} hover:opacity-90`}
              //   >
              //     {item.name}
              //   </a>
              // </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={handleMenuClick} // Close the menu on click
                  className={`text-lg font-semibold  transition `}
               
                >
                  {item.name}
                </NavLink>
              </li>
            )
          )}
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2 text-gray-800 dark:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <>
                <FaSun className="w-5 h-5 text-yellow-500" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="w-5 h-5 text-gray-700" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
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