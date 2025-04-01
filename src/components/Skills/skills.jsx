import styled from "styled-components";
import Container from "../container/container";
import { theme } from "../style/theme";
import { FcMindMap } from "react-icons/fc";
import { useSkillsList, SkillsList } from "./SkilsList";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

const SkillsBlock = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-bottom: 120px;
`;

const SkillsHead = styled.p`
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

const SkillsReg = styled.p`
  font-size: 15px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.ColorText};
  margin-bottom: 40px;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
`;

const SkillsUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillsLi = styled.li`
  margin-bottom: 5px;
`;

const SkillsTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SkillsInnerText = styled.span`
  color: ${theme.color.HeaderLogocolor};
  font-weight: 500;
`;

const SkillsLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
`;

const SkillsLineInner = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${theme.color.ButtonColor};
  border-radius: 3px;
`;

const IconsTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 30px;
  color: ${theme.color.HeaderLogocolor};
`;

const IconsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const IconItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const Skills = () => {
  const skillsList = useSkillsList();
  const { language } = useLanguage();
  const text = lang[language];

  return (
    <SkillsBlock>
      <Container>
        <FcMindMap
          style={{ marginBottom: "20px", height: "40px", width: "40px" }}
        />
        <SkillsHead>{text.mySkills}</SkillsHead>
        <SkillsReg>{text.skillsTitle}</SkillsReg>

        <SkillsUl>
          {skillsList.map((item) => (
            <SkillsLi key={item.id}>
              <SkillsTextBlock>
                <SkillsInnerText>{item.skillsHead}</SkillsInnerText>
                <SkillsInnerText>{item.skillstext}</SkillsInnerText>
              </SkillsTextBlock>
              <SkillsLine>
                <SkillsLineInner width={item.width} />
              </SkillsLine>
            </SkillsLi>
          ))}
        </SkillsUl>

        <IconsTitle>{text.technologies || "Technologies"}</IconsTitle>
        <IconsGrid>
          {SkillsList.map((item) => (
            <IconItem key={item.id}>{item.svg}</IconItem>
          ))}
        </IconsGrid>
      </Container>
    </SkillsBlock>
  );
};
