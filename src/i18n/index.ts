import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: import.meta.env.DEV,

    ns: ['common'],
    defaultNS: 'common',

    detection: {
      lookupLocalStorage: 'language',
    },

    backend: {
      loadPath: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/locales/{{lng}}/{{ns}}.json`,
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
