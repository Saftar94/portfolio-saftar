import React, { useState, useEffect } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Contacts } from "./contacts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();

    try {
      const result = await signInWithPopup(auth, provider);
      setEmail(result.user.email);
      localStorage.setItem("email", result.user.email);
      setIsLoggedIn(true); // Set this state to trigger rendering Contacts
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    const cachedEmail = localStorage.getItem("email");
    if (cachedEmail) {
      setEmail(cachedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
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
            value={isLoggedIn}
            onChange={(e) => setIsLoggedIn(e.target.value)}
          />
          <button type="submit">Login with Google</button>{" "}
        </form>
      )}
    </div>
  );
};

export default Login;
