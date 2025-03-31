import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/container";
import ChatList from "./ChatList";

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
  // Проверка на админа

  return (
    <Container>
      <h1>Contacts</h1>

      <TabContainer>
        <Tab
          active={activeTab === "chats"}
          onClick={() => setActiveTab("chats")}
        >
          Chats
        </Tab>
      </TabContainer>

      {activeTab === "chats" && <ChatList currentUser={user} />}
    </Container>
  );
};

export default Contacts;
