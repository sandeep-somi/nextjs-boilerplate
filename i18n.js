const NextI18Next = require('next-i18next').default


module.exports = new NextI18Next({
  fallbackLng: 'en',
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: true
})