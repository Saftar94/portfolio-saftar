import Container from "../container/constainer";
import styled from "styled-components";
import { Navigation } from "../navigation/navigation";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { ButtonForm } from "../homePage/homePageButton";
import { lang } from "../shared/staticText/staticText";

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
          <Navigation />
          <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
        </NavigationContainer>
      </Container>
    </BlockHeader>
  );
};
