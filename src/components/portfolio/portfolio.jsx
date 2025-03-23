import Container from "../container/container";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../education/education";
import { portfolioList } from "./portfolioList";
import { theme } from "../style/theme";
const Protfolioblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
  padding-top: 40px;
`;
const PortfolioHead = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.HeaderLogocolor};
  text-align: center;
  margin-bottom: 18px;
  @media screen and (min-width: 480px) {
    font-size: 35px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
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
  padding: 38px 0;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(2n + 1) {
    color: white;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 50px;
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
  padding: 22px 20px;
  justify-content: space-between;
  width: 50%;
  @media screen and (min-width: 480px) {
    padding: 22px 44px;
  }
`;

const PortfolioHedBut = styled.p`
  font-style: normal;
  font-size: 15px;
  text-align: left;
  letter-spacing: 1.44;
  color: #ffffff;
  text-align: center;
  border-radius: 1000px;
  background-color: ${theme.color.ButtonColor};
  padding: 12px 15px;
  align-self: flex-start;
  margin-bottom: 20px;

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
const PortfolioHedAbout = styled.p`
  font-style: normal;
  font-size: 20px;
  text-align: left;
  letter-spacing: 1.44;
  color: ${theme.color.HeaderLogocolor};
  text-align: center;
  text-align: left;
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;
const PortfolioButton = styled.a`
  background: ${(props) =>
    props.primary ? theme.color.ColorText : theme.color.ButtonColor};
  font-size: 1em;
  margin-top: 20px;
  padding: 0.25em 1em;
  border: 2px solid yellow;
  border-radius: 1000px; /* Предположим, что это было намеренным изменением в рамках стиля кнопки */
  align-self: flex-start;
  max-width: 1100%;
  min-height: 32px;
  line-height: 1.14;
  font-size: 12px;
  color: ${theme.color.HeaderLogocolor};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 500;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 9px 26px;

  &:before {
    content: "";
    border-radius: 1000px;
    width: 115%;
    height: 150%;
    border: 3px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
    transform: translateY(-6px);

    &:before {
      opacity: 1;
    }
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const Images = styled.picture`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px; /* Максимальная ширина по вашему медиа-запросу */
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 32px;
`;

export const Portfolio = () => {
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
        <AwardReg>{lang.en.ProjectSite}</AwardReg>
        <PortfolioUl>
          {portfolioList.map((item) => (
            <PortfolioLi key={item.id}>
              <PortfolioBlockImages>
                <Images>
                  <source
                    srcSet={`${item.image3} 1x, ${item.image3} 2x`}
                    media="(max-width: 480px)"
                  />
                  <source
                    srcSet={`${item.image2} 1x, ${item.image2} 2x`}
                    media="(min-width: 768px) and (max-width: 1200px)"
                  />
                  <source
                    srcSet={`${item.image} 1x, ${item.image} 2x`}
                    media="(min-width: 1201px)"
                  />
                  <Img src={item.image} alt="toy" />
                </Images>
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
