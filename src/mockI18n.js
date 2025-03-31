// Временная заглушка, пока пакеты не установлены
const mockT = (key, defaultValue) => {
  // Просто возвращаем ключ или значение по умолчанию
  return defaultValue || key;
};

export const useTranslation = () => {
  return {
    t: mockT,
    i18n: {
      language: "en",
      changeLanguage: () => {},
    },
  };
};
