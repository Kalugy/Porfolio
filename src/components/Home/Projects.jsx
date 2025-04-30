import React from 'react'

const projects = [
  {
    year: '2022',
    title: 'Growvyn',
    desc: 'A web app for self development and self growth.',
    links: { article: '#', demo: '#' }
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Open-source projects I've worked on over the years.
            </p>
          </div>
          <a
            href="#all"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"
          >
            View All Projects →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{p.year}</span>
                <div className="flex gap-2">
                  {p.links.article && (
                    <a
                      href={p.links.article}
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      Article
                    </a>
                  )}
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
