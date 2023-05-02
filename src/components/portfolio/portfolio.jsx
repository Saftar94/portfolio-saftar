import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../awards/awards";
import { portfolioList } from "./portfolioList";

const Protfolioblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const PortfolioHead = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 45px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #161513;
  margin-bottom: 18px;
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
`;

const PortfolioHedBut = styled.p`
  font-style: normal;
  font-size: 18px;
  text-align: left;
  letter-spacing: 1.44;
  color: #ffffff;
  text-align: center;
  background-color: rgba(62, 157, 170, 0.8);
  padding: 12px 5px;
  align-self: flex-start;
`;
const PortfolioHedAbout = styled.p`
  font-style: normal;
  font-size: 45px;
  text-align: left;
  letter-spacing: 1.44;
  color: #161513;
  text-align: center;
  text-align: left;
`;

const PortfolioButton = styled.button`
  backgroun: ;
  ${(props) => (props.primary ? "white" : "red")}
  font-size:1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid yellow;
  border-radius: 3px;
  align-self: flex-start;
`;
export const Portfolio = () => {
  return (
    <Container>
      <Protfolioblock>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <PortfolioHead>{lang.en.Portfolio}</PortfolioHead>
        <AwardReg>{lang.en.AwardsRegion}</AwardReg>
        <PortfolioUl>
          {portfolioList.map((item) => (
            <PortfolioLi key={item.id}>
              <PortfolioBlockImages>
                <img
                  style={{
                    borderRadius: "32%",
                    height: "307px",
                    width: "460px",
                  }}
                  src={item.image}
                  alt="Article Cover"
                />
              </PortfolioBlockImages>
              <PortfolioBlockDesc>
                <PortfolioHedBut>{item.button}</PortfolioHedBut>
                <PortfolioHedAbout>{item.about}</PortfolioHedAbout>
                <PortfolioButton>Read More</PortfolioButton>
              </PortfolioBlockDesc>
            </PortfolioLi>
          ))}
        </PortfolioUl>
      </Protfolioblock>
    </Container>
  );
};
