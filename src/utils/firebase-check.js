// Отключаем отладчик, чтобы не вмешиваться в работу Firebase
// // Вспомогательный скрипт для отслеживания инициализации Firebase
// console.log('=== ОТЛАДКА FIREBASE ИНИЦИАЛИЗАЦИИ ===');

// // Сохраняем оригинальный метод initializeApp
// import { initializeApp as originalInitializeApp } from 'firebase/app';

// // Переопределяем initializeApp, чтобы отслеживать все вызовы
// export const initializeApp = (...args) => {
//   console.log('Попытка инициализации Firebase:', args[0]);
//   console.trace('Трассировка стека при инициализации:');
//   return originalInitializeApp(...args);
// };

// // Экспортируем переопределенную функцию
// export * from 'firebase/app';

// Вместо этого просто реэкспортируем все из firebase/app
export * from "firebase/app";
