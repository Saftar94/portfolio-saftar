import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
// text-shadow:
//   0 0 black,
//   0 0 green,
//   0 0 red;

// text-shadow:
//   -400px 0 tomato,
//   400px 0 yellowgreen,
//   0 0 #440492;
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
