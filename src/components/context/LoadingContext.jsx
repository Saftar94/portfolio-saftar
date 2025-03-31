import React, { createContext, useState, useEffect, useContext } from "react";
import Spinner from "../shared/Spinner";

// Создаем контекст
const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

// Хук для использования контекста
export const useLoading = () => useContext(LoadingContext);

// Провайдер контекста загрузки
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Показывать спиннер только при первой загрузке/перезагрузке страницы
    if (isFirstLoad) {
      // Установить задержку на 1 секунду (можно изменить)
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  // Слушатель событий навигации для определения перезагрузки страницы
  useEffect(() => {
    // Функция для обработки перезагрузки
    const handleBeforeUnload = () => {
      // Устанавливаем флаг в localStorage при перезагрузке
      localStorage.setItem("isReloading", "true");
    };

    // Проверяем, была ли перезагрузка
    const checkIfReloaded = () => {
      const isReloading = localStorage.getItem("isReloading") === "true";

      if (isReloading) {
        // Если это перезагрузка - показываем спиннер
        setIsLoading(true);
        setIsFirstLoad(true);
        // Очищаем флаг
        localStorage.removeItem("isReloading");
      }
    };

    // Добавляем слушатель для событий перед выгрузкой страницы
    window.addEventListener("beforeunload", handleBeforeUnload);
    // Проверяем при монтировании компонента
    checkIfReloaded();

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Spinner />}
      {children}
    </LoadingContext.Provider>
  );
};
