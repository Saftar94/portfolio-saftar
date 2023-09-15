import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
const BlockHelp = styled.div`
  position: fixed;
  top: 40vh;
  right: 0;
  z-index: 1000;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => props.isShow || "0"};
`;
const ButtonScrollUP = styled.button`
  position: relative;
  border-style: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 50%;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: rgb(214, 55, 46);
  border-radius: 40%;
  color: white;
`;

export const HelpSection = () => {
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
            marginRight: "12px",
            height: "38px",
            width: "38px",
          }}
        />
      </ButtonScrollUP>
    </BlockHelp>
  );
};
