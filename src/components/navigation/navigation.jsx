import styled from "styled-components";
import { SidebarData } from "./SliderBar";
import { NavLink } from "react-router-dom";
import { theme } from "../style/theme";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

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
  margin-right: 26px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-3px);

    a {
      color: ${theme.color.accentColor};
    }

    &::after {
      width: 100%;
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);

    a {
      color: #ff7e5f;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.color.accentColor};
    transition: all 0.3s ease;
    opacity: 0;
  }

  // Стили для активного элемента
  &.active-link {
    a {
      color: ${theme.color.ButtonColor};
    }

    &::after {
      width: 100%;
      opacity: 1;
    }
  }

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

    &.active {
      color: ${theme.color.ButtonColor};
      text-decoration: underline;
    }

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
  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  // Фильтруем элемент Login из навигации, если пользователь авторизован
  const navigationItems = SidebarData.filter((item) => {
    if (item.title === "Login") {
      return !user; // Показываем Login только если пользователь не авторизован
    }
    return true;
  });

  // Функция для получения локализованного названия пункта меню
  const getLocalizedTitle = (title) => {
    switch (title) {
      case "Home":
        return text.headerHome || "Home";
      case "About":
        return text.headerAbout || "About";
      case "Projects":
        return text.headerProjects || "Projects";
      case "Contacts":
        return text.headerContacts || "Contacts";
      case "Login":
        return text.headerLogin || "Login";
      case "Logout":
        return text.headerLogout || "Logout";
      default:
        return title;
    }
  };

  return (
    <NavigationMenu>
      <NavUl>
        {navigationItems.map((item) => {
          return (
            <NavLi
              key={item.id}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <NavLinkHeader
                iscolor={changeText}
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {getLocalizedTitle(item.title)}
              </NavLinkHeader>
            </NavLi>
          );
        })}
      </NavUl>
    </NavigationMenu>
  );
};
