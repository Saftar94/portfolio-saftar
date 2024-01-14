import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../education/education";
import { servicesList } from "./servicesList";
import { theme } from "../style/theme";

const Servicesblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const ServicesHead = styled.p`
  font-weight: 500;
  font-size: 30px;
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
const ServicesUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 0;

  justify-content: space-between;
`;
const ServicesLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${theme.color.ColorText};
  padding: 34px 49px;
  border: 2px solid;
  margin-top: 30px;
  @media screen and (min-width: 480px) {
    flex-basis: ${({ flexBasis }) => flexBasis || "calc(100%/2 - 30px)"};
  }
`;

const ServicesHe = styled.h2`
  margin-bottom: 28px;
  color: ${theme.color.HeaderLogocolor};
`;
const ServicesText = styled.p`
  color: ${theme.color.ColorText};
`;

export const Services = () => {
  return (
    <Servicesblock>
      <Container>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <ServicesHead>{lang.en.Services}</ServicesHead>
        <AwardReg>{lang.en.AwardsRegion}</AwardReg>
        <ServicesUl>
          {servicesList.map((item) => (
            <ServicesLi key={item.id}>
              <ServicesHe>{item.header}</ServicesHe>
              <ServicesText>{item.about}</ServicesText>
            </ServicesLi>
          ))}
        </ServicesUl>
      </Container>
    </Servicesblock>
  );
};
