import React from "react";

const ChatDisplay = () => {
  // Получаем сообщение из локального хранилища
  const message = localStorage.getItem("message");

  return (
    <div>
      <h2>Последнее сообщение:</h2>
      <p>{message || "Нет сообщений"}</p>
    </div>
  );
};

export default ChatDisplay;
