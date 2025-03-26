import styled from "styled-components";
import { SidebarData } from "./SliderBar";
import { NavLink } from "react-router-dom";
import { theme } from "../style/theme";

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
    color: ${({ iscolor }) => (iscolor ? "#BDBDBD" : "#F5F5F5")};
    font-weight: 500;
    font-size: 12px;
    line-height: 1.14;
    border: none;
    cursor: pointer;
    transition: color 100ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
      color: ${theme.color.ButtonColor};
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Navigation = ({ changeText, user, onLogout }) => {
  // Фильтруем элемент Login из навигации, если пользователь авторизован
  const navigationItems = SidebarData.filter((item) => {
    if (item.title === "Login") {
      return !user; // Показываем Login только если пользователь не авторизован
    }
    return true;
  });

  return (
    <NavigationMenu>
      <NavUl>
        {navigationItems.map((item) => {
          return (
            <NavLi key={item.id}>
              <NavLinkHeader
                iscolor={changeText.isColor}
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
