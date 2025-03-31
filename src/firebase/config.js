import { collection } from "firebase/firestore";
// Импортируем уже инициализированный Firebase из вашего основного файла
import { db, auth } from "../components/utils/firebase";

// Коллекции в Firestore
export const usersRef = collection(db, "users");
export const chatsRef = collection(db, "chats");
export const messagesRef = collection(db, "messages");

// Реэкспортируем auth и db для использования
export { auth, db };
