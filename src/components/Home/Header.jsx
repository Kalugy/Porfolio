import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ContactUsSection = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-32 bg-gradient-to-b from-[#e4e0ff] to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 relative z-10">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black dark:text-white text-center lg:text-left space-y-4 sm:space-y-6 flex-1 w-full lg:w-1/2"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Welcome, I'm Julian!
              </h1>
              <div className="h-1 w-16 sm:w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4 leading-relaxed">
            Focused on building digital products. I've worked on websites, games, and full stack projects as a developer across different{' '}
            <a href="#stack" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
              stacks
            </a>.
            I enjoy coding, solving problems, and managing products.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me playing sports, enjoying anime and manga, gaming, or exploring the outdoors.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
            >
              About me
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-[#136245] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#0d4b33] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
            >
              Projects
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center w-full lg:w-1/2 relative mt-8 lg:mt-0"
        >
          <div className="relative group w-full max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative">
              <img
                src="/images/profile4.png"
                alt="Profile pic header home julian porfolio"
                className="w-full h-auto rounded-lg transform transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          position: relative;
          width: 0;
          white-space: nowrap;
          overflow: hidden;
          height: 100%;
          animation: typing 3.5s steps(24, end) forwards;
        }

        .typewriter-text::after {
          content: '';
          position: absolute;
          right: 0px;
          top: 0;
          height: 100%;
          width: 3px;
          background: #4f46e5;
          animation: blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 95% }
        }

        @keyframes blink-caret {
          from, to { background: transparent }
          50% { background: #4f46e5 }
        }

        @media (prefers-color-scheme: dark) {
          .typewriter-text::after {
            background: #818cf8;
          }
          @keyframes blink-caret {
            from, to { background: transparent }
            50% { background: #818cf8 }
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUsSection;
