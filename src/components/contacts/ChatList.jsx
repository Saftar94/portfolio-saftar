import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, usersRef } from "../../firebase/config";
import { getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Container from "../container/container";
import { checkIfAdmin } from "../utils/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";
import { theme } from "../style/theme";
import { FaComments, FaUsersCog, FaUserTie } from "react-icons/fa";

const ChatListContainer = styled.div`
  padding: 15px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const PageTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    color: ${theme.color.ButtonColor};
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const UserList = styled.div`
  margin-top: 20px;
`;

const UserItem = styled.div`
  padding: 18px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const UserEmail = styled.div`
  color: #f1f1f1;
  font-weight: 500;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: ${theme.color.ButtonColor};
    opacity: 0.8;
  }
`;

const StartChatButton = styled.button`
  background: ${theme.color.ButtonColor};
  color: ${theme.color.HeaderLogocolor};
  border: none;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  letter-spacing: 0.3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: #ffd700;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NoUsersMessage = styled.div`
  padding: 30px;
  text-align: center;
  color: #aaa;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  margin: 20px 0;
  border: 1px dashed rgba(255, 255, 255, 0.1);
`;

const RoleInfo = styled.div`
  margin-top: 30px;
  padding: 15px;
  background: rgba(255, 215, 0, 0.05);
  border-radius: 8px;
  font-size: 14px;
  color: #e0e0e0;
  line-height: 1.5;
  border-left: 3px solid ${theme.color.ButtonColor};

  strong {
    color: ${theme.color.ButtonColor};
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }
`;

const ChatList = ({ currentUser }) => {
  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  const [users, setUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [chats, setChats] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

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

  // Исправляем объявление состояния isAdmin
  useEffect(() => {
    // Устанавливаем состояние isAdmin на основе результата функции checkIfAdmin
    setIsAdmin(checkIfAdmin(currentUser));
  }, [currentUser]);

  return (
    <Container>
      <ChatListContainer>
        <PageTitle>
          {isAdmin ? (
            <>
              <FaUsersCog /> {text.chatUserChats}
            </>
          ) : (
            <>
              <FaComments /> {text.chatTechSupport}
            </>
          )}
        </PageTitle>

        {isAdmin ? (
          // Режим администратора - показываем всех пользователей
          <UserList>
            {users.length === 0 ? (
              <NoUsersMessage>{text.chatNoUsers}</NoUsersMessage>
            ) : (
              users.map((user) => (
                <UserItem key={user.id}>
                  <UserEmail>
                    <FaUserTie /> {user.email}
                  </UserEmail>
                  <StartChatButton onClick={() => handleStartChat(user.id)}>
                    {chats[user.id] ? text.chatOpenChat : text.chatStartChat}
                  </StartChatButton>
                </UserItem>
              ))
            )}
            <RoleInfo>
              <strong>{text.chatAdminMessage}</strong>
            </RoleInfo>
          </UserList>
        ) : (
          // Режим обычного пользователя - показываем администраторов
          <UserList>
            {adminUsers.length === 0 ? (
              <NoUsersMessage>{text.chatNoAdmins}</NoUsersMessage>
            ) : (
              adminUsers.map((admin) => (
                <UserItem key={admin.id}>
                  <UserEmail>
                    <FaUserTie /> {text.chatAdministrator}{" "}
                    {admin.displayName || admin.email}
                  </UserEmail>
                  <StartChatButton onClick={() => handleStartChat(admin.id)}>
                    {chats[admin.id]
                      ? text.chatOpenSupport
                      : text.chatContactSupport}
                  </StartChatButton>
                </UserItem>
              ))
            )}
            <RoleInfo>
              <strong>{text.chatSupportTitle}</strong>
              {text.chatSupportMessage}
            </RoleInfo>
          </UserList>
        )}
      </ChatListContainer>
    </Container>
  );
};

export default ChatList;
