import Container from "../container/constainer";
import styled from "styled-components";
import { Navigation } from "../navigation/navigation";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { ButtonForm } from "../homePage/homePageButton";
import { lang } from "../shared/staticText/staticText";
import { SliderMenu } from "../navigation/navSideBar";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { theme } from "../style/theme";

const BlockHeader = styled.header`
  position: sticky;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${(props) => props.isColor || "#253069"};
  @media screen and (min-width: 768px) {
    opacity: ${(props) => props.isColor || "1"};
    padding-top: 27px;
    padding-bottom: 27px;
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
  color: ${theme.color.secondaryColor};
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
    display: ${(props) => props.isOpen || "none"};
    padding-top: 27px;
    padding-bottom: 27px;
  }
`;

export const Header = () => {
  const [isColor, setIsOpen] = useState(true);
  const [isOpen, setIssidOpen] = useState(false);
  const toggleMenu = () => setIssidOpen(!isOpen);
  const ref = useRef(null);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <BlockHeader changeNav={changeColor} isColor={isColor} ref={ref}>
      <Container style={{ overflowX: "visible" }}>
        <NavigationContainer>
          <HeaderText />

          <Wrapper>
            <SliderMenu closeMenu={toggleMenu} isOpen={isOpen} />
            <SliderButton onClick={toggleMenu}>
              <Hamburger size={32} toggled={isOpen} closeMenu={setIsOpen} />
            </SliderButton>
          </Wrapper>

          <Navigation changeText={changeColor} isColor={isColor} />
          <HeaderWrapButton>
            <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
          </HeaderWrapButton>
        </NavigationContainer>
      </Container>
    </BlockHeader>
  );
};
