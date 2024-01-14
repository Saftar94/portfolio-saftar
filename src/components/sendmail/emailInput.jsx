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
import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка текущего URL
    const currentUrl = window.location.href;

    if (currentUrl.includes("http://localhost:3000/")) {
      // Пользователь зашел на сайт через https://saf-portfolio-saftar.netlify.app/
      // Добавьте свою логику для отправки письма или в телеграм
      console.log("User came from the specified Netlify URL");

      // Пример отправки письма на мейл
      try {
        const response = await axios.post(
          "https://your-backend-url/send-email",
          {
            email,
            message,
          }
        );

        if (response.data.success) {
          console.log("Email sent successfully!");
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }

      // Пример отправки в телеграм
      try {
        const telegramResponse = await axios.post(
          "https://your-backend-url/send-telegram",
          {
            message,
          }
        );

        if (telegramResponse.data.success) {
          console.log("Message sent to Telegram successfully!");
        } else {
          console.error("Failed to send message to Telegram");
        }
      } catch (telegramError) {
        console.error("Error sending message to Telegram:", telegramError);
      }
    } else {
      // Добавьте логику для других случаев
      console.log("User came from a different URL");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <br />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default EmailForm;
