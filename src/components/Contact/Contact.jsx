import React from 'react';

const socialLinks = [
  {
    name: 'Gmail',
    url: 'mailto:danieltrujillo902@gmail.com',
    icon: 'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white',
    color: 'hover:bg-red-500'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Kalugy',
    icon: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
    color: 'hover:bg-gray-800'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/julian-trujillo-92b0b8143/',
    icon: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Freelancer.com',
    url: 'https://www.freelancer.com/u/juliant36',
    icon: 'https://img.shields.io/badge/Freelancer-000000?style=for-the-badge&logo=freelancer&logoColor=white',
    color: 'hover:bg-black'
  },
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/kalugy',
    icon: 'https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white',
    color: 'hover:bg-red-400'
  }
];

const professionalProfiles = [
  {
    name: 'Freelancer.com',
    url: 'https://www.freelancer.com/u/juliant36',
    icon: '💼',
    description: 'Find me on Freelancer.com for freelance opportunities'
  },
  {
    name: 'Portfolio',
    url: 'https://juliantrujilloporfoliodev.vercel.app/',
    icon: '🎨',
    description: 'View my portfolio and resume'
  }
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

        {/* Professional Profiles */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Professional Profiles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{profile.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {profile.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {profile.description}
                    </p>
                  </div>
                </div>
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
