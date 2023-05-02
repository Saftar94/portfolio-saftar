import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../awards/awards";
import { servicesList } from "./servicesList";

const Servicesblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const ServicesHead = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 45px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #161513;
  margin-bottom: 18px;
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
  flex-basis: ${({ flexBasis }) => flexBasis || "calc(100%/2 - 30px)"};

  padding: 34px 49px;
  border: 2px solid;
  margin-top: 30px;
`;

const ServicesHe = styled.h2`
  margin-bottom: 28px;
`;
const ServicesText = styled.p``;

export const Services = () => {
  return (
    <Container>
      <Servicesblock>
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
      </Servicesblock>
    </Container>
  );
};
