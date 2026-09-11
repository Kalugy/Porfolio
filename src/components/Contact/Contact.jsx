import React from 'react';

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
  },
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/kalugy',
    icon: 'https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white',
  },
];

const hireLinks = [
  {
    name: 'Freelancer.com',
    url: 'https://www.freelancer.com/u/juliant36',
    description: 'Hire me directly on Freelancer.com',
  },
  {
    name: 'Workana',
    url: 'https://www.workana.com/freelancer/3491e3a263c8133b2540f8791dd8cd21',
    description: 'Find me on Workana for freelance projects',
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~0158c1b02b82b82269',
    description: 'Connect with me on Upwork',
  },
];

export default function Contact() {
  return (
    <section className="py-28 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h2>

        {/* Email Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Let's Connect
          </h3>
          <a
            href="mailto:danieltrujillo902@gmail.com"
            className="text-xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            danieltrujillo902@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Social Media
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
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
                  className="h-12"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Hire Me */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 text-center">
            Hire Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-xl mx-auto">
            Available for freelance work. Reach me on these platforms:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {hireLinks.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {profile.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  {profile.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Visit profile →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Donate via Ko-fi */}
        <div className="mt-12 text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Support My Work
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            If you enjoy what I do, consider buying me a coffee on Ko-fi. Every bit of support helps fuel future projects!
          </p>
          <a
            href="https://ko-fi.com/kalugy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5E5B] text-white rounded-lg hover:bg-[#e54e4b] transition-colors duration-300 font-medium"
          >
            Donate on Ko-fi
          </a>
        </div>
      </div>
    </section>
  );
}
