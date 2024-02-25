import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const fetchMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const messages = [];
    querySnapshot.forEach((doc) => {
      // Получаем данные из документа
      const data = doc.data();
      // Добавляем сообщение в массив
      messages.push({
        id: doc.id,
        content: data.content,
        sender: data.sender,
      });
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};

export default fetchMessages;
