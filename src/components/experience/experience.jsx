import Container from "../container/constainer";
import { experineceList } from "./experienceList";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { theme } from "../style/theme";
const ExperiendBlock = styled.div`
  padding-top: 60px;
`;
const ExperienceUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Rotate = keyframes` 
0%,
100% {
    clip-path: inset(0 0 0 95%);
}
25% {
    clip-path: inset(95% 0 0 0);
}
50% {
    clip-path: inset(0 95%  0 0);
}
75% {
    clip-path: inset(0 0 95% 0);
}

}

`;

const ExperienceLi = styled.li`
  position: relative;
  font: 300 24px/1.5 Lato, sans-serif;
  padding: 1em 1em 1em;
  text-align: center;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${theme.color.buttonaccentColor};
    transition: all 0.5s;
    animation: ${Rotate} 3s infinite linear;
  }
`;

const ExperienceNumber = styled.p`
  color: ${theme.color.buttonaccentColor};
  font-weight: 400;
  line-height: 1.14;
  font-family: var(--text-body);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const ExperienceText = styled.p`
  color: ${theme.color.primaryColor};
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
