import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import Container from "../container/constainer";
import { FcMindMap } from "react-icons/fc";
import { HomePageUnder } from "./homepageUnder";
import { HomePageButton } from "./homePageButton";
import { MainPageLink } from "./mainPageLink";
import { keyframes } from "styled-components";
import { theme } from "../style/theme";
// import { Fragment } from "react";
// import { Fade } from "react-reveal";
// import BackgroundImg from '../background/backgrounStyle'

const HomePageContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 20px;
  justify-content: space-between;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

const rotateslideright = keyframes`   
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

const HomePageContainerLeft = styled.div`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    font-family: Bai Jamjuree;
    font-style: Regular;
    line-height: 64px;
    align-items: left;
    vertical-align: Top;
    letter-spacing: 0.56px;
    width: 100%;

    animation: ${rotateslideright} 0.3s ease-in-out;
  }
`;

const rotateslideLeft = keyframes`   
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;
const HomePageContainerRight = styled.div`
  display: ${(props) => props.isOpen || "none"};

  @media (min-width: 768px) {
    display: ${(props) => props.isOpen || "block"};
    width: 100%;
    overflow: hidden;
    animation: ${rotateslideLeft} 0.5s ease-in-out;
  }
`;
const HomeDivFlex = styled.div`
  display: flex;
`;

const StyleMain = styled.div`
  color: #161513;
  font-family: Bai Jamjuree;
  font-style: Regular;
  font-size: 30px;
  line-height: 47px
  align: Left;
  vertical-align: Top;
  letter-spacing: 0.56px;
 

  @media screen and (min-width: 480px){
    font-size: 53px;
    line-height: 64px;
    margin-top: 40px;
  }
`;

const Styletext = styled.p`
  color: ${theme.color.primaryColor};
`;

export const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <Container style={{ overflowX: "visible" }}>
          <HomeDivFlex>
            <HomePageContainerLeft>
              <StyleMain>
                <Styletext>{lang.en.Maintext}</Styletext>
                <Styletext>{lang.en.Maintexttwo}</Styletext>
              </StyleMain>
              <HomePageUnder />
              <HomePageButton />
            </HomePageContainerLeft>

            <HomePageContainerRight>
              <FcMindMap
                style={{
                  height: "563px",
                  width: "562px",
                }}
              />
            </HomePageContainerRight>
          </HomeDivFlex>
        </Container>
      </HomePageContainer>

      <MainPageLink />
    </>
  );
};
