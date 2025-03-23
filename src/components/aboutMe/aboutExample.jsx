import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import Container from "../container/container";
import { FcWorkflow } from "react-icons/fc";
import { list } from "./listAboutMe";

const StyleAboutMe = styled.div`
  color: #161513;
  display: flex;
  padding-top: 60px;
  justify-content: space-between;
  margin-bottom: 120px;
  @media screen and (min-width: 768px) {
  }
`;

const StyleAboutLeft = styled.div`
  align-items: center;
`;

const StyleLeftUp = styled.div`
  align-items: center;
  display: flex;
  font-weight: 400;
  font-size: 23px;
  text-align: left;
  letter-spacing: 0.48px;
  line-height: 1.4;
`;
const StyleLeftDown = styled.div`
  font-weight: 400;
  font-size: 56px;
  text-align: left;
  letter-spacing: 0.56px;
  line-height: 1.42;
`;
const StyleSpan = styled.span`
  &: last-child {
    padding-left: 8px;
  }
  &: first-child {
    padding-right: 8px;
  }
`;
const StyleAboutRight = styled.div`
  font-style: normal;
  font-size: 31px;
  text-align: left;
  vertical-align: top;
  letter-spacing: 0.06em;
`;

const StyleTextUp = styled.p`
  font-style: normal;
  font-size: 31px;
  text-align: left;
  letter-spacing: 0.64px;
  margin-bottom: 36px;
  color: #161513;
`;

const StyleTextDown = styled.p`
  font-style: normal;
  font-size: 18px;
  text-align: left;
  letter-spacing: 0.64px;
  color: #161513;
  margin-bottom: 27px;
`;

const ListAboutMeUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ListAboutMe = styled.li``;

const ListPUp = styled.p`
  font-style: normal;
  font-size: 12px;
  text-align: left;
  letter-spacing: 1.33px;
  color: #e94d35;
  margin-bottom: 9px;
`;
const ListPDown = styled.p`
  color: black;
  font-style: normal;
  font-size: 23px;
  text-align: left;
  letter-spacing: 0.48px;
  color: #161513;
  margin-bottom: 27px;
`;

export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <Container style={{ overflowX: "visible" }}>
        <StyleAboutLeft>
          <StyleLeftUp>
            <StyleSpan>{lang.en.AboutLastName}</StyleSpan>
            <FcWorkflow
              style={{
                height: "20px",
                width: "20px",
              }}
            />
            <StyleSpan>{lang.en.AboutName}</StyleSpan>
          </StyleLeftUp>
          <StyleLeftDown>{lang.en.ProducText}</StyleLeftDown>
        </StyleAboutLeft>
        <StyleAboutRight>
          <StyleTextUp> {lang.en.AboutTextMain}</StyleTextUp>
          <StyleTextDown>{lang.en.AboutTextDown}</StyleTextDown>
          <ListAboutMeUl>
            {list.map((item) => (
              <ListAboutMe key={item.id}>
                <ListPUp>{item.firstname}</ListPUp>
                <ListPDown>{item.lastname}</ListPDown>
              </ListAboutMe>
            ))}
          </ListAboutMeUl>
        </StyleAboutRight>
      </Container>
    </StyleAboutMe>
  );
};
