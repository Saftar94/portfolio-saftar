import Container from "../container/constainer";
import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import { FcMindMap } from "react-icons/fc";
import { AwardsList } from "./awardsList";

const Awardsblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const AwardHead = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 45px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #161513;
  margin-bottom: 18px;
`;

export const AwardReg = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 18px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #161513;
  margin-bottom: 60px;
`;
const AwardsUl = styled.ul`
display: block;
list-style: none;
}`;
const AwardsLi = styled.li`
  list-style-type: none;
  padding: 38px 34px;
  margin-bottom: 24px;
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
`;

const AwardINBloLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AwardINBloLeIN = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const AwardINBloRifht = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
`;

const AwardsNum = styled.span`
  color: white;
  align-items: center;
  background-color: rgb(62 157 170 / 80%);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin-right: 24px;

  font-style: normal;
  font-size: 18px;
  text-align: left;
  letter-spacing: 1.18;
`;
const AwardsComp = styled.span`
  color: #161513;
  font-style: normal;
  font-size: 23px;
  text-align: left;
  letter-spacing: 1.18;
`;
const AwardsPla = styled.span`
  color: #161513;
  font-style: normal;
  font-size: 18px;
  text-align: left;
  letter-spacing: 1.18;
`;

const AwardsDire = styled.span`
  color: black;
  margin-right: 16px;
`;
const AwardsYear = styled.span`
  color: black;
`;
export const Awards = () => {
  return (
    <Container>
      <Awardsblock>
        <FcMindMap
          style={{ marginBottom: "20px", height: "40px", width: "40px" }}
        />
        <AwardHead>{lang.en.AwardsHe}</AwardHead>
        <AwardReg>{lang.en.AwardsRegion}</AwardReg>
        <AwardsUl>
          {AwardsList.map((item) => (
            <AwardsLi key={item.id}>
              <AwardINBloLeft>
                <AwardsNum> {item.number}</AwardsNum>
                <AwardINBloLeIN>
                  <AwardsComp>{item.company}</AwardsComp>
                  <AwardsPla> {item.placce}</AwardsPla>
                </AwardINBloLeIN>
              </AwardINBloLeft>
              <AwardINBloRifht>
                <AwardsDire>{item.direction}</AwardsDire>
                <AwardsYear>{item.year}</AwardsYear>
              </AwardINBloRifht>
            </AwardsLi>
          ))}
        </AwardsUl>
      </Awardsblock>
    </Container>
  );
};
