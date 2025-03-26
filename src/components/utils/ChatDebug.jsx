import React, { useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Container from "../container/container";
import styled from "styled-components";

const DebugContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 20px 0;
`;

const Field = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

const ResultArea = styled.pre`
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 20px;
  overflow: auto;
  max-height: 300px;
`;

const ChatDebug = () => {
  const [chatId, setChatId] = useState("");
  const [senderId, setSenderId] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [result, setResult] = useState("");

  const createMessage = async () => {
    try {
      setResult("Sending message...");

      // Создаем сообщение
      const messageData = {
        chatId,
        senderId,
        senderEmail,
        text: messageText,
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "messages"), messageData);

      setResult(`Message successfully created with ID: ${docRef.id}`);
    } catch (error) {
      setResult(`Error: ${error.message}\n${error.stack}`);
    }
  };

  const checkMessages = async () => {
    try {
      setResult("Checking messages...");

      // Получаем все сообщения для указанного чата
      const messagesQuery = query(
        collection(db, "messages"),
        where("chatId", "==", chatId)
      );

      const querySnapshot = await getDocs(messagesQuery);

      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });

      setResult(
        `Found ${messages.length} messages:\n${JSON.stringify(
          messages,
          null,
          2
        )}`
      );
    } catch (error) {
      setResult(`Error: ${error.message}\n${error.stack}`);
    }
  };

  return (
    <Container>
      <h2>Chat Debugging</h2>
      <DebugContainer>
        <Field>
          <Label>Chat ID:</Label>
          <Input
            type="text"
            value={chatId}
            onChange={(e) => setChatId(e.target.value)}
            placeholder="Example: user1_user2"
          />
        </Field>

        <Field>
          <Label>Sender ID:</Label>
          <Input
            type="text"
            value={senderId}
            onChange={(e) => setSenderId(e.target.value)}
            placeholder="User ID from Firebase Auth"
          />
        </Field>

        <Field>
          <Label>Sender Email:</Label>
          <Input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </Field>

        <Field>
          <Label>Message Text:</Label>
          <Input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Message text"
          />
        </Field>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={createMessage}>Create Message</Button>
          <Button onClick={checkMessages}>Check Messages</Button>
        </div>

        {result && <ResultArea>{result}</ResultArea>}
      </DebugContainer>
    </Container>
  );
};

export default ChatDebug;
