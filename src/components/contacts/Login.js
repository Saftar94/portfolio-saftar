import React, { useState, useEffect } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Contacts } from "./contacts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = (ecent) => {
    ecent.preventDefault();
    signInWithPopup(auth, provider).then((data) => {
      setEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {email ? (
        <Contacts />
      ) : (
        <form onSubmit={handleGoogleSignIn}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login with Google</button>{" "}
          {/* Добавьте кнопку для аутентификации через Google */}
        </form>
      )}
    </div>
  );
};

export default Login;
