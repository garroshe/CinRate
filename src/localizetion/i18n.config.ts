import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/en.json';
import ukTranslations from './locales/uk/uk.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        uk: { translation: ukTranslations }
    },
    lng: 'en', // Мова за замовчуванням
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
});

export default i18n;