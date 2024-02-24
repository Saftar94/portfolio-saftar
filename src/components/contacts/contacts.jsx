import React, { useState } from "react";
import Container from "../container/constainer";
import { Button } from "@material-ui/core";
import "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Contacts = () => {
  const [message, setMessage] = useState("");
  const [messages] = useState([]);
  const authState = useAuthState(auth);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!db || !authState) {
      console.error("Missing firestore or authState");
      return;
    }

    const data = {
      text: message,
      timestamp: serverTimestamp(),
      userId: authState.user.displayName,
    };
    try {
      await addDoc(collection(db, "messages"), data);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setMessage("");
  };

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload("");
  };
  return (
    <Container>
      <h1>Contacts</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
      {message && <p>Sent: {message}</p>}
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
        </div>
      ))}
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Container>
  );
};
