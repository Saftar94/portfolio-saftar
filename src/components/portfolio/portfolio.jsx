import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../awards/awards";
import { portfolioList } from "./portfolioList";
import { theme } from "../style/theme";

const Protfolioblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const PortfolioHead = styled.p`
  font-weight: 500;
  font-size: 45px;
  line-height: 1.17;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.primaryColor};
  text-align: center;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

const PortfolioUl = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
}`;

const PortfolioLi = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 95px;
  padding: 38px 0;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(2n + 1) {
    color: white;
    flex-direction: row;
  }
`;
const PortfolioBlockImages = styled.div`
  margin-bottom: 0;
  transition-timing-function: cubic-bezier(0.9, 0, 0.9, 1);
  transition-duration: 350ms;
  width: 50%;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    border: solid red;
  }
`;
const PortfolioBlockDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 44px;
  justify-content: space-between;
  width: 50%;
`;

const PortfolioHedBut = styled.p`
  font-style: normal;
  font-size: 18px;
  text-align: left;
  letter-spacing: 1.44;
  color: #ffffff;
  text-align: center;
  border-radius: 1000px;
  background-color: rgb(214, 55, 46);
  padding: 12px 5px;
  align-self: flex-start;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
const PortfolioHedAbout = styled.p`
  font-style: normal;
  font-size: 30px;
  text-align: left;
  letter-spacing: 1.44;
  color: #161513;
  text-align: center;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;

const PortfolioButton = styled.a`
  backgroun: ;
  ${(props) => (props.primary ? "white" : "red")}
  font-size:1em;
  margin-top: 20px;
  padding: 0.25em 1em;
  border: 2px solid yellow;
  border-radius: 3px;
  align-self: flex-start;
  min-width: 126px;
  min-height: 32px;
  line-height: 1.14;
  font-size: 12px;
  color: ${theme.color.primaryColor};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 500;
  color: ${theme.color.secondaryColor};
  background: ${theme.color.buttonaccentColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 9px 26px;

  &: before {
    content: "";
    border-radius: 1000px;
    width: 115%;
    height: 150%;
    border: 3px solid ${theme.color.buttonaccentColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    background: ${theme.color.secondaryColor};
    color: ${theme.color.buttonaccentColor};
    transform: translateY(-6px);
  }
  &:hover:before,
  :focus:before {
    opacity: 1;
  }
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover:after,
  :focus:after {
    animation: none;
    display: none;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const Images = styled.img``;
export const Portfolio = () => {
  // const webLink = (){
  // }
  return (
    <Protfolioblock>
      <Container style={{ overflowX: "visible" }}>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <PortfolioHead>{lang.en.Project}</PortfolioHead>
        <AwardReg>{lang.en.AwardsRegion}</AwardReg>
        <PortfolioUl>
          {portfolioList.map((item) => (
            <PortfolioLi key={item.id}>
              <PortfolioBlockImages>
                <Images
                  style={{
                    borderRadius: "32%",
                    height: "100%",
                    width: "90%",
                  }}
                  src={item.image}
                  alt="Article Cover"
                />
              </PortfolioBlockImages>
              <PortfolioBlockDesc>
                <PortfolioHedBut>{item.button}</PortfolioHedBut>
                <PortfolioHedAbout>{item.about}</PortfolioHedAbout>
                <PortfolioButton href={item.link}>look</PortfolioButton>
              </PortfolioBlockDesc>
            </PortfolioLi>
          ))}
        </PortfolioUl>
      </Container>
    </Protfolioblock>
  );
};
