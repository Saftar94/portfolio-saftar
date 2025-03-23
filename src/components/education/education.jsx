import Container from "../container/container";
import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import { FcMindMap } from "react-icons/fc";
import { educationList } from "./educationList";
import { theme } from "../style/theme";

const Awardsblock = styled.div`
  text-align: center;
  padding-top: 40px;
`;
const AwardHead = styled.p`
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

export const AwardReg = styled.p`
  font-size: 15px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.ColorText};
  margin-bottom: 40px;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
`;
const AwardsUl = styled.ul`
display: block;
list-style: none;
display: grid;
grid-template-columns: repeat(1, 1fr);

}`;
const AwardsLi = styled.li`
  list-style-type: none;
  padding: 38px 0px;
  &:last-child {
    margin-bottom: 0;
  }

  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  transition-timing-function: cubic-bezier(0.9, 0, 0.9, 1);
  transition-duration: 350ms;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    color: red;
  }
  @media screen and (min-width: 480px) {
    padding: 38px 34px;
  }
`;

const AwardINBloLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const AwardINBloRifht = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
  width: 50%;
  margin-left: 40px;
  justify-content: space-between;
`;

const AwardsNum = styled.span`
  color: white;
  align-items: center;
  background-color: ${theme.color.ButtonColor};
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin-right: 24px;
  font-style: normal;
  font-size: 18px;
  text-align: left;
`;
const AwardsComp = styled.span`
  color: ${theme.color.ColorText};
  font-style: normal;
  font-size: 13px;
  text-align: left;
  letter-spacing: 1.18;
`;

const AwardsDire = styled.span`
  color: ${theme.color.ColorText};
  font-style: normal;
  font-size: 11px;
  text-align: left;
  letter-spacing: 1.18;
  font-weight: 200;
  margin-right: 20px;
`;
const AwardsYear = styled.span`
  color: ${theme.color.ColorText};
  font-style: normal;
  font-size: 11px;
  text-align: left;
  letter-spacing: 1.18;
  font-weight: 200;
`;

export const Education = () => {
  return (
    <Awardsblock>
      <Container>
        <FcMindMap
          style={{ marginBottom: "20px", height: "40px", width: "40px" }}
        />
        <AwardHead>{lang.en.EducationHeader}</AwardHead>
        <AwardReg>{lang.en.EducationRegion}</AwardReg>
        <AwardsUl>
          {educationList.map((item) => (
            <AwardsLi key={item.id}>
              <AwardINBloLeft>
                <AwardsNum> {item.number}</AwardsNum>
                <AwardsComp>{item.EducationName}</AwardsComp>
              </AwardINBloLeft>
              <AwardINBloRifht>
                <AwardsDire>{item.direction}</AwardsDire>
                <AwardsYear>{item.year}</AwardsYear>
              </AwardINBloRifht>
            </AwardsLi>
          ))}
        </AwardsUl>
      </Container>
    </Awardsblock>
  );
};
