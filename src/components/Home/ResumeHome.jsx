import React from 'react';
import { Link } from 'react-router-dom';

export default function ResumeHome() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A passionate Full Stack Developer with a focus on creating innovative solutions.
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/resume"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"
          >
            View Full Resume →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Summary */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently working as a Freelance Software Developer, delivering custom solutions and MVPs for clients. 
              Previously worked as a Full Stack Consultant at CannedHead and Jr Software Developer at BigPass Edenred.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                Full Stack
              </span>
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                AWS
              </span>
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                DevOps
              </span>
            </div>
          </div>

          {/* Education & Skills Summary */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education & Skills</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Computer Systems Engineering graduate from Universidad Tecnológica de Pereira. 
              Currently pursuing AWS certifications and expanding skills in cloud technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                Cloud Computing
              </span>
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                Node.js
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">+5</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">+20</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">+20</div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">+7</div>
            <div className="text-gray-600 dark:text-gray-400">Clients help</div>
          </div>
        </div>
      </div>
    </section>
  );
}
