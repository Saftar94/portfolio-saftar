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
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";
import { theme } from "../style/theme";
import {
  FaArrowLeft,
  FaTrashAlt,
  FaPaperPlane,
  FaRegClock,
} from "react-icons/fa";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
`;

const ChatHeader = styled.div`
  padding: 18px 20px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.color.HeaderLogocolor};
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: 500;

  svg {
    margin-right: 8px;
    font-size: 14px;
  }

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateX(-2px);
  }

  &:active {
    transform: translateX(-1px);
  }
`;

const ChatTitle = styled.h2`
  color: ${theme.color.HeaderLogocolor};
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
`;

const AdminInfo = styled.span`
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: normal;
  padding: 3px 10px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 12px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const MessageCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  align-items: center;
`;

const SenderInfo = styled.span`
  font-weight: 500;
  color: ${theme.color.ButtonColor};
  display: flex;
  align-items: center;
`;

const TimeInfo = styled.span`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 12px;
    opacity: 0.7;
  }
`;

const MessageText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-size: 15px;
`;

const DeleteButton = styled.button`
  background: rgba(255, 0, 0, 0.15);
  color: #ff6b6b;
  border: none;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
    font-size: 10px;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.25);
    color: #ff3333;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const InputArea = styled.form`
  display: flex;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 12px 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.1);
  }
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 0 20px;
  height: 42px;
  background: ${theme.color.ButtonColor};
  color: ${theme.color.HeaderLogocolor};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  svg {
    margin-left: 6px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: #ffd700;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

const DeleteChatButton = styled.button`
  background: rgba(255, 0, 0, 0.1);
  color: #ff6b6b;
  border: 1px solid rgba(255, 0, 0, 0.2);
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.2);
    color: #ff3333;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const ConfirmDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DialogContent = styled.div`
  background: #1a1a1a;
  padding: 35px;
  border-radius: 15px;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: scaleIn 0.3s ease;

  h3 {
    color: #ff6b6b;
    margin-top: 0;
    font-size: 22px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
    line-height: 1.6;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const DialogButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
`;

const DialogButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &.confirm {
    background: #ff3333;
    color: white;

    &:hover {
      background: #ff0000;
      box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(-1px);
    }

    &:disabled {
      background: #b33030;
      cursor: not-allowed;
    }
  }

  &.cancel {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(-1px);
    }

    &:disabled {
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.5);
      cursor: not-allowed;
    }
  }
`;

const EmptyStateMessage = styled.div`
  text-align: center;
  margin: 30px auto;
  padding: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
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

  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchChatInfo = async () => {
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

  // Исправленный слушатель сообщений
  useEffect(() => {
    if (!chatId) {
      return;
    }

    setLoading(true);

    // Создаем запрос без where условия для начальной отладки
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (querySnapshot.empty) {
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

          // Добавляем все сообщения для отладки
          messagesData.push(messageObj);
        });

        // Теперь фильтруем только для текущего чата
        const filteredMessages = messagesData.filter(
          (msg) => String(msg.chatId) === String(chatId)
        );

        setMessages(filteredMessages); // Показываем только сообщения текущего чата
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    );

    return () => {
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

      // Добавляем документ в коллекцию messages
      await addDoc(collection(db, "messages"), messageData);

      setNewMessage("");
    } catch (error) {}
  };

  const handleDeleteMessage = async (messageId) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const messageRef = doc(db, "messages", messageId);
      await deleteDoc(messageRef);

      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== messageId)
      );
    } catch (error) {}
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

      navigate("/contacts");
    } catch (error) {
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
              <FaArrowLeft /> {text.chatBack}
            </BackButton>
            <ChatTitle>
              {isAdmin ? (
                <>
                  {text.chatWithUser} {otherUser.email}
                </>
              ) : (
                <>{text.chatSupportTitle}</>
              )}
              {isAdmin && <AdminInfo>{text.chatAdminReply}</AdminInfo>}
            </ChatTitle>
          </div>

          <div>
            {isAdmin && (
              <DeleteChatButton onClick={handleDeleteChat}>
                <FaTrashAlt /> {text.chatDeleteChat}
              </DeleteChatButton>
            )}
          </div>
        </ChatHeader>

        <MessagesContainer>
          {loading ? (
            <EmptyStateMessage>{text.chatLoading}</EmptyStateMessage>
          ) : messages.length === 0 ? (
            <EmptyStateMessage>{text.chatNoMessages}</EmptyStateMessage>
          ) : (
            messages.map((message) => (
              <MessageCard key={message.id}>
                <MessageHeader>
                  <SenderInfo>From: {message.senderEmail}</SenderInfo>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TimeInfo>
                      <FaRegClock /> {message.createdAt.toLocaleString()}
                    </TimeInfo>
                    {(message.senderId === currentUser.id || isAdmin) && (
                      <DeleteButton
                        onClick={() => handleDeleteMessage(message.id)}
                      >
                        <FaTrashAlt /> {text.chatDelete}
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
            placeholder={text.chatMessagePlaceholder}
          />
          <SendButton type="submit">
            {text.chatSend} <FaPaperPlane />
          </SendButton>
        </InputArea>
      </ChatContainer>

      {/* Диалог подтверждения удаления */}
      {showConfirmDialog && (
        <ConfirmDialog>
          <DialogContent>
            <h3>{text.chatDeleteConfirm}</h3>
            <p>{text.chatDeleteSure}</p>
            <p>{text.chatDeletePermanent}</p>

            <DialogButtons>
              <DialogButton
                className="cancel"
                onClick={cancelDeleteChat}
                disabled={loading}
              >
                {text.chatCancel}
              </DialogButton>
              <DialogButton
                className="confirm"
                onClick={confirmDeleteChat}
                disabled={loading}
              >
                {loading ? text.chatDeleting : text.chatDelete}
              </DialogButton>
            </DialogButtons>
          </DialogContent>
        </ConfirmDialog>
      )}
    </Container>
  );
};

export default Chat;
