import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { theme } from "../style/theme";

const BlockHelp = styled.div`
  position: fixed;
  top: 80vh;
  right: 20px; /* Уменьшил отступ для лучшей адаптации */
  z-index: 1000;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) =>
    props.isShow ? "1" : "0"}; /* Изменил условие для оптимизации */

  @media screen and (min-width: 768px) {
    top: 70vh; /* Изменил отступ для планшета и компьютера */
    right: 30px; /* Изменил отступ для планшета и компьютера */
  }

  @media screen and (min-width: 1024px) {
    top: 60vh; /* Изменил отступ для компьютера с большим экраном */
    right: 40px; /* Изменил отступ для компьютера с большим экраном */
  }
`;

const ButtonScrollUP = styled.button`
  position: relative;
  border-style: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 50%;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: ${theme.color.ButtonColor};
  border-radius: 40%;
  color: white;

  @media screen and (min-width: 768px) {
    width: 50px; /* Изменил размер кнопки для планшета и компьютера */
    height: 50px; /* Изменил размер кнопки для планшета и компьютера */
  }

  @media screen and (min-width: 1024px) {
    width: 60px; /* Изменил размер кнопки для компьютера с большим экраном */
    height: 60px; /* Изменил размер кнопки для компьютера с большим экраном */
  }
`;

export const ScrollUpButton = () => {
  const [isShow, setIsOpen] = useState(false);
  const ref = useRef(null);

  const scrollShow = () => {
    if (window.scrollY >= 80) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  window.addEventListener("scroll", scrollShow);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <BlockHelp schroolShow={scrollShow} isShow={isShow} ref={ref}>
      <ButtonScrollUP onClick={scrollToTop}>
        <FaArrowUp
          style={{
            height: "28px",
            width: "28px",
          }}
        />
      </ButtonScrollUP>
    </BlockHelp>
  );
};
