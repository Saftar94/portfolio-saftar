import styled, { keyframes } from "styled-components";
import Container from "../container/container";
import { FcWorkflow } from "react-icons/fc";
import { list } from "./listAboutMe";
import { theme } from "../style/theme";
import aboutSaftar from "../image&svg/imgae/aboutSaftar.jpg";

// Анимация биения сердца
const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.18);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1);
  }
`;

const StyleAboutMe = styled.section`
  color: ${theme.color.HeaderLogocolor};
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  background: ${theme.color.backgroundColor};
`;

const StyleAboutContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 1200px;
  gap: 50px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyleAboutLeft = styled.div`
  flex: 1;
`;

const StyleLeftDown = styled.h1`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 20px;
  color: ${theme.color.HeaderLogocolor};
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyleProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  animation: ${heartbeat} 2s infinite;

  &:hover {
    animation-play-state: paused; // При наведении останавливаем анимацию
    transform: scale(1.05);
  }

  @media screen and (max-width: 992px) {
    width: 250px;
    height: 250px;
  }
`;

const StyleTextUp = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  line-height: 1.4;
  margin-bottom: 20px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: ${theme.color.accentColor};
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const StyleTextDown = styled.p`
  font-size: 18px;
  letter-spacing: 0.64px;
  margin-bottom: 27px;
  line-height: 1.6;
`;

const ListAboutMeUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

const ListAboutMe = styled.li`
  flex: 1;
  min-width: 180px;
`;

const ListPUp = styled.p`
  font-size: 12px;
  letter-spacing: 1.33px;
  color: ${theme.color.accentColor || "#e94d35"};
  margin-bottom: 9px;
  text-transform: uppercase;
  font-weight: 600;
`;

const ListPDown = styled.p`
  color: ${theme.color.textColor};
  font-size: 23px;
  letter-spacing: 0.48px;
  margin-bottom: 27px;
`;

export const AboutMe = () => {
  // Просто используем текст напрямую без переводов
  const defaultDescription = `I'm a passionate frontend developer specializing in building interactive, high-performance 
web applications using React.js, and modern UI/UX principles. My focus is on creating 
seamless user experiences through clean code, component-based architecture, and cutting-edge 
technologies like styled-components, Tailwind CSS, and Firebase.

I believe that great web applications are a fusion of elegant design, scalability, 
and optimized performance.`;

  return (
    <StyleAboutMe>
      <Container>
        <StyleAboutContent>
          <StyleProfileImage src={aboutSaftar} alt="Profile" />
          <StyleAboutLeft>
            <StyleLeftDown>
              <FcWorkflow
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
              Frontend Developer
            </StyleLeftDown>
            <StyleTextUp>
              Building modern web applications with React and innovation
            </StyleTextUp>
            <StyleTextDown>{defaultDescription}</StyleTextDown>
            <SkillTags>
              <SkillTag>React</SkillTag>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>Node.js</SkillTag>
              <SkillTag>Firebase</SkillTag>
            </SkillTags>
            <ListAboutMeUl>
              {list.map((item) => (
                <ListAboutMe key={item.id}>
                  <ListPUp>{item.firstname}</ListPUp>
                  <ListPDown>{item.lastname}</ListPDown>
                </ListAboutMe>
              ))}
            </ListAboutMeUl>
          </StyleAboutLeft>
        </StyleAboutContent>
      </Container>
    </StyleAboutMe>
  );
};
