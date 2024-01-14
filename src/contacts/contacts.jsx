import styled from "styled-components";
import Container from "../components/container/constainer";

const ContactsDiv = styled.section``;

export const Contacts = ({ setToken }) => {
  return (
    <ContactsDiv>
      <Container style={{ overflowX: "visible" }}>
        <h1>Hello Auto</h1>
      </Container>
    </ContactsDiv>
  );
};
