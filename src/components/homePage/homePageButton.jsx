import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";
import { theme } from "../style/theme";

const StyleButton = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-evenly;
  margin-top: 35px;
`;

export const ButtonForm = styled.button`
  min-width: 126px;
  min-height: 32px;
  line-height: 1.14;
  font-size: 12px;
  color: ${theme.color.primaryColor};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 500;
  color: ${theme.color.secondaryColor};
  background: ${theme.color.buttonaccentColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 9px 26px;

  &: before {
    content: "";
    border-radius: 1000px;
    width: 115%;
    height: 150%;
    border: 3px solid ${theme.color.buttonaccentColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover,
  :focus {
    background: ${theme.color.secondaryColor};
    color: ${theme.color.buttonaccentColor};
    transform: translateY(-6px);
  }
  &:hover:before,
  :focus:before {
    opacity: 1;
  }
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover:after,
  :focus:after {
    animation: none;
    display: none;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const HomePageButton = () => {
  return (
    <StyleButton>
      <ButtonForm>{lang.en.ButtonTextHome}</ButtonForm>
      <ButtonForm>{lang.en.ButtonMain}</ButtonForm>
    </StyleButton>
  );
};
