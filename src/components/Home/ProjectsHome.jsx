import React from 'react'
import { Link } from 'react-router-dom';

const projects = [
  {
    year: '2025',
    title: 'Growvyn',
    desc: 'A web app for self development and self growth.',
    links: { Webstite: 'https://growvyn.com/' },
    category: 'Web App'
  },
  {
    year: '2022',
    title: 'Js Challenges',
    desc: 'a platform for javascript enthusiasts to test and improve their skills through daily challenges.',
    links: { Webstite: 'https://js-challenges-flax.vercel.app/' },
    category: 'Platform'
  },
  {
    year: '2022',
    title: 'Body Puzzle',
    desc: 'A 3D puzzle game where the player must solve the puzzle by rotating the cubes.',
    links: { Webstite: 'https://skeleton-amber.vercel.app/' },
    category: 'Game'
  }
]

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="projects">
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
              href={p.links.Webstite}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-bl-full transform translate-x-16 -translate-y-16 transition-transform duration-300 group-hover:scale-150" />
              
              <div className="relative">
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
    </section>
  )
}
