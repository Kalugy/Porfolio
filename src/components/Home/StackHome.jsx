import React from 'react'
import { Link } from 'react-router-dom';
import Rain from '../Rain/Rain';
import { useLanguage } from '../../context/LanguageContext';

const stacks = [
  {
    id: 'frontend',
    icon: '🎨',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'mobile',
    icon: '📱',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'devops',
    icon: '🚀',
    color: 'from-orange-500 to-red-600'
  }
]

export default function StackHome() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900" id="stack">
      <Rain />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.stack.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {t('home.stack.description')}
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/stack"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('home.stack.viewFull')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => (
            <Link
              key={stack.id}
              to="/stack"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stack.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 transition-transform duration-300 group-hover:scale-150`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                    {stack.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {t(`home.stack.items.${stack.id}.name`)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {t(`home.stack.items.${stack.id}.desc`)}
                </p>
                
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  {t('home.stack.learnMore')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
