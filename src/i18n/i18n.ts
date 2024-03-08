import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './en.json'
import RO from './ro.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    ro: {
      translation: RO,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
