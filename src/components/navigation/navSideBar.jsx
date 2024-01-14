import styled from "styled-components";
import { SidebarData } from "./SliderBar";
import { Divide as Hamburger } from "hamburger-react";
import { HomePageButton } from "../homePage/homePageButton";
import { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../style/theme";

const TitleSideBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
position: fixed;
top: 0;
right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
transition: all 0.4s ease-in-out;
rgba(0,212,255,1) 100%);
background:${theme.color.Maincolor};
width: 100%;
padding: 27px 15px 27px 15px;
margin: 0;
list-style: none;
z-index: 10000;
height: 100%;

@media screen and (min-width: 768px) {
  display: ${(props) => props.isOpen || "none"};
}
`;

const MenuSideBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SliderButton = styled.button`
  display: flex;
  color: white;
`;

export const SliderList = styled.ul``;

const fadeInUp = keyframes`   
0%{transform:translate(0px, 100px); opacity: 0;}
  100%{transform:translate(0px, 0); opacity: 1;}
`;

export const SliderItems = styled.li`
  list-style: none;
  margin: 10px 0;
  animation: ${fadeInUp} ${(props) => props.isOpen || "1.0s ease-in-out"};
`;

export const SliderListItem = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  background-color: transparent;
  color: ${theme.color.ColorText};
  border: none;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 767px) {
    /* Стили для телефона */
    font-size: 20px;
    line-height: 1.3;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Стили для планшета */
    font-size: 24px;
    line-height: 1.25;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${theme.color.ButtonColor};
  }
`;

export const SliderMenu = ({ closeMenu, isOpen }) => {
  return (
    <>
      <TitleSideBar onClick={closeMenu} isOpen={isOpen}>
        <MenuSideBar>
          <SliderList onClick={closeMenu}>
            {SidebarData.map((item) => {
              return (
                <SliderItems isOpen={!isOpen} key={item.id}>
                  <SliderListItem
                    to={item.path}
                    activestyle={{
                      color: "#536DFE",
                    }}
                  >
                    {item.title}
                  </SliderListItem>
                </SliderItems>
              );
            })}
          </SliderList>

          <SliderButton onClick={closeMenu}>
            <Hamburger size={32} closeMenu={closeMenu} toggled={isOpen} />
          </SliderButton>
        </MenuSideBar>
        <HomePageButton />
      </TitleSideBar>
    </>
  );
};
