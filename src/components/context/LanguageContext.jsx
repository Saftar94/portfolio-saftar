import React, { createContext, useState, useContext, useEffect } from "react";

// Создаем контекст языка
const LanguageContext = createContext();

// Поддерживаемые языки
export const languages = {
  EN: "en",
  RU: "ru",
  UA: "ua",
  TR: "tr",
};

// Названия языков для отображения в UI
export const languageNames = {
  en: "English",
  ru: "Русский",
  ua: "Українська",
  tr: "Türkçe",
};

// Провайдер языкового контекста
export const LanguageProvider = ({ children }) => {
  // Получаем сохраненный язык из localStorage или используем английский по умолчанию
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || languages.EN;
  });

  // Функция для изменения текущего языка
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang; // Устанавливаем атрибут lang в HTML
  };

  // Устанавливаем язык при первой загрузке
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования языкового контекста
export const useLanguage = () => useContext(LanguageContext);
