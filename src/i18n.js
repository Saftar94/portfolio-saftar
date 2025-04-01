import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Импортируем файлы переводов
import enEducation from "./locales/en/education.json";
import ruEducation from "./locales/ru/education.json";
import uaEducation from "./locales/ua/education.json";
import trEducation from "./locales/tr/education.json";

// Импортируем другие переводы по мере необходимости
// import enCommon from './locales/en/common.json';
// и т.д.

i18n
  // Обнаружение языка браузера
  .use(LanguageDetector)
  // Интеграция с React
  .use(initReactI18next)
  // Инициализация i18next
  .init({
    resources: {
      en: {
        education: enEducation,
        // common: enCommon
      },
      ru: {
        education: ruEducation,
        // common: ruCommon
      },
      ua: {
        education: uaEducation,
        // common: uaCommon
      },
      tr: {
        education: trEducation,
        // common: trCommon
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    // Пространства имен
    ns: ["education"], // Добавьте 'common' и другие при необходимости
    defaultNS: "education",

    interpolation: {
      escapeValue: false, // Реакт уже безопасен от XSS
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
