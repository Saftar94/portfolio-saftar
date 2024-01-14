import styled from "styled-components";
import { FcWorkflow } from "react-icons/fc";

const ListIcanDo = styled.li`
  display: flex;
  align-items: center;
  color: red;
  font-family: "Montserrat";
  font-size: 12px;
  line-height: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const FontStyle = styled.p`
  padding-left: 15px;
`;
export const ListIcan = ({ label, text, to }) => {
  return (
    <ListIcanDo>
      <FcWorkflow
        style={{
          height: "21px",
          width: "21px",
        }}
      />
      <FontStyle> {text}</FontStyle>
    </ListIcanDo>
  );
};
