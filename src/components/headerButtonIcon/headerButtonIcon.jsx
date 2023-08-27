import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { theme } from "../style/theme";

const Headerprops = styled.div`
  display: flex;
  align-items: center;
`;

const TextMainHead = styled.p`
  opacity: 1;
  letter-spacing: 10.6px;
  transition: all 1s;
  font-weight: 700;
  line-height: 1.19;
  font-size: 20px;
  color: ${theme.color.buttonaccentColor};
  text-decoration: none;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  @media screen and(min-width: 480px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const HeaderButtonIcon = (props) => {
  return (
    <Headerprops>
      <FcMindMap
        style={{
          marginRight: "12px",
          height: "38px",
          width: "38px",
        }}
      />
      <TextMainHead>{props.text}</TextMainHead>
    </Headerprops>
  );
};
