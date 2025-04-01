import Container from "../container/container";
import { useExperienceList } from "./experienceList";
import styled from "styled-components";
import { theme } from "../style/theme";

const ExprienceMain = styled.div`
  margin-bottom: 60px;
  padding-top: 40px;
`;

const ExperienceUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExperienceLi = styled.li`
  position: relative;
  font: 300 24px/1.5 Lato, sans-serif;
  padding: 1em 1em 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ExperienceTextUp = styled.p`
  color: ${theme.color.ButtonColor};
  font-weight: 400;
  line-height: 1.14;
  font-family: var(--text-body);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const ExperienceTextDown = styled.p`
  color: ${theme.color.ColorText};
  font-size: 18px;
  letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

export const Experience = () => {
  const experienceList = useExperienceList();

  return (
    <ExprienceMain>
      <Container>
        <ExperienceUl>
          {experienceList.map((item) => (
            <ExperienceLi key={item.id}>
              <ExperienceTextUp>{item.number}</ExperienceTextUp>
              <ExperienceTextDown>{item.experincetext}</ExperienceTextDown>
            </ExperienceLi>
          ))}
        </ExperienceUl>
      </Container>
    </ExprienceMain>
  );
};
