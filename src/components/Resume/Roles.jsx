import React from 'react';

const shortTermRoles = [
  {
    title: 'Frontend or Full-Stack Developer',
    duration: '0-2 years',
    focus: 'JavaScript, Node.js, React, React Native',
    description: 'Building scalable web applications with modern frontend and backend technologies'
  },

  {
    title: 'Technical Assistant or Project Coordinator',
    duration: '0-2 years',
    focus: 'Project Management, Coding Tasks',
    description: 'Coordinating projects while maintaining hands-on coding responsibilities'
  },
  {
    title: 'Unity Developer',
    duration: '0-2 years',
    focus: 'Unity, C#, Prototyping, Gameplay Systems',
    description: 'Open for this role in case the industry has vacancies, Creating prototypes, gameplay systems, and development tools with Unity engine'
  },
];

const longTermRoles = [
  {
    title: 'Tech Lead or Engineering Lead',
    duration: '3-5 years',
    focus: 'Team Leadership, Technical Architecture, Code Quality',
    description: 'Leading engineering teams and driving technical excellence across projects'
  },
  
  {
    title: 'CTO or Technical Founder',
    duration: '5+ years',
    focus: 'Technology Strategy, Business Leadership, Innovation',
    description: 'Leading technology strategy and driving business innovation as a technical leader'
  },
  {
    title: 'Innovation or R&D Lead',
    duration: '5+ years',
    focus: 'AI, Education, Creative Tech, Research',
    description: 'Leading innovation initiatives in AI, education, and creative technology'
  },
  {
    title: 'Startup Advisor or Systems Strategist',
    duration: '7+ years',
    focus: 'Strategic Advisory, Mission-aligned Products',
    description: 'Advising startups and developing strategies for mission-aligned products'
  }
];

export default function Roles() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Roles Goals</h2>
      
      {/* Short Term Roles */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b-2 border-indigo-500 pb-2">
          Short Term Roles Goals (0-3 years)
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortTermRoles.map((role, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h4>
                {/* <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                  {role.duration}
                </span> */}
              </div>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                {role.focus}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Long Term Roles */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b-2 border-green-500 pb-2">
          Long Term Aspirations (3+ years)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {longTermRoles.map((role, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h4>
                <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                  {role.duration}
                </span>
              </div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                {role.focus}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Path Summary */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-green-50 dark:from-indigo-900/20 dark:to-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Career Path Summary
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          My career path focuses on continuous growth from hands-on development to strategic leadership. 
          I aim to combine technical expertise with business acumen to drive innovation in both software 
          development and open for new opportunities like game creation, AI Training. The progression from individual contributor to technical leadership 
          reflects my commitment to mentoring teams and shaping technology strategies.
        </p>
      </div>
    </section>
  );
} 