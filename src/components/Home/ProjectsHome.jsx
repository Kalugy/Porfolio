import React from 'react'
import { Link } from 'react-router-dom';
const projects = [
  {
    year: '2025',
    title: 'Growvyn',
    desc: 'A web app for self development and self growth.',
    links: { Webstite: 'https://growvyn.com/' }
  },
  {
    year: '2022',
    title: 'Js Challenges',
    desc: 'a platform for javascript enthusiasts to test and improve their skills through daily challenges.',
    links: { Webstite: 'https://dailyjschallenges.com/' }
  },
  {
    year: '2022',
    title: 'Body Puzzle',
    desc: 'A 3D puzzle game where the player must solve the puzzle by rotating the cubes.',
    links: { Webstite: 'https://skeleton-amber.vercel.app/' }
  }

]

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Personal projects I've worked on over the years.
            </p>
          </div>
          <Link
            //scroll to top
            onClick={() => window.scrollTo(0, 0)}
            to="/projects"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.links.Webstite}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{p.year}</span>
                <div className="flex gap-2">
                  {p.links.article && (
                    <span
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      Article
                    </span>
                  )}
                  {p.links.Webstite && (
                    <span
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      Demo
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
