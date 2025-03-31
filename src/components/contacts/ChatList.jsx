import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, usersRef } from "../../firebase/config";
import { getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Container from "../container/container";
import { checkIfAdmin } from "../utils/AuthContext";

const ChatListContainer = styled.div`
  margin-top: 20px;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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

  &:hover {
    background: #45a049;
  }
`;

const UserEmail = styled.p`
  font-size: 16px;
  margin: 0;
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const NoUsersMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-top: 30px;
`;

const RoleInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
`;

const ChatList = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [chats, setChats] = useState({});
  const navigate = useNavigate();

  // Определяем, является ли текущий пользователь администратором
  const isAdmin = checkIfAdmin(currentUser);

  // Загружаем список пользователей
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!currentUser || !currentUser.email) {
          console.error("Current user lacks email:", currentUser);
          return;
        }

        const usersSnapshot = await getDocs(usersRef);

        const usersList = [];
        const adminsList = [];

        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log("Found user document:", doc.id, userData);

          // Добавляем id к данным пользователя
          const user = { id: doc.id, ...userData };

          // Проверяем, есть ли email у пользователя
          if (!userData.email) {
            console.warn("User without email:", doc.id, userData);
            return;
          }

          // Разделяем пользователей на админов и не-админов
          if (userData.isAdmin) {
            adminsList.push(user);
          } else {
            usersList.push(user);
          }
        });

        // Если текущий пользователь админ, показываем ему обычных пользователей
        // Если текущий пользователь обычный, показываем ему только админов
        if (isAdmin) {
          // Фильтруем, чтобы не показывать текущего пользователя
          setUsers(usersList.filter((user) => user.id !== currentUser.id));
        } else {
          // Показываем только админов для обычных пользователей
          setAdminUsers(adminsList);
        }
      } catch (error) {}
    };

    if (currentUser && currentUser.email) {
      fetchUsers();
    }
  }, [currentUser, isAdmin]);

  // Проверяем существующие чаты
  useEffect(() => {
    const fetchChats = async () => {
      try {
        if (!currentUser || !currentUser.id) {
          return;
        }

        // Определяем, для какого списка пользователей проверять чаты
        const usersToCheck = isAdmin ? users : adminUsers;

        const chatData = {};

        for (const user of usersToCheck) {
          if (!user.id) {
            continue;
          }

          // Формируем уникальный ID чата из ID двух пользователей
          const chatId = [currentUser.id, user.id].sort().join("_");

          const chatRef = doc(db, "chats", chatId);
          const chatDoc = await getDoc(chatRef);

          chatData[user.id] = chatDoc.exists();
        }

        setChats(chatData);
      } catch (error) {}
    };

    // Проверяем, какой список пользователей использовать
    const usersToCheck = isAdmin ? users : adminUsers;

    if (usersToCheck.length > 0 && currentUser && currentUser.id) {
      fetchChats();
    }
  }, [users, adminUsers, currentUser, isAdmin]);

  // Создаем новый чат или открываем существующий
  const handleStartChat = async (userId) => {
    try {
      if (!currentUser || !currentUser.id) {
        alert(
          "Отсутствует информация о пользователе. Попробуйте выйти и войти снова."
        );
        return;
      }

      // Определяем, из какого списка брать целевого пользователя
      const targetList = isAdmin ? users : adminUsers;
      const targetUser = targetList.find((u) => u.id === userId);

      if (!targetUser) {
        return;
      }

      console.log("Starting chat between users:", {
        current: { id: currentUser.id, email: currentUser.email },
        target: { id: targetUser.id, email: targetUser.email },
      });

      // Уникальный ID чата
      const chatId = [currentUser.id, userId].sort().join("_");

      const chatRef = doc(db, "chats", chatId);
      const chatDoc = await getDoc(chatRef);

      if (!chatDoc.exists()) {
        // Создаем новый чат
        await setDoc(chatRef, {
          participants: [
            { id: currentUser.id, email: currentUser.email, isAdmin: isAdmin },
            {
              id: userId,
              email: targetUser.email,
              isAdmin: targetUser.isAdmin,
            },
          ],
          createdAt: new Date(),
          isAdminChat: true, // Помечаем, что это чат с админом
        });
      } else {
        console.log("Existing chat found:", chatDoc.data());
      }

      // Переходим к чату
      navigate(`/chat/${chatId}`);
    } catch (error) {
      console.error("Error in handleStartChat:", error);
      alert("Не удалось открыть чат. Пожалуйста, попробуйте еще раз.");
    }
  };

  return (
    <Container>
      <ChatListContainer>
        <PageTitle>{isAdmin ? "User Chats" : "Technical Support"}</PageTitle>

        {isAdmin ? (
          // Режим администратора - показываем всех пользователей
          <>
            {users.length === 0 ? (
              <NoUsersMessage>No users to connect with yet.</NoUsersMessage>
            ) : (
              users.map((user) => (
                <UserItem key={user.id}>
                  <UserEmail>{user.email}</UserEmail>
                  <StartChatButton onClick={() => handleStartChat(user.id)}>
                    {chats[user.id] ? "Open Chat" : "Start Chat"}
                  </StartChatButton>
                </UserItem>
              ))
            )}
            <RoleInfo>
              <strong>You are logged in as administrator.</strong> You can
              communicate with all system users.
            </RoleInfo>
          </>
        ) : (
          // Режим пользователя - показываем только администраторов
          <>
            {adminUsers.length === 0 ? (
              <NoUsersMessage>
                No administrators found. Please contact technical support.
              </NoUsersMessage>
            ) : (
              adminUsers.map((admin) => (
                <UserItem key={admin.id}>
                  <UserEmail>
                    Administrator {admin.displayName || admin.email}
                  </UserEmail>
                  <StartChatButton onClick={() => handleStartChat(admin.id)}>
                    {chats[admin.id] ? "Open Support Chat" : "Contact Support"}
                  </StartChatButton>
                </UserItem>
              ))
            )}
            <RoleInfo>
              In this section you can contact the administrator for assistance.
            </RoleInfo>
          </>
        )}
      </ChatListContainer>
    </Container>
  );
};

export default ChatList;
