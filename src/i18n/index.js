import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'

export default createI18n({
  legacy: false,
  locale: 'es', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})