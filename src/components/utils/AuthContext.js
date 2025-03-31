import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Auth контекст инициализирован");

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(
        "Статус аутентификации изменился:",
        user ? `Пользователь ${user.email}` : "Не аутентифицирован"
      );

      if (user) {
        // Пользователь авторизован, проверяем/создаем документ в Firestore
        try {
          console.log(
            "Проверяем существование пользователя в Firestore, uid:",
            user.uid
          );

          // Проверяем, существует ли документ пользователя
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
            console.log("Документ пользователя не существует, создаем новый");

            // Если документа нет, создаем его
            const userData = {
              email: user.email,
              displayName: user.displayName || "",
              photoURL: user.photoURL || "",
              createdAt: serverTimestamp(),
              isAdmin: user.email === "aliev.saftar94@gmail.com",
            };

            console.log("Данные для сохранения:", userData);

            try {
              await setDoc(userDocRef, userData);
              console.log(
                `Документ для пользователя ${user.email} успешно создан`
              );
            } catch (writeError) {
              console.error(
                "Ошибка при записи документа пользователя:",
                writeError
              );
              console.error("Детали ошибки:", JSON.stringify(writeError));
            }

            // Обновляем currentUser с данными из Firestore
            setCurrentUser({
              ...userData,
              id: user.uid, // Важно: устанавливаем id из auth.uid
            });
          } else {
            console.log("Документ пользователя существует, получаем данные");
            // Если документ существует, получаем данные из него
            const userData = userDoc.data();
            console.log("Полученные данные:", userData);
            setCurrentUser({
              ...userData,
              id: user.uid, // Используем auth.uid, а не то, что в документе
            });
          }
        } catch (error) {
          console.error("Error handling user authentication:", error);
          setCurrentUser({ id: user.uid, email: user.email });
        }
      } else {
        // Пользователь не авторизован
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => {
      console.log("Отписка от изменений аутентификации");
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Функция для проверки, является ли пользователь администратором
export const checkIfAdmin = (user) => {
  if (!user) return false;

  // Проверяем по email или по свойству isAdmin
  return user.email === "aliev.saftar94@gmail.com" || user.isAdmin === true;
};
