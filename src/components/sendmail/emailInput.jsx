// import React, { useState } from "react";
// import styled from "styled-components";

// const FormWrapper = styled.form`
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   outline: none;
//   transition: border-color 0.3s;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   outline: none;
//   transition: border-color 0.3s;
//   resize: vertical;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const EmailForm = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, email, message });
//   };

//   return (
//     <FormWrapper onSubmit={handleSubmit}>
//       <InputWrapper>
//         <Label>Имя</Label>
//         <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </InputWrapper>

//       <InputWrapper>
//         <Label>Email</Label>
//         <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </InputWrapper>

//       <InputWrapper>
//         <Label>Сообщение</Label>
//         <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
//       </InputWrapper>

//       <SubmitButton type="submit">Отправить</SubmitButton>
//     </FormWrapper>
//   );
// };

// export default EmailForm;
// EmailForm.js
// import React, { useState } from "react";
// import axios from "axios";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Проверка текущего URL
//     const currentUrl = window.location.href;

//     if (currentUrl.includes("https://saf-portfolio-saftar.netlify.app/")) {
//       // Пользователь зашел на сайт через https://saf-portfolio-saftar.netlify.app/
//       // Добавьте свою логику для отправки письма или в телеграм
//       console.log("User came from the specified Netlify URL");

//       // Пример отправки письма на мейл
//       try {
//         const response = await axios.post(
//           "https://your-backend-url/send-email",
//           {
//             email,
//             message,
//           }
//         );

//         if (response.data.success) {
//           console.log("Email sent successfully!");
//         } else {
//           console.error("Failed to send email");
//         }
//       } catch (error) {
//         console.error("Error sending email:", error);
//       }

//       // Пример отправки в телеграм
//       try {
//         const telegramResponse = await axios.post(
//           "https://your-backend-url/send-telegram",
//           {
//             message,
//           }
//         );

//         if (telegramResponse.data.success) {
//           console.log("Message sent to Telegram successfully!");
//         } else {
//           console.error("Failed to send message to Telegram");
//         }
//       } catch (telegramError) {
//         console.error("Error sending message to Telegram:", telegramError);
//       }
//     } else {
//       // Добавьте логику для других случаев
//       console.log("User came from a different URL");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <br />
//       <label>Message:</label>
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//       />
//       <br />
//       <button type="submit">Send Message</button>
//     </form>
//   );
// };

// export default EmailForm;

// ==========================================

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3003');

// const EmailForm = () =>{
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         socket.on('message', (newMessage) => {
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//       });

//       return () => {
//         socket.disconnect();
//       };
//     }, []);

//     const handleSendMessage = () => {
//       if (message.trim() !== '') {
//         socket.emit('message', message);
//         setMessage('');
//       }
//     };
//   console.log(messages)
//     return (
//       <div>
//         <div>
//           {messages.map((msg, index) => (
//             <div key={index} style={{ marginBottom: '8px', padding: '8px', border: '1px solid #ccc',color:"red", borderRadius: '4px' }}>{msg}</div>
//           ))}
//         </div>
//         <div>
//           <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} style={{ marginBottom: '8px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//     );
//   }

// export default EmailForm;

// ==========================================

import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BlockActive = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;
const TextActive = styled.p``;

const NumberActive = styled.p`
  border-radius: 20%;
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.14;
  border: none;
  cursor: pointer;
  border: 2px solid black;
  padding: 3px;
`;
const socket = io("http://localhost:3005");

const EmailForm = () => {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:3005");

    socket.on("activeSessions", (count) => {
      setActiveSessions(count);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  // ================================================

  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  console.log(message);
  useEffect(() => {
    // Listen for 'chat message' events from the server
    socket.on("chat message", (message) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "other" },
      ]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Emit a 'chat message' event to the server
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <BlockActive>
      <TextActive>Active Sessions:</TextActive>
      <NumberActive>{activeSessions}</NumberActive>
      <div>
        <ul>
          {chatMessages.map((msg, index) => (
            <li key={index}>
              {" "}
              {msg.text} ({msg.sender})
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </BlockActive>
  );
};

export default EmailForm;
