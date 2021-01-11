import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translationBR from '../../public/locales/pt-br/translation.json';
import translationEN from '../../public/locales/en/translation.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: translationBR,
      },
      en: {
        translation: translationEN,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
