import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";

const StyleButton = styled.div`
  color: der;
`;
export const HomePageButton = () => {
  return (
    <StyleButton>
      <ButtonForm>{lang.en.ButtonTextHome}</ButtonForm>
      <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
    </StyleButton>
  );
};

export const ButtonForm = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding: 10px;
  border-radius: 100px;
  border: 1px solid;
  width: 210px;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  &:hover,
  &:focus,
  &:active {
    color: red;
  }
  &:not(:first-child) {
    margin-left: 5px;
`;
