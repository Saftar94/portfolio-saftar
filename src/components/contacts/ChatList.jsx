import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, usersRef } from "../../firebase/config";
import {  getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const ChatListContainer = styled.div`
  margin-top: 20px;
`;

const UserItem = styled.div`
  padding: 15px;
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const StartChatButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatList = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState({});
  const navigate = useNavigate();
  
  // Загружаем список пользователей
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Current user:", currentUser); // Проверка текущего пользователя
        
        if (!currentUser || !currentUser.email) {
          console.error("Current user lacks email:", currentUser);
          return;
        }
        
        // Запрос всех пользователей вместо фильтрации
        const usersSnapshot = await getDocs(usersRef);
        console.log("Total documents in 'users' collection:", usersSnapshot.size);
        
        const usersList = [];
        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log("Found user document:", doc.id, userData);
          
          // Исключаем текущего пользователя и админа
          if (userData.email !== currentUser.email && userData.email !== "admin@example.com") {
            usersList.push({ id: doc.id, ...userData });
          }
        });
        
        console.log("Filtered users list:", usersList);
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    if (currentUser && currentUser.email) {
      fetchUsers();
    }
  }, [currentUser]);
  
  // Проверяем существующие чаты
  useEffect(() => {
    const fetchChats = async () => {
      const chatData = {};
      
      for (const user of users) {
        // Формируем уникальный ID чата из ID двух пользователей
        const chatId = [currentUser.id, user.id].sort().join("_");
        const chatRef = doc(db, "chats", chatId);
        const chatDoc = await getDoc(chatRef);
        
        chatData[user.id] = chatDoc.exists();
      }
      
      setChats(chatData);
    };
    
    if (users.length > 0) {
      fetchChats();
    }
  }, [users, currentUser]);
  
  // Создаем новый чат или открываем существующий
  const handleStartChat = async (userId) => {
    const targetUser = users.find(u => u.id === userId);
    
    // Уникальный ID чата
    const chatId = [currentUser.id, userId].sort().join("_");
    const chatRef = doc(db, "chats", chatId);
    const chatDoc = await getDoc(chatRef);
    
    if (!chatDoc.exists()) {
      // Создаем новый чат
      await setDoc(chatRef, {
        participants: [
          { id: currentUser.id, email: currentUser.email },
          { id: userId, email: targetUser.email }
        ],
        createdAt: new Date()
      });
    }
    
    // Переходим к чату
    navigate(`/chat/${chatId}`);
  };
  
  return (
    <ChatListContainer>
      <h2>Доступные пользователи</h2>
      {users.length === 0 ? (
        <p>Пока нет других пользователей.</p>
      ) : (
        users.map((user) => (
          <UserItem key={user.id}>
            <div>
              <p><strong>{user.email}</strong></p>
            </div>
            <StartChatButton onClick={() => handleStartChat(user.id)}>
              {chats[user.id] ? "Открыть чат" : "Начать чат"}
            </StartChatButton>
          </UserItem>
        ))
      )}
    </ChatListContainer>
  );
};

export default ChatList; 