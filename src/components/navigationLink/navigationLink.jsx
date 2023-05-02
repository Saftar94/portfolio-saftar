import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Item = styled.li`
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 17px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const Button = styled.button`
  font-family: "Montserrat";
  font-size: 12px;
  line-height: 15px;
  background-color: transparent;
  color: #161513;
  border: none;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: rgb(247 176 16);
  }
`;

export const NavigationLink = ({ label, text, to, clickButton }) => {
  return (
    <Item>
      <Button aria-label={label} onClick={clickButton}>
        <NavLink
          to={to}
          activeStyle={{
            color: "#ffd700",
          }}
        >
          {text}
        </NavLink>
      </Button>
    </Item>
  );
};
