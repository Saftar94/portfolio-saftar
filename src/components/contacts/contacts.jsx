import React, { useState } from "react";
import Container from "../container/constainer";
import { Button } from "@material-ui/core";
import "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styled from "styled-components";
import ChatDisplay from "./ChatDisplay";

const MainHeader = styled.h1`
  color: white;
`;
const ChatInputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const ChatInputField = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
`;
export const Contacts = () => {
  const [message, setMessage] = useState("");
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
      <MainHeader>Contacts</MainHeader>
      <ChatDisplay />
      <ChatInputContainer onSubmit={sendMessage}>
        <ChatInputField
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <SendButton type="submit">Send</SendButton>
      </ChatInputContainer>
      {/* {message && <p>Sent: {message}</p>}
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
        </div>
      ))} */}
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Container>
  );
};
