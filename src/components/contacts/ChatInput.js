import React, { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // Отправка сообщения
    // Добавляем сообщение в локальное хранилище
    localStorage.setItem("message", message);
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
};

export default ChatInput;
