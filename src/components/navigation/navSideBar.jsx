import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SliderBar";
// import { motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
// import { Transition } from "react-transition-group";

const MenuSideBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: all 0.4s ease-in-out;
  background-color: #3c5991;
  width: 100%;
  padding: 27px 15px 27px 15px;
  margin: 0;
  list-style: none;
  z-index: 10000;

  @media screen and (min-width: 768px) {
    display: ${(props) => props.isOpen || "none"};
  }
`;

const SliderButton = styled.button``;

const SliderList = styled.ul``;

const SliderItems = styled.li`
  list-style: none;
  margin: 10px 0;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const SliderListItem = styled.a`

color: white;
text-decoration: none;
&:hover {
  color: #ddd;
`;

export const SliderMenu = ({ closeMenu, isOpen }) => {
  return (
    <MenuSideBar isOpen={isOpen}>
      <SliderList>
        {SidebarData.map((item, index) => {
          return (
            <SliderItems key={index}>
              <CustomLink to={item.path}>
                <SliderListItem>{item.title}</SliderListItem>
              </CustomLink>
            </SliderItems>
          );
        })}
      </SliderList>

      <SliderButton onClick={closeMenu}>
        <Hamburger size={32} toggle={closeMenu} toggled={isOpen} />
      </SliderButton>
    </MenuSideBar>
  );
};
