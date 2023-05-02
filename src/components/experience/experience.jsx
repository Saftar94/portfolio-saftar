import Container from "../container/constainer";
import { experineceList } from "./experienceList";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ExperiendBlock = styled.div`
  color: black;
  margin-bottom: 120px;
`;
const ExperienceUl = styled.ul`
  display: flex;
  position: relative;
`;

const rotate = keyframes` 
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
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #020024;
    transition: all 0.5s;
    animation: ${rotate} 3s infinite linear;
  }
`;

const ExperienceNumber = styled.p`
  color: blue;
`;

const ExperienceText = styled.p``;
export const Experience = () => {
  return (
    <Container>
      <ExperiendBlock>
        <ExperienceUl>
          {experineceList.map((item) => (
            <ExperienceLi key={item.id}>
              <ExperienceNumber>{item.number}</ExperienceNumber>
              <ExperienceText>{item.experincetext}</ExperienceText>
            </ExperienceLi>
          ))}
        </ExperienceUl>
      </ExperiendBlock>
    </Container>
  );
};
