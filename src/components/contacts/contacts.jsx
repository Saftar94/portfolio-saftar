import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/container";
import ChatList from "./ChatList";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.active ? "#007bff" : "#e9ecef")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  cursor: pointer;
  margin-right: 5px;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
    margin-right: 0;
  }
`;

const Contacts = ({ user }) => {
  const [activeTab, setActiveTab] = useState("chats");

  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  return (
    <Container>
      <h1>{text.contactsTitle}</h1>

      <TabContainer>
        <Tab
          active={activeTab === "chats"}
          onClick={() => setActiveTab("chats")}
        >
          {text.contactsChats}
        </Tab>
      </TabContainer>

      {activeTab === "chats" && <ChatList currentUser={user} />}
    </Container>
  );
};

export default Contacts;
