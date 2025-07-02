import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects, categories } from '../../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleModalClick = (e) => {
    // Only close if clicking the backdrop (not the modal content)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-28 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Personal projects like apps, games, and art, each combining code and design.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          <strong>Main Roles:</strong> Software Developer, Tech Lead
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-1 text-gray-900 dark:text-gray-100 text-sm">
                ({category.id === 'all' ? projects.length : projects.filter(project => project.category === category.id).length})
              </span>  
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition-colors"
                  >
                    {project.category === 'art' ? 'View Artwork' : 'Live Demo'}
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleModalClick}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 block">
                    {selectedProject.category === 'webapp' ? 'Web Application' : 
                     selectedProject.category === 'game' ? 'Game Development' : 'Art & Design'}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
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

              {/* Project Status */}
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  {selectedProject.status || 'Completed'}
                </div>
                {selectedProject.role && (
                  <span className="ml-4 text-gray-600 dark:text-gray-400">
                    Role: {selectedProject.role}
                  </span>
                )}
              </div>

              {/* Project Image */}
              <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Overview</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Achievements */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {selectedProject.challenges && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.achievements && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition-colors"
                >
                  View Live Project
                </a>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
