import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFreelancer, SiKofi } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const socialLinks = [
  { name: 'Gmail', url: 'mailto:danieltrujillo902@gmail.com', icon: FaEnvelope },
  { name: 'GitHub', url: 'https://github.com/Kalugy', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/julian-trujillo-92b0b8143/', icon: FaLinkedin },
  { name: 'Freelancer.com', url: 'https://www.freelancer.com/u/juliant36', icon: SiFreelancer },
  { name: 'Ko-fi', url: 'https://ko-fi.com/kalugy', icon: SiKofi },
];

export default function ContactHome() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              {t('home.contact.title')}
            </h2>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
              {t('home.contact.description')}
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/contact"
            className="shrink-0 font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {t('home.contact.viewAll')}
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                {t('home.contact.quickContact')}
              </p>
              <a
                href="mailto:danieltrujillo902@gmail.com"
                className="block text-xl font-semibold text-gray-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 md:text-2xl"
              >
                danieltrujillo902@gmail.com
              </a>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {t('home.contact.quickContactText')}
              </p>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t('home.contact.connect')}
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-indigo-400"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {t('home.contact.freelanceTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.contact.freelanceText')}
              </p>
            </div>
            <a
              href="https://www.freelancer.com/u/juliant36"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              {t('home.contact.hireMe')}
            </a>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {t('home.contact.supportTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.contact.supportText')}
              </p>
            </div>
            <a
              href="https://ko-fi.com/kalugy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit rounded-lg bg-[#FF5E5B] px-6 py-3 font-medium text-white transition-colors hover:bg-[#e54e4b]"
            >
              {t('home.contact.donate')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
