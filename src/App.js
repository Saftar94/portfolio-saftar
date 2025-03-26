import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutExample";
import React, { useState, useEffect } from "react";
import Login from "./components/contacts/Login";
import Contacts from "./components/contacts/contacts";
import Chat from "./components/contacts/Chat";

// Компонент защищенного маршрута
function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  // Проверяем localStorage при начальной загрузке
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Обновляем localStorage при изменении пользователя
  useEffect(() => {
    if (user) {
      console.log("Current user in App:", user); // Проверяем данные пользователя
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Проверка на администратора
  const isAdmin = user && user.email === "aliev.saftar94@gmail.com";

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/login" element={<Login updateUser={updateUser} />} />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute user={user}>
              <Contacts user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <ProtectedRoute user={user}>
              <Chat currentUser={user} isAdmin={isAdmin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
