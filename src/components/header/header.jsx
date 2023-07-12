import Container from "../container/constainer";
import styled from "styled-components";
import { Navigation } from "../navigation/navigation";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { ButtonForm } from "../homePage/homePageButton";
import { lang } from "../shared/staticText/staticText";
import { FaBars } from "react-icons/fa";

// @media screen and (min-width: 768px) {

// }
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
const HeaderNavButton = styled.button`
  top: 0px;
  left: 0px;
  width: 100%;
  padding-top: 27px;
  padding-bottom: 27px;
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    opacity: ${(props) => props.isOpen || "0"};
    display: none;
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

export const Header = ({ isOpen }) => {
  return (
    <BlockHeader isOpen={isOpen}>
      <Container style={{ overflowX: "visible" }}>
        <NavigationContainer>
          <HeaderText />

          <HeaderNavButton>
            <FaBars style={{ height: "32px", width: "32px" }} />
          </HeaderNavButton>
          <Navigation />

          <HeaderWrapButton>
            <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
          </HeaderWrapButton>
        </NavigationContainer>
      </Container>
    </BlockHeader>
  );
};
