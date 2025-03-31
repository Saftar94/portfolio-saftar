import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";
import { theme } from "../style/theme";

const StyleUnder = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: center;
  color: #161513;
  margin-top: 35px;
  align-items: center;
  font-size: 12px;
  line-height: 91%;
  vertical-align: top;
  letter-spacing: 0.56px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

const StyledTextUnder = styled.p`
  color: ${theme.color.ColorText};
`;

export const HomePageUnder = () => {
  return (
    <StyleUnder>
      <StyledTextUnder>{lang.en.Creative}</StyledTextUnder>
      <FcMindMap
        style={{
          marginRight: "16px",
          marginLeft: "16px",
          height: "20px",
          width: "20px",
        }}
      />
      <StyledTextUnder>{lang.en.Development}</StyledTextUnder>
      <FcMindMap
        style={{
          marginRight: "16px",
          marginLeft: "16px",
          height: "20px",
          width: "20px",
        }}
      />
      <StyledTextUnder>{lang.en.Webflow}</StyledTextUnder>
    </StyleUnder>
  );
};
