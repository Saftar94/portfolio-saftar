import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutExample";
import { Contacts } from "./components/contacts/contacts";
import React, { useState } from "react";
import Login from "./components/contacts/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMe />} />
        <Route
          path="login"
          element={isLoggedIn ? <Contacts /> : <Navigate to="/login" replace />}
        />
        <Route path="contacts" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App;
