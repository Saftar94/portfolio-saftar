import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";
import { theme } from "../style/theme";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";

const StyleButton = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-around;
  margin-top: 35px;
`;

export const ButtonForm = styled.button`
  min-width: 126px;
  min-height: 32px;
  line-height: 1.14;
  font-size: 9px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  background: ${theme.color.ButtonColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 9px 26px;
  @media screen and (min-width: 480px){
    font-size: 12px;
  }

  &: before {
    content: "";
    border-radius: 1000px;
    width: 115%;
    height: 150%;
    border: 3px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover{
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
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

`;

export const HomePageButton = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <StyleButton>
        <ButtonForm>{lang.en.ButtonTextHome}</ButtonForm>
        <ButtonForm onClick={handleOpenModal}>{lang.en.ButtonMain}</ButtonForm>
      </StyleButton>
    </>
  );
};
