import React, { useState } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0073e6;
  }
`;

const GoogleButton = styled(Button)`
  background-color: white;
  border: 1px solid #ddd;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.active ? '#0084ff' : '#666'};
  border-bottom: 2px solid ${props => props.active ? '#0084ff' : 'transparent'};
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0;
`;

const Login = ({ updateUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("userName", result.user.displayName || result.user.email);
      updateUser(result.user);
      navigate("/contacts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (email, password) => {
    try {
      // Создаем пользователя в Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log("Firebase Auth user created:", user.uid);
      
      // Создаем данные пользователя
      const userData = {
        email: user.email,
        createdAt: new Date(),
        isAdmin: email === "admin@example.com"
      };
      
      console.log("Attempting to save user to Firestore:", userData);
      
      // Явно указываем путь к документу
      await setDoc(doc(db, "users", user.uid), userData);
      
      console.log("User successfully saved to Firestore with ID:", user.uid);
      
      // Проверяем, что document действительно создан
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Verification - document exists:", docSnap.data());
      } else {
        console.error("Verification failed - document does not exist!");
      }
      
      // Обновляем состояние
      updateUser({
        id: user.uid,
        email: user.email,
        isAdmin: email === "admin@example.com"
      });
      
      navigate("/contacts");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      // Входим через Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Получаем дополнительную информацию из Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      let userData = {
        id: user.uid,
        email: user.email
      };
      
      if (userDoc.exists()) {
        userData = {
          ...userData,
          ...userDoc.data()
        };
      }
      
      // Обновляем состояние пользователя
      updateUser(userData);
      navigate("/contacts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    
    try {
      if (isRegistering) {
        // Только вызываем handleRegister
        await handleRegister(email, password);
      } else {
        // Только вызываем handleLogin
        await handleLogin(email, password);
      }
      // Удаляем дублирующий код, так как updateUser уже вызывается в handleLogin и handleRegister
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <LoginContainer>
      <TabContainer>
        <Tab 
          active={!isRegistering} 
          onClick={() => setIsRegistering(false)}
        >
          Вход
        </Tab>
        <Tab 
          active={isRegistering} 
          onClick={() => setIsRegistering(true)}
        >
          Регистрация
        </Tab>
      </TabContainer>

      <GoogleButton onClick={handleGoogleSignIn}>
      <FcGoogle />
        Войти через Google
      </GoogleButton>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">
          {isRegistering ? "Зарегистрироваться" : "Войти"}
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
