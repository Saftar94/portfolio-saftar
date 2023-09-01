import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { FooterList } from "./footerList";

const Footerblock = styled.footer`
  padding: 70px 25px;
  background-color: black;
`;
const FooterBlockIn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLeftblock = styled.div`
  text-align: left;
`;
const LeftText = styled.p`
  color: white;
`;

const FooterRighttblock = styled.div`
  text-align: centr;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterUpUl = styled.ul`
  display: flex;
`;
const FooterUpli = styled.li`
  color: white;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 16px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #ffff;
  margin-bottom: 18px;

  margin-left: 46px;
  &:last-child {
    margin-left: 0px;
  }
`;
const FooterSvgUl = styled.ul`
  display: flex;
  justify-content: end;
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

export const Footer = () => {
  return (
    <Footerblock>
      <Container>
        <FooterBlockIn>
          <FooterLeftblock>
            <FcMindMap
              style={{
                marginBottom: "60px",
                height: "32px",
                width: "32px",
              }}
            />
            {lang.en.Headername}

            <LeftText>{lang.en.FooterLefttext}</LeftText>
          </FooterLeftblock>
          <FooterRighttblock>
            <FooterUpUl>
              {FooterList.map((item) => (
                <FooterUpli key={item.id}>{item.header}</FooterUpli>
              ))}
            </FooterUpUl>
            <FooterSvgUl>
              {FooterList.map((item) => (
                <FooterSvgli key={item.id}>
                  <FooterSocialLink>{item.svg}</FooterSocialLink>
                </FooterSvgli>
              ))}
            </FooterSvgUl>
          </FooterRighttblock>
        </FooterBlockIn>
      </Container>
    </Footerblock>
  );
};
