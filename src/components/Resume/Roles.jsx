import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const accentStyles = {
  indigo: {
    border: 'border-indigo-500',
    badge: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
    focus: 'text-indigo-600 dark:text-indigo-400',
    chip: 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300',
  },
  green: {
    border: 'border-green-500',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    focus: 'text-green-600 dark:text-green-400',
    chip: 'bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-300',
  },
  emerald: {
    border: 'border-emerald-500',
    badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
    focus: 'text-emerald-600 dark:text-emerald-400',
    chip: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
  },
};

const stageAccents = ['indigo', 'green', 'emerald'];

export default function Roles() {
  const { t } = useLanguage();
  const targets = t('aboutme.roles.targets') || [];
  const stages = t('aboutme.roles.stages') || [];
  const summary = t('aboutme.roles.summary') || [];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {t('aboutme.roles.title')}
      </h2>

      <div className="mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
        <p className="text-sm font-medium tracking-wide uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          {t('aboutme.roles.currentFocus')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t('aboutme.roles.currentTitle')}
        </h3>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
          {t('aboutme.roles.currentStack')}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {t('aboutme.roles.currentDescription')}
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 border-b-2 border-indigo-500 pb-2">
          {t('aboutme.roles.targetTitle')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          {t('aboutme.roles.targetNote')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((role, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {role.title}
              </h4>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                {role.focus}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-green-500 pb-2">
          {t('aboutme.roles.growthTitle')}
        </h3>
        <div className="space-y-6">
          {stages.map((stage, index) => {
            const styles = accentStyles[stageAccents[index] || 'indigo'];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 ${styles.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-sm px-2 py-1 rounded-full ${styles.badge}`}>
                    {stage.duration}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stage.title}
                  </h4>
                </div>
                <p className={`text-sm font-medium mb-2 ${styles.focus}`}>
                  {stage.focus}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {stage.description}
                </p>
                {stage.focusAreas && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {stage.focusAreas.map((area) => (
                      <span
                        key={area}
                        className={`text-xs px-2.5 py-1 rounded-full ${styles.chip}`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-green-50 dark:from-indigo-900/20 dark:to-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {t('aboutme.roles.summaryTitle')}
        </h4>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
