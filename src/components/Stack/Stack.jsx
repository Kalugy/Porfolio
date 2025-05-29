import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaCloud,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiJest,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiAdobexd,
  SiUnity,
} from 'react-icons/si';

const Stack = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      items: [
        { name: "React", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />, level: "Advanced" },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, level: "Advanced" },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />, level: "Intermediate" },
        { name: "JavaScript", icon: <FaJsSquare className="w-8 h-8 text-[#F7DF1E]" />, level: "Advanced" },
        { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />, level: "Advanced" },
        { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />, level: "Advanced" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />, level: "Advanced" },
        { name: "Redux", icon: <SiRedux className="w-8 h-8 text-[#764ABC]" />, level: "Intermediate" },
        { name: "Unity", icon: <SiUnity className="w-8 h-8 text-[#000000]" />, level: "Intermediate" },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />, level: "Advanced" },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8" />, level: "Advanced" },
        { name: "PHP", icon: <FaPhp className="w-8 h-8 text-[#777BB4]" />, level: "Intermediate" },
        { name: "Laravel", icon: <FaLaravel className="w-8 h-8 text-[#FF2D20]" />, level: "Intermediate" },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />, level: "Advanced" },
        { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />, level: "Intermediate" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      items: [
        { name: "AWS", icon: <FaAws className="w-8 h-8 text-[#FF9900]" />, level: "Intermediate" },
        { name: "Docker", icon: <FaDocker className="w-8 h-8 text-[#2496ED]" />, level: "Intermediate" },
        { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" />, level: "Advanced" },
        { name: "Vercel", icon: <SiVercel className="w-8 h-8" />, level: "Advanced" },
        { name: "Netlify", icon: <SiNetlify className="w-8 h-8 text-[#00C7B7]" />, level: "Advanced" },
      ]
    },
    {
      title: "Testing & Tools",
      icon: <FaTools className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-600",
      items: [
        { name: "Jest", icon: <SiJest className="w-8 h-8 text-[#C21325]" />, level: "Intermediate" },
        { name: "Postman", icon: <SiPostman className="w-8 h-8 text-[#FF6C37]" />, level: "Advanced" },
        { name: "Figma", icon: <SiFigma className="w-8 h-8" />, level: "Intermediate" },
        { name: "Adobe XD", icon: <SiAdobexd className="w-8 h-8 text-[#FF61F6]" />, level: "Intermediate" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build modern, scalable, and performant applications.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-3">
                  <div className="text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Tech Items */}
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="transform transition-transform duration-200 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Development Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Writing maintainable, well-documented code following best practices and design patterns.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimizing applications for speed and efficiency while maintaining code quality.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing best security practices and protecting user data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
