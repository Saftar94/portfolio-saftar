import styled from "styled-components";
import Container from "../components/container/constainer";
import { useState } from "react";

const ContactsDiv = styled.section``;
const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

async function loginUser(credentials) {
  return fetch("http://localhost:8082/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
console.log(loginUser());

export const Contacts = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      username,
      password,
    });
    setToken(token);
    console.log(setToken(token));
  };

  return (
    <ContactsDiv>
      <Container style={{ overflowX: "visible" }}>
        <h1>Hello Auto</h1>
        <LoginWrapper>
          <h1>Войдите в систему</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              <p>Email</p>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </LoginWrapper>
      </Container>
    </ContactsDiv>
  );
};

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
];

const settings = [
  { name: "right", userID: 1 },
  { name: "left", userID: 3 },
  { name: "top", userID: 2 },
  { name: "bottom", userID: 4 },
];

const result = users.map((item) => {
  let { id, name } = item;
  settings.reduce((acc, data) => {
    return (acc += data);
  });
  return { id, name };
});

console.log(result);
