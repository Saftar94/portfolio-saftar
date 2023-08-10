import Container from "../container/constainer";
import styled from "styled-components";
import { Navigation } from "../navigation/navigation";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { ButtonForm } from "../homePage/homePageButton";
import { lang } from "../shared/staticText/staticText";
import { SliderMenu } from "../navigation/navSideBar";

import { useState } from "react";

import { Divide as Hamburger } from "hamburger-react";

const BlockHeader = styled.header`
  top: 0px;
  left: 0px;
  width: 100%;
  padding-top: 27px;
  padding-bottom: 27px;
  @media screen and (min-width: 768px) {
    opacity: ${(props) => props.isOpen || "1"};
  }
  @media screen and (min-width: 1920px) {
    opacity: 1;
  }
`;
const HeaderWrapButton = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 2px;
    background-color: #c4c4c4;
    display: block;
    bottom: -20px;
  }
`;

const SliderButton = styled.button`
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  top: 0px;
  left: 0px;
  width: 100%;
  padding-top: 27px;
  padding-bottom: 27px;

  @media screen and (min-width: 768px) {
    opacity: ${(props) => props.isOpen || "0"};
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <BlockHeader>
      <Container style={{ overflowX: "visible" }}>
        <NavigationContainer>
          <HeaderText />
          <Wrapper>
            <SliderMenu closeMenu={toggleMenu} isOpen={isOpen} />

            <SliderButton onClick={toggleMenu}>
              <Hamburger size={32} toggled={isOpen} toggle={setIsOpen} />
            </SliderButton>
          </Wrapper>

          <Navigation />
          <HeaderWrapButton>
            <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
          </HeaderWrapButton>
        </NavigationContainer>
      </Container>
    </BlockHeader>
  );
};
