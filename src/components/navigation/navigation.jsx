import styled from "styled-components";
import { NavigationLink } from "../navigationLink/navigationLink";

const NavigationMenu = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: auto;
  }
`;

export const Navigation = ({ needLogin }) => {
  return (
    <NavigationMenu>
      <ul style={{ display: "flex" }}>
        <NavigationLink aria-label="home" text="home" to="/" />
        <NavigationLink aria-label="about" text="about" to="/about" />
        <NavigationLink aria-label="order" text="order" to="/order" />
        <NavigationLink aria-label="contacts" text="contacts" to="/contacts" />
      </ul>
    </NavigationMenu>
  );
};
