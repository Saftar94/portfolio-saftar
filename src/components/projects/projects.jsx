import React from "react";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import Container from "../container/container";
import { lang } from "../shared/staticText/staticText";
import { AwardReg } from "../education/education";
import { usePortfolioList } from "./projectsList";
import { theme } from "../style/theme";
import { useLanguage } from "../context/LanguageContext";

const ProjectSection = styled.div`
  text-align: center;
  margin-bottom: 120px;
  padding-top: 40px;
`;

const ProjectHead = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
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

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media screen and (max-width: 992px) {
    padding: 0 15px;
  }
`;

const ProjectItem = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 80px;
  background: rgba(30, 30, 40, 0.8);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(2n + 1) {
    flex-direction: row;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;

    &:nth-child(2n + 1) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const ProjectImageWrapper = styled.div`
  width: 50%;
  overflow: hidden;
  transition: transform 350ms cubic-bezier(0.9, 0, 0.9, 1);
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(30, 30, 40, 0.3), transparent);
  }

  @media screen and (max-width: 992px) {
    width: 100%;

    &::after {
      background: linear-gradient(
        to top,
        rgba(30, 30, 40, 0.5),
        transparent 70%
      );
    }
  }
`;

const ProjectImage = styled.img.attrs({
  loading: "lazy",
  decoding: "async",
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: space-between;
  width: 50%;
  background: rgba(22, 22, 30, 0.4);

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 25px 20px;
  }
`;

const ProjectCategory = styled.span`
  font-size: 15px;
  text-align: center;
  letter-spacing: 1.44px;
  color: #ffffff;
  background-color: ${theme.color.ButtonColor};
  padding: 8px 15px;
  border-radius: 50px;
  align-self: flex-start;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(233, 77, 53, 0.3);

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  text-align: left;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
  @media screen and (min-width: 480px) {
    font-size: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
  letter-spacing: 0.3px;
`;

const TechStack = styled.div`
  margin-bottom: 25px;
`;

const TechTitle = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  color: rgb(83, 109, 254);
  font-weight: 600;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const ProjectHighlights = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 30px;
`;

const HighlightItem = styled.li`
  font-size: 15px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  padding-left: 24px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.primary ? theme.color.ButtonColor : "rgba(255, 255, 255, 0.05)"};
  color: #ffffff;
  border: 1px solid
    ${(props) => (props.primary ? "transparent" : "rgba(255, 255, 255, 0.2)")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    background-color: ${(props) =>
      props.primary ? theme.color.ButtonColor : "rgba(255, 255, 255, 0.1)"};
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Projects = () => {
  const { language } = useLanguage();
  const text = lang[language];
  const portfolioItems = usePortfolioList();

  return (
    <ProjectSection className="content-container">
      <Container style={{ overflowX: "visible" }}>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <ProjectHead>{text.projectsTitle}</ProjectHead>
        <AwardReg>{text.projectsSubtitle}</AwardReg>

        <ProjectList>
          {portfolioItems.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectImageWrapper>
                <picture>
                  <source
                    srcSet={`${project.image3} 1x, ${project.image3} 2x`}
                    media="(max-width: 480px)"
                  />
                  <source
                    srcSet={`${project.image2} 1x, ${project.image2} 2x`}
                    media="(min-width: 481px) and (max-width: 1200px)"
                  />
                  <source
                    srcSet={`${project.image} 1x, ${project.image} 2x`}
                    media="(min-width: 1201px)"
                  />
                  <ProjectImage src={project.image} alt={project.title} />
                </picture>
              </ProjectImageWrapper>

              <ProjectDetails>
                <div>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    <TechTitle>{text.usedTechnologies}</TechTitle>
                    <TechList>
                      {project.stack.map((tech, index) => (
                        <TechTag key={index}>{tech}</TechTag>
                      ))}
                    </TechList>
                  </TechStack>

                  <ProjectHighlights>
                    <HighlightItem>{project.highlights}</HighlightItem>
                  </ProjectHighlights>
                </div>

                <ProjectLinks>
                  <LinkButton
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VscGithub /> {text.viewCode}
                  </LinkButton>
                  {project.demo && (
                    <LinkButton
                      primary
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink /> {text.viewDemo}
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectDetails>
            </ProjectItem>
          ))}
        </ProjectList>
      </Container>
    </ProjectSection>
  );
};
