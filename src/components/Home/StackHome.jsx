// src/components/StackDiagram.jsx
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

const StackHome = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Tech Stack Diagram</h2>
        <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 lg:justify-between">
          {techGroups.map((group, idx) => (
            <div key={idx} className="flex flex-col items-center w-full max-w-md lg:w-1/5">
              <TechGroup {...group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


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

export default StackHome;
