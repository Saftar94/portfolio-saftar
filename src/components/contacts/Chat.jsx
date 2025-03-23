import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db, messagesRef } from "../../firebase/config";
import { addDoc, collection, query, where, orderBy, onSnapshot, doc, getDoc, serverTimestamp } from "firebase/firestore";
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

const Message = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 18px;
  margin-bottom: 10px;
  background: ${props => props.isOwn ? '#dcf8c6' : '#f1f0f0'};
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  
  p {
    margin: 0;
  }
  
  small {
    display: block;
    font-size: 12px;
    color: #666;
    margin-top: 5px;
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

const Chat = ({ currentUser, isAdmin }) => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatInfo, setChatInfo] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  // Получаем информацию о чате
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
          
          // Определяем другого участника
          const otherParticipant = data.participants.find(p => p.id !== currentUser.id);
          
          setOtherUser(otherParticipant);
          
          // Проверяем, имеет ли текущий пользователь доступ к чату
          const isParticipant = data.participants.some(p => p.id === currentUser.id);
          if (!isParticipant && !isAdmin) {
            console.log("User not authorized, redirecting");
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
    
    fetchChatInfo();
  }, [chatId, currentUser, navigate, isAdmin]);
  
  // Получаем сообщения в реальном времени
  useEffect(() => {
    if (!chatId) return;
    console.log("Setting up messages listener for chatId:", chatId);
    const q = query(
      collection(db, "messages"),
      where("chatId", "==", chatId),
      orderBy("createdAt", "asc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("Сработал onSnapshot, документов:", querySnapshot.size);
      
      if (querySnapshot.empty) {
        console.log("Документов в запросе нет!");
        setMessages([]);
        return;
      }
      
      console.log("Данные документов:");
      querySnapshot.docs.forEach(doc => console.log(doc.id, " => ", doc.data()));
      
      const messagesData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const createdAt = data.createdAt?.toDate?.() || new Date();
        return { id: doc.id, ...data, createdAt };
      });
      
      console.log("Обработанные сообщения:", messagesData);
      setMessages(messagesData);
    }, (error) => {
      console.error("Ошибка подписки:", error);
    });
    
    return () => unsubscribe();
  }, [chatId]);

  // Прокрутка вниз при новых сообщениях
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Отправка нового сообщения
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    try {
      const messageData = {
        chatId,
        senderId: currentUser.id,
        senderEmail: currentUser.email,
        text: newMessage,
        createdAt: serverTimestamp()
      };
      
      console.log("Отправляем сообщение:", messageData.text);
      await addDoc(messagesRef, messageData);
      
      setNewMessage("");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };
  
  if (!chatInfo || !otherUser) {
    return <div>Загрузка...</div>;
  }
  
  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <BackButton onClick={() => navigate("/contacts")}>
            ← Назад
          </BackButton>
          <h2>Чат с {otherUser.email}</h2>
        </ChatHeader>

        <MessagesContainer>
          {messages.length === 0 ? (
            <div style={{textAlign: 'center', margin: '20px'}}>
              Нет сообщений. Начните общение!
            </div>
          ) : (
            messages.map((msg) => (
              <Message 
                key={msg.id} 
                isOwn={msg.senderId === currentUser.id}
              >
                <p>{msg.text || "Пустое сообщение"}</p>
                <small>
                  {msg.senderId !== currentUser.id && `${msg.senderEmail || "Пользователь"} • `}
                  {msg.createdAt instanceof Date 
                    ? msg.createdAt.toLocaleString()
                    : "Время не определено"}
                </small>
              </Message>
            ))
          )}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        
        <InputArea onSubmit={handleSendMessage}>
          <MessageInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Введите сообщение..."
          />
          <SendButton type="submit">Отправить</SendButton>
        </InputArea>
      </ChatContainer>
    </Container>
  );
};

export default Chat; 