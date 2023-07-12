import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";
import { keyframes } from "styled-components";

const StyleButton = styled.div`
  color: red;
`;

const ring = keyframes`    0% {
  width: 30px;
  height: 30px;
  opacity: 1;
}
100% {
  width: 300px;
  height: 300px;
  opacity: 0;

}`;
export const ButtonForm = styled.button`
  min-width: 126px;
  min-height: 42px;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 400;
  color: rgb(49, 49, 51);
  background: linear-gradient(
    90deg,
    rgb(129, 230, 217) 0%,
    rgb(79, 209, 197) 100%
  );
  border: none;
  border-radius: 1000px;
  box-shadow: rgba(79, 209, 197, 0.64) 12px 12px 24px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 9px 26px;

  &: before {
    content: "";
    border-radius: 1000px;
    min-width: calc(180px + 12px);
    min-height: calc(60px + 12px);
    border: 3px solid #00ffcb;
    box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover,
  :focus {
    color: #313133;
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
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
  }

  &:hover:after,
  :focus:after {
    animation: none;
    display: none;
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
