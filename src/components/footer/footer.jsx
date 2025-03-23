import Container from "../container/container";
import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import { FooterList } from "./footerList";

import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { theme } from "../style/theme";
const Footerblock = styled.footer`
  padding: 60px 0px;
  background: ${(props) => props.isColor || theme.color.HeaderSlidecolor};
`;
const FooterBlockIn = styled.div`
  display: block;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterLeftblock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const LeftText = styled.p`
  font-style: normal;
  font-size: 10px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.ColorText};
  margin-top: 20px;
  text-align: center;
`;

const FooterRighttblock = styled.div`
  text-align: centr;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FooterUpUl = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    align-items: baseline;
    margin-bottom: 60px;
  }
`;
const FooterUpli = styled.li`
  font-style: normal;
  font-size: 14px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #ffff;
  margin-bottom: 9px;
  &:last-child {
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const FooterSvgUl = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
const FooterSvgli = styled.li`
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5px;
  margin-left: 16px;
  &:first-child {
    margin-left: 0px;
  }
`;
const FooterSocialLink = styled.a`
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5px;
`;

export const Footer = (props) => {
  return (
    <Footerblock>
      <Container>
        <FooterBlockIn>
          <FooterLeftblock>
            <HeaderText />
          </FooterLeftblock>
          <FooterRighttblock>
            <FooterUpUl>
              {FooterList.map((item) => (
                <FooterUpli key={item.id}>{item.header}</FooterUpli>
              ))}
            </FooterUpUl>
          </FooterRighttblock>
        </FooterBlockIn>
        <FooterSvgUl>
          {FooterList.map((item) => (
            <FooterSvgli key={item.id}>
              <FooterSocialLink href={item.link}>{item.svg}</FooterSocialLink>
            </FooterSvgli>
          ))}
        </FooterSvgUl>
        <LeftText>{lang.en.FooterLefttext}</LeftText>
      </Container>
    </Footerblock>
  );
};
