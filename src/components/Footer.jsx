import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCinemaMode } from '../context/CinemaModeContext';
import { useLanguage } from '../context/LanguageContext';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/juliantrujillo1234/', icon: FaInstagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@kalugy', icon: FaYoutube },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-trujillo-b20000190/', icon: FaLinkedin },
];

export default function Footer() {
  const { isCinemaMode } = useCinemaMode();
  const { t } = useLanguage();

  const links = [
    { name: t('common.nav.home'), to: '/' },
    { name: t('common.nav.projects'), to: '/projects' },
    { name: t('common.nav.aboutMe'), to: '/resume' },
    { name: t('common.nav.contact'), to: '/contact' },
  ];

  return (
    <footer className={`border-t border-gray-200 bg-white text-gray-900 transition-all duration-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white ${
      isCinemaMode ? 'pointer-events-none h-0 overflow-hidden border-0 py-0 opacity-0' : ''
    }`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">{t('common.nav.brand')}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Julian Trujillo · {t('common.footer.madeIn')}
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-indigo-600 transition hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-700 dark:text-indigo-400 dark:hover:bg-gray-800"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
