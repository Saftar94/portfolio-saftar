import styled from "styled-components";
import { SidebarData } from "./SliderBar";
import { NavLink } from "react-router-dom";

const NavigationMenu = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: auto;
  }
`;

const NavUl = styled.ul`
  display: flex;
`;
const NavLi = styled.li`
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

const NavLinkHeader = styled(NavLink)`
@media screen and (min-width: 768px) {
  color: ${({ isColor }) => (isColor ? "black" : "white")};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.14;
  border: none;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: rgb(214, 55, 46);
  }
  }


@media screen and (min-width: 1200px) {
    font-size: 20px;

`;

export const Navigation = (changeText, isColor) => {
  return (
    <NavigationMenu>
      <NavUl>
        {SidebarData.map((item) => {
          return (
            <NavLi key={item.id}>
              <NavLinkHeader
                isColor={changeText.isColor}
                to={item.path}
                activestyle={{
                  color: "#ffd700",
                }}
              >
                {item.title}
              </NavLinkHeader>
            </NavLi>
          );
        })}
      </NavUl>
    </NavigationMenu>
  );
};
