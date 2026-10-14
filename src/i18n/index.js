import enCommon from './en/common.json';
import enHome from './en/home.json';
import enAboutMe from './en/aboutme.json';
import enProject from './en/project.json';

import esCommon from './es/common.json';
import esHome from './es/home.json';
import esAboutMe from './es/aboutme.json';
import esProject from './es/project.json';

import prCommon from './pr/common.json';
import prHome from './pr/home.json';
import prAboutMe from './pr/aboutme.json';
import prProject from './pr/project.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pr', label: 'Português' },
];

export const DEFAULT_LANGUAGE = 'en';

export const translations = {
  en: {
    common: enCommon,
    home: enHome,
    aboutme: enAboutMe,
    project: enProject,
  },
  es: {
    common: esCommon,
    home: esHome,
    aboutme: esAboutMe,
    project: esProject,
  },
  pr: {
    common: prCommon,
    home: prHome,
    aboutme: prAboutMe,
    project: prProject,
  },
};

export function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);
}
