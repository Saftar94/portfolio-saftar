import React, { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import Container from "../container/container";

const ManualUserCreation = () => {
  const [status, setStatus] = useState("");

  const createUserDocument = async () => {
    try {
      // Получаем текущего пользователя из localStorage (если вы там его храните)
      const currentUser = JSON.parse(localStorage.getItem("user"));

      if (!currentUser || !currentUser.uid) {
        setStatus("Ошибка: Пользователь не найден в localStorage");
        return;
      }

      setStatus("Начинаем создание документа пользователя...");

      const userData = {
        id: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || "",
        photoURL: currentUser.photoURL || "",
        createdAt: serverTimestamp(),
        isAdmin: currentUser.email === "admin@example.com",
      };

      // Создаем документ пользователя
      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(userDocRef, userData);

      setStatus(
        `Документ пользователя успешно создан для ${currentUser.email}`
      );
    } catch (error) {
      console.error("Ошибка при создании документа пользователя:", error);
      setStatus(`Ошибка: ${error.message}`);
    }
  };

  return (
    <Container>
      <h2>Ручное создание документа пользователя</h2>
      <button onClick={createUserDocument}>
        Создать документ пользователя
      </button>
      {status && <p>{status}</p>}
    </Container>
  );
};

export default ManualUserCreation;
