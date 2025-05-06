import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Gmail',
    url: 'mailto:danieltrujillo902@gmail.com',
    icon: 'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Kalugy',
    icon: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/julian-trujillo-92b0b8143/',
    icon: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
  }
];

export default function ContactHome() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Let's connect and discuss your next project.
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/contact"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"
          >
            View All Contact Info →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Contact */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Quick Contact</h3>
            <a
              href="mailto:danieltrujillo902@gmail.com"
              className="text-xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 block mb-4"
            >
              danieltrujillo902@gmail.com
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              Available for freelance opportunities and full-time positions.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} badge`}
                    className="h-10"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Availability */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Freelance Available</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently accepting new projects and opportunities.
              </p>
            </div>
            <a
              href="https://www.freelancer.com/u/juliant36"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
