import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

// Importa i file JSON
import translationIT from './locales/it.json';
import translationEN from './locales/en.json';

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({

    resources: {

      en: {
        translation: translationEN
      },

      it: {
        translation: translationIT
      }

    },

    fallbackLng: "en",

    interpolation: {

      escapeValue: false

    }

  });

export default i18n;