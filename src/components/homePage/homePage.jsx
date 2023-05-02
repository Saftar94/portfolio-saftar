import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import Container from "../container/constainer";
import { FcMindMap } from "react-icons/fc";
import { HomePageUnder } from "./homepageUnder";
import { HomePageButton } from "./homePageButton";
import { BlockIcan } from "../blockIcan/blockIcan";

const StyleMain = styled.div`
  color: #161513;
  font-family: Bai Jamjuree;
  font-style: Regular;
  font-size: 56px;
  line-height: 64px;
  line-height: 91%;
  align: Left;
  vertical-align: Top;
  letter-spacing: 0.56px;
  margin-top: 40px;
`;
const HomePageContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 20px;
  justify-content: space-between;
  padding-top: 40px;
`;
const HomePageContainerLeft = styled.div`
  padding-top: 100px;
  font-family: Bai Jamjuree;
  font-style: Regular;
  line-height: 64px;
  align-items: left;
  vertical-align: Top;
  letter-spacing: 0.56px;
`;

const HomePageContainerRight = styled.div`
  img {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;
const HomeDivFlex = styled.div`
  display: flex;
`;

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Container style={{ overflowX: "visible" }}>
        <HomeDivFlex>
          <HomePageContainerLeft>
            <StyleMain>
              {lang.en.Maintext}
              <FcMindMap
                style={{
                  marginRight: "12px",
                  marginLeft: "12px",
                  height: "40px",
                  width: "40px",
                }}
              />
              {lang.en.Maintexttwo}
            </StyleMain>
            <HomePageUnder />
            <HomePageButton />
          </HomePageContainerLeft>
          <HomePageContainerRight>
            <FcMindMap
              style={{
                //   marginRight: '12px',
                //   marginLeft: '12px',
                height: "563px",
                width: "562px",
              }}
            />
          </HomePageContainerRight>
        </HomeDivFlex>
      </Container>
      <BlockIcan />
    </HomePageContainer>
  );
};
