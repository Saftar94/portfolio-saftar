import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";

const TextMainHead = styled.p`
  opacity: 1;
  transition: all 1s;
  &:hover {
    opacity: 1;
  }
`;
export const HeaderButtonIcon = (props) => {
  return (
    <Headerprops>
      <FcMindMap
        style={{
          marginRight: "12px",
          height: "30px",
          width: "30px",
        }}
      />
      <TextMainHead>{props.text}</TextMainHead>
    </Headerprops>
  );
};

const Headerprops = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  font-family: "Lora", serif;
  font-size: large;
  font-weight: bold;
  letter-spacing: 10.6px;
`;
