import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/container";
import ChatList from "./ChatList";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";
import { theme } from "../style/theme";

const ContactsContainer = styled.div`
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

const ContactsTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.color.HeaderLogocolor};
  margin-bottom: 25px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40%;
    height: 3px;
    background: ${theme.color.ButtonColor};
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px;
  max-width: 400px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px 20px;
  background: ${(props) =>
    props.active ? theme.color.ButtonColor : "transparent"};
  color: ${(props) => (props.active ? theme.color.HeaderLogocolor : "#e0e0e0")};
  border: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  font-size: 15px;
  letter-spacing: 0.3px;
  box-shadow: ${(props) =>
    props.active ? "0 4px 10px rgba(0, 0, 0, 0.15)" : "none"};

  &:hover {
    background: ${(props) =>
      props.active ? theme.color.ButtonColor : "rgba(255, 255, 255, 0.07)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:first-child {
    margin-right: 4px;
  }
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 5px;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const Contacts = ({ user }) => {
  const [activeTab, setActiveTab] = useState("chats");

  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  return (
    <Container>
      <ContactsContainer>
        <ContactsTitle>{text.contactsTitle}</ContactsTitle>

        <TabContainer>
          <Tab
            active={activeTab === "chats"}
            onClick={() => setActiveTab("chats")}
          >
            {text.contactsChats}
          </Tab>
        </TabContainer>

        <ContentWrapper>
          {activeTab === "chats" && <ChatList currentUser={user} />}
        </ContentWrapper>
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
