import Container from "../container/container";
import styled from "styled-components";
import { Navigation } from "../navigation/navigation";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { SliderMenu } from "../navigation/navSideBar";
import { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { theme } from "../style/theme";
import { DesktopAuthButtons } from "../auth/AuthButtons";
import LanguageSwitcher from "../shared/LanguageSwitcher";

const BlockHeader = styled.header`
  position: sticky;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 20px 27px;
  background: ${(props) =>
    props.isColor ||
    "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);"};
  @media (min-width: 768px) {
    padding: 27px;
  }
  @media (min-width: 1920px) {
    opacity: 1;
  }
`;

const HeaderWrapButton = styled.div`
  height: 100%;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
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
    top: -20px;
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
  position: sticky;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;

  @media (min-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    padding: 27px;
  }
`;

// Добавим стили для мобильного и десктопного переключателя языков
const LanguageSwitcherWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 15px 0;
    justify-content: center;
  }
`;

export const Header = ({ user, onLogout }) => {
  const [isСolor, setIsOpen] = useState(1);
  const [isOpen, setIssidOpen] = useState(false);
  const toggleMenu = () => setIssidOpen(!isOpen);
  const ref = useRef(null);

  // Получаем текущий язык и переводы

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setIsOpen(0);
      } else {
        setIsOpen(1);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <BlockHeader changeNav={isСolor} isColor={isСolor} ref={ref}>
      <Container style={{ overflowX: "visible" }}>
        <NavigationContainer>
          <HeaderText />
          <Wrapper>
            <SliderMenu
              closeMenu={toggleMenu}
              isOpen={isOpen}
              user={user}
              onLogout={onLogout}
            />
            <SliderButton onClick={toggleMenu}>
              <Hamburger size={32} toggled={isOpen} closeMenu={setIsOpen} />
            </SliderButton>
          </Wrapper>

          <Navigation
            changeText={isСolor}
            isColor={isСolor}
            user={user}
            onLogout={onLogout}
          />

          <HeaderWrapButton>
            <DesktopAuthButtons user={user} onLogout={onLogout} />
            <LanguageSwitcherWrapper>
              <LanguageSwitcher />
            </LanguageSwitcherWrapper>
          </HeaderWrapButton>
        </NavigationContainer>
      </Container>
    </BlockHeader>
  );
};
