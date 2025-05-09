import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          
          <a href="https://www.instagram.com/juliantrujillo1234/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#4F46E5] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://www.youtube.com/@kalugy" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-[#4F46E5] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/julian-trujillo-b20000190/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#4F46E5] hover:text-[#cc7a04]" size={24} />
            </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/"
                className="text-indigo-600 dark:text-indigo-400 hover:text-white transition hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"    
              > Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/projects"
                className="text-indigo-600 dark:text-indigo-400 hover:text-white transition hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"    
              > Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/resume"
                className="text-indigo-600 dark:text-indigo-400 hover:text-white transition hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"    
              > Resume
              </Link>
            </li>
            <li>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contact"
                className="text-indigo-600 dark:text-indigo-400 hover:text-white transition hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"    
              > Contact
              </Link>
            </li>
          
          </ul>
        </nav>
      </div>
      <div className="mt-10 pb-10 font-semibold text-center text-md md:text-lg text-black dark:text-white border-t border-indigo-500 pt-6">
        © {new Date().getFullYear()} Julian Trujillo – Made with ❤️ in Colombia
      </div>
    </footer>
  );
}

