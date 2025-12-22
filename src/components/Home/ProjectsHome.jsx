import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Rain from '../Rain/Rain';

const projects = [
  {
    year: '2025',
    title: 'Growvyn',
    desc: 'A web app for self development and self growth.',
    longDesc: 'Growvyn is a comprehensive self-development platform that helps users track their personal growth journey. Features include goal setting, progress tracking, habit formation, and community support.',
    links: { Website: 'https://growvyn.com/' },
    category: 'Web App',
    technologies: ['React', 'Node.js', 'Database', 'AWS'],
    features: ['Project management', 'Task management', 'MVC', 'Founder', 'User Workflow', 'Progress Tracking', 'KPIs', 'Developer'],
    image: '/images/growvyn.PNG'
  },
  {
    year: '2024',
    title: 'Js Challenges',
    desc: 'a platform for javascript enthusiasts to test and improve their skills through daily challenges.',
    longDesc: 'A comprehensive platform for JavaScript developers to practice and improve their skills through daily coding challenges. Includes a leaderboard, solution sharing, and detailed explanations.',
    links: { Website: 'https://js-challenges-flax.vercel.app/' },
    category: 'Platform',
    technologies: ['React', 'Node.js', 'Tailwind'],
    features: ['Daily Challenges', 'Frontend', 'UI/UX', 'Progress Tracking', 'Project management', 'Task management'],
    image: '/images/js.PNG'
  },
  {
    year: '2023',
    title: 'Body Puzzle',
    desc: 'A 3D puzzle game where the player must solve the puzzle by rotating the cubes.',
    longDesc: 'An engaging 3D puzzle game that challenges players to solve complex spatial puzzles by rotating and manipulating 3D cubes. Features multiple difficulty levels and intuitive controls.',
    links: { Website: 'https://skeleton-amber.vercel.app/' },
    category: 'Game',
    technologies: ['React', 'WebGL', 'Blender', 'Unity'],
    features: ['3D Graphics', 'Multiple Levels', 'Touch Controls', 'Progress Saving', 'UI/UX', 'Frontend'],
    image: '/images/bodypuzzle.PNG'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="projects">
      <Rain />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Explore some of my recent work and personal projects that showcase my skills and passion for development.
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.links.Website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleProjectClick(e, p)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{p.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{p.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  View Project
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.longDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-48 rounded-xl overflow-hidden mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex justify-end">
                <a
                  href={selectedProject.links.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
                >
                  Visit Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
