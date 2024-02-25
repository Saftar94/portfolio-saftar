import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase";
import styled from "styled-components";

const Mainblock = styled.div`
  color: white;
`;
const ChatDisplay = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    // Очистка слушателя при размонтировании компонента
    return () => unsubscribe();
  }, []);

  console.log(messages);

  return (
    <>
      <Mainblock>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <strong>Sender:</strong> {message.userId},{" "}
              <strong>Content:</strong> {message.text}
            </li>
          ))}
        </ul>
      </Mainblock>
    </>
  );
};

export default ChatDisplay;
