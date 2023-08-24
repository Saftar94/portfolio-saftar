import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";

const StyleUnder = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: center;
  color: #161513;
  margin-top: 35px;
  align-items: center;
  font-size: 16px;
  line-height: 91%;
  vertical-align: top;
  letter-spacing: 0.56px;
`;

export const HomePageUnder = () => {
  return (
    <StyleUnder>
      {lang.en.Creative}
      <FcMindMap
        style={{
          marginRight: "16px",
          marginLeft: "16px",
          height: "20px",
          width: "20px",
        }}
      />
      {lang.en.Development}
      <FcMindMap
        style={{
          marginRight: "16px",
          marginLeft: "16px",
          height: "20px",
          width: "20px",
        }}
      />
      {lang.en.Webflow}
    </StyleUnder>
  );
};
