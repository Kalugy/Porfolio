import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  getNestedValue,
  translations,
} from '../i18n';

const LANGUAGE_KEY = 'portfolio-language';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return SUPPORTED_LANGUAGES.some((lang) => lang.code === saved)
      ? saved
      : DEFAULT_LANGUAGE;
  });

  const setLanguage = (code) => {
    if (SUPPORTED_LANGUAGES.some((lang) => lang.code === code)) {
      setLanguageState(code);
    }
  };

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language === 'pr' ? 'pt' : language;
  }, [language]);

  const t = (path, fallback = path) => {
    const [section, ...rest] = path.split('.');
    const sectionData = translations[language]?.[section];
    const value = getNestedValue(sectionData, rest.join('.'));

    if (value !== undefined) return value;

    const englishValue = getNestedValue(translations.en?.[section], rest.join('.'));
    return englishValue !== undefined ? englishValue : fallback;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      languages: SUPPORTED_LANGUAGES,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
