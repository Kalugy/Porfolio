// src/components/StackDiagram.jsx
import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaPhp,
  FaLaravel,
  FaAws,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaJsSquare,
  FaGoogle,
  FaMobileAlt,
  FaLaptopCode,
  FaTabletAlt,
  FaTv
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiAmazondynamodb,
  SiChai,
  SiAmazoncloudwatch,
} from 'react-icons/si';

const techGroups = [
  {
    title: 'Clients',
    color: 'bg-gray-100',
    items: [
      { name: 'Mobile', icon: <FaMobileAlt className="text-[#333]" /> },
      { name: 'PC/Web', icon: <FaLaptopCode className="text-[#333]" /> },
      { name: 'Tablet', icon: <FaTabletAlt className="text-[#333]" /> },
      { name: 'TV', icon: <FaTv className="text-[#333]" /> },
      { name: 'Device', icon: <FaMobileAlt className="text-[#333]" /> }, 
    ],
  },
  {
    title: 'Frontend',
    color: 'bg-blue-100',
    items: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      //{ name: 'Angular', icon: <FaAngular className="text-[#DD0031]" /> },
      { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: 'Backend',
    color: 'bg-green-100',
    items: [
      { name: 'PHP', icon: <FaPhp className="text-[#8892BF]" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-[#FF2D20]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
      { name: 'C#', icon: <SiChai className="text-[#512BD4]" /> },
    ],
  },
  {
    title: 'Database',
    color: 'bg-yellow-100',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'DynamoDB', icon: <SiAmazondynamodb className="text-[#4053D6]" /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'bg-purple-100',
    items: [
      { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
      //{ name: 'Azure', icon: <SiMicrosoftazure className="text-[#007FFF]" /> },
      { name: 'Google', icon: <FaGoogle className="text-[#DD0031]" /> },
      //{ name: 'CloudWatch', icon: <SiAmazoncloudwatch className="text-[#FF4F00]" /> },
    ],
  },
];

const stacks = [
  {
    name: 'Frontend',
    icon: '🎨',
    desc: 'React, Next.js, Tailwind CSS, and more.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Backend',
    icon: '⚙️',
    desc: 'Node.js, Express, MongoDB, and more.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Mobile',
    icon: '📱',
    desc: 'React Native, Flutter, and more.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'DevOps',
    icon: '🚀',
    desc: 'Docker, AWS, CI/CD, and more.',
    color: 'from-orange-500 to-red-600'
  }
]

export default function StackHome() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Explore the technologies and tools I use to build modern, scalable, and performant applications.
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/stack"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View Full Stack
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stack.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 transition-transform duration-300 group-hover:scale-150`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                    {stack.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {stack.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {stack.desc}
                </p>
                
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                   Learn More 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TechGroup = ({ title, color, items }) => (
  <div className={`p-6 rounded-xl shadow-md ${color} w-full`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((tech, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className="text-4xl mb-1">{tech.icon}</div>
          <span className="text-sm text-gray-700">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);
