import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";

// Функция для установки администратора (выполняется однократно)
export const setupAdmin = async (email) => {
  try {
    // Получаем текущего пользователя по email
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      // Пользователь найден, устанавливаем флаг isAdmin
      const userDoc = snapshot.docs[0];
      await updateDoc(doc(db, "users", userDoc.id), {
        isAdmin: true,
      });
      console.log(`Пользователь ${email} назначен администратором`);
      return true;
    } else {
      console.error(`Пользователь ${email} не найден`);
      return false;
    }
  } catch (error) {
    console.error("Ошибка при назначении администратора:", error);
    return false;
  }
};

export default setupAdmin;

// Вызовите эту функцию один раз с email вашего администратора
// setupAdmin("admin@example.com");
