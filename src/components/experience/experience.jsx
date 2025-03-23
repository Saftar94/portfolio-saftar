import Container from "../container/container";
import { experineceList } from "./experienceList";
import styled from "styled-components";
import { theme } from "../style/theme";
const ExperiendBlock = styled.div`
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

const ExperienceNumber = styled.p`
  color: ${theme.color.ButtonColor};
  font-weight: 400;
  line-height: 1.14;
  font-family: var(--text-body);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const ExperienceText = styled.p`
  color: ${theme.color.ColorText};
  font-size: 18px;
  letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

export const Experience = () => {
  return (
    <ExperiendBlock>
      <Container>
        <ExperienceUl>
          {experineceList.map((item) => (
            <ExperienceLi key={item.id}>
              <ExperienceNumber>{item.number}</ExperienceNumber>
              <ExperienceText>{item.experincetext}</ExperienceText>
            </ExperienceLi>
          ))}
        </ExperienceUl>
      </Container>
    </ExperiendBlock>
  );
};
