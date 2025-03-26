import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase/config";
import {
  addDoc,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import Container from "../container/container";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  padding: 15px;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MessageCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
  color: #6c757d;
`;

const MessageText = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background: #ff0000;
  }
`;

const InputArea = styled.form`
  display: flex;
  padding: 15px;
  border-top: 1px solid #eee;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 0 20px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteChatButton = styled.button`
  background: #ff0000;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #cc0000;
  }
`;

const ConfirmDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const DialogButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
`;

const DialogButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &.confirm {
    background: #ff0000;
    color: white;
  }

  &.cancel {
    background: #f0f0f0;
    color: #333;
  }
`;

const Chat = ({ currentUser, isAdmin }) => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatInfo, setChatInfo] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    console.log("Chat component currentUser:", currentUser);
    if (!currentUser || !currentUser.id) {
      console.error("Current user is missing ID in Chat component");
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchChatInfo = async () => {
      console.log("Fetching chat info for ID:", chatId);
      console.log("Current user:", currentUser);

      try {
        const chatRef = doc(db, "chats", chatId);
        const chatDoc = await getDoc(chatRef);

        if (chatDoc.exists()) {
          const data = chatDoc.data();
          setChatInfo(data);

          const otherParticipant = data.participants.find(
            (p) => p.id !== currentUser.id
          );
          setOtherUser(otherParticipant);

          const isParticipant = data.participants.some(
            (p) => p.id === currentUser.id
          );

          const isAdminChat = data.participants.some((p) => p.isAdmin);

          const hasAccess = isAdmin || (isParticipant && isAdminChat);

          if (!hasAccess) {
            console.log("User not authorized for this chat, redirecting");
            navigate("/contacts");
          }
        } else {
          console.log("Chat not found, redirecting");
          navigate("/contacts");
        }
      } catch (error) {
        console.error("Error fetching chat:", error);
        navigate("/contacts");
      }
    };

    if (currentUser && chatId) {
      fetchChatInfo();
    }
  }, [currentUser, chatId, navigate, isAdmin]);

  // Добавьте эту временную функцию для отладки в компоненте Chat
  // const debugMessages = async () => {
  //   try {
  //     console.log("===== ОТЛАДКА СООБЩЕНИЙ =====");
  //     console.log("Текущий chatId:", chatId);

  //     // Проверяем все сообщения в коллекции
  //     const allMessagesSnapshot = await getDocs(collection(db, "messages"));
  //     console.log("Всего сообщений в базе:", allMessagesSnapshot.size);

  //     if (allMessagesSnapshot.size === 0) {
  //       console.log("База сообщений пуста! Создаем тестовое сообщение...");
  //       await addDoc(collection(db, "messages"), {
  //         chatId: chatId,
  //         senderId: currentUser?.id || "test-sender",
  //         senderEmail: currentUser?.email || "test@example.com",
  //         text: "Тестовое сообщение для отладки",
  //         createdAt: new Date()
  //       });
  //       console.log("Тестовое сообщение создано!");
  //       return;
  //     }

  //     // Проверяем структуру сообщений
  //     console.log("Структура существующих сообщений:");
  //     allMessagesSnapshot.forEach(doc => {
  //       const data = doc.data();
  //       console.log("ID:", doc.id, "Data:", data);
  //       console.log("  - chatId:", data.chatId);
  //       console.log("  - тип chatId:", typeof data.chatId);
  //       console.log("  - текст:", data.text);
  //     });

  //     // Проверяем именно сообщения для текущего чата
  //     const chatMessagesQuery = query(
  //       collection(db, "messages"),
  //       where("chatId", "==", chatId)
  //     );

  //     const chatMessagesSnapshot = await getDocs(chatMessagesQuery);
  //     console.log(`Сообщений для chatId="${chatId}":`, chatMessagesSnapshot.size);

  //     if (chatMessagesSnapshot.size === 0) {
  //       console.log("Нет сообщений для текущего чата. Создаем тестовое...");
  //       await addDoc(collection(db, "messages"), {
  //         chatId: chatId,
  //         senderId: currentUser?.id || "test-sender",
  //         senderEmail: currentUser?.email || "test@example.com",
  //         text: "Тестовое сообщение для текущего чата",
  //         createdAt: new Date()
  //       });
  //       console.log("Тестовое сообщение для текущего чата создано!");
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при отладке сообщений:", error);
  //   }
  // };

  // // Вызовите эту функцию в начале компонента
  // useEffect(() => {
  //   if (chatId && currentUser) {
  //     debugMessages();
  //   }
  // }, [chatId, currentUser]);

  // Исправленный слушатель сообщений
  useEffect(() => {
    if (!chatId) {
      console.error("Отсутствует chatId, невозможно загрузить сообщения");
      return;
    }

    console.log("Настраиваем слушатель сообщений для чата:", chatId);
    setLoading(true);

    // Создаем запрос без where условия для начальной отладки
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    console.log("Запрос всех сообщений для отладки");

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        console.log(`Получено ${querySnapshot.size} сообщений всего`);

        if (querySnapshot.empty) {
          console.log("Сообщений вообще нет в базе!");
          setMessages([]);
          setLoading(false);
          return;
        }

        // Фильтруем сообщения для текущего чата вручную для отладки
        const messagesData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const messageObj = {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate?.() || new Date(),
          };

          // Проверяем chatId
          console.log("Сообщение:", doc.id);
          console.log("  chatId в сообщении:", data.chatId);
          console.log("  текущий chatId:", chatId);
          console.log("  совпадают?", data.chatId === chatId);

          // Добавляем все сообщения для отладки
          messagesData.push(messageObj);
        });

        console.log("Все сообщения:", messagesData);
        // Теперь фильтруем только для текущего чата
        const filteredMessages = messagesData.filter(
          (msg) => String(msg.chatId) === String(chatId)
        );
        console.log(
          "Отфильтрованные сообщения для текущего чата:",
          filteredMessages
        );

        setMessages(filteredMessages); // Показываем только сообщения текущего чата
        setLoading(false);
      },
      (error) => {
        console.error("Ошибка при подписке на сообщения:", error);
        setLoading(false);
      }
    );

    return () => {
      console.log("Отписываемся от обновлений сообщений");
      unsubscribe();
    };
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    try {
      if (!chatId) {
        console.error("Отсутствует chatId, невозможно отправить сообщение");
        return;
      }

      // Создаем новое сообщение с указанием chatId
      const messageData = {
        chatId: chatId, // Важно: явно указываем chatId
        senderId: currentUser.id,
        senderEmail: currentUser.email,
        text: newMessage,
        createdAt: serverTimestamp(),
      };

      console.log("Отправляем сообщение в чат:", chatId);

      // Добавляем документ в коллекцию messages
      await addDoc(collection(db, "messages"), messageData);

      setNewMessage("");
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const messageRef = doc(db, "messages", messageId);
      await deleteDoc(messageRef);
      console.log("Сообщение успешно удалено:", messageId);

      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== messageId)
      );
    } catch (error) {
      console.error("Ошибка при удалении сообщения:", error);
    }
  };

  // Функция для удаления всего чата
  const handleDeleteChat = async () => {
    setShowConfirmDialog(true);
  };

  // Функция для подтверждения удаления чата
  const confirmDeleteChat = async () => {
    try {
      setLoading(true);

      // 1. Сначала удаляем все сообщения
      const messagesQuery = query(
        collection(db, "messages"),
        where("chatId", "==", chatId)
      );

      const messagesSnapshot = await getDocs(messagesQuery);

      // Удаляем каждое сообщение
      const deletionPromises = messagesSnapshot.docs.map((doc) =>
        deleteDoc(doc.ref)
      );

      await Promise.all(deletionPromises);

      // 2. Удаляем сам чат
      const chatRef = doc(db, "chats", chatId);
      await deleteDoc(chatRef);

      console.log("Чат и все сообщения успешно удалены");
      navigate("/contacts");
    } catch (error) {
      console.error("Ошибка при удалении чата:", error);
      alert("Не удалось удалить чат. Попробуйте позже.");
    } finally {
      setLoading(false);
      setShowConfirmDialog(false);
    }
  };

  // Функция для отмены удаления
  const cancelDeleteChat = () => {
    setShowConfirmDialog(false);
  };

  if (!chatInfo || !otherUser) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BackButton onClick={() => navigate("/contacts")}>
              ← Back
            </BackButton>
            <h2 style={{ marginLeft: "15px" }}>
              {isAdmin ? (
                <>Chat with user {otherUser.email}</>
              ) : (
                <>Support Chat</>
              )}
            </h2>
            {isAdmin && (
              <span
                style={{ marginLeft: "10px", color: "#666", fontSize: "14px" }}
              >
                (You are replying as administrator)
              </span>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <DeleteChatButton onClick={handleDeleteChat}>
              Delete Chat
            </DeleteChatButton>
          </div>
        </ChatHeader>

        <MessagesContainer>
          {loading ? (
            <div style={{ textAlign: "center", margin: "20px" }}>
              Loading all messages...
            </div>
          ) : messages.length === 0 ? (
            <div style={{ textAlign: "center", margin: "20px" }}>
              No messages found
            </div>
          ) : (
            messages.map((message) => (
              <MessageCard key={message.id}>
                <MessageHeader>
                  <span>From: {message.senderEmail}</span>
                  <div>
                    <span>{message.createdAt.toLocaleString()}</span>
                    {(message.senderId === currentUser.id || isAdmin) && (
                      <DeleteButton
                        onClick={() => handleDeleteMessage(message.id)}
                      >
                        Delete
                      </DeleteButton>
                    )}
                  </div>
                </MessageHeader>
                <MessageText>{message.text || "Empty message"}</MessageText>
              </MessageCard>
            ))
          )}
          <div ref={messagesEndRef} />
        </MessagesContainer>

        <InputArea onSubmit={handleSendMessage}>
          <MessageInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Enter message..."
          />
          <SendButton type="submit">Send</SendButton>
        </InputArea>
      </ChatContainer>

      {/* Диалог подтверждения удаления */}
      {showConfirmDialog && (
        <ConfirmDialog>
          <DialogContent>
            <h3>Delete Confirmation</h3>
            <p>Are you sure you want to delete this chat?</p>
            <p>All messages will be permanently deleted.</p>

            <DialogButtons>
              <DialogButton
                className="cancel"
                onClick={cancelDeleteChat}
                disabled={loading}
              >
                Cancel
              </DialogButton>
              <DialogButton
                className="confirm"
                onClick={confirmDeleteChat}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </DialogButton>
            </DialogButtons>
          </DialogContent>
        </ConfirmDialog>
      )}
    </Container>
  );
};

export default Chat;
