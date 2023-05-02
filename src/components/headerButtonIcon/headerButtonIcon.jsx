import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";

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
      {props.text}
    </Headerprops>
  );
};

const Headerprops = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
