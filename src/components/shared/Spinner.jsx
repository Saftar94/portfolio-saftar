import React from "react";
import styled, { keyframes } from "styled-components";

// Анимация появления
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Анимация вращения
const rotate = keyframes`
  0% { transform: rotate3d(1, 1, 1, 0deg); }
  100% { transform: rotate3d(1, 1, 1, 360deg); }
`;

// Анимация мигания
const blink = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgb(15, 32, 39) 0%,
    rgb(32, 58, 67) 50%,
    rgb(44, 83, 100) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 800px;
`;

const LogoText = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 40px;
  background: linear-gradient(45deg, #3490dc, #6574cd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${blink} 2s infinite ease-in-out;
`;

// Стилизованная пирамида
const Pyramid = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 80px solid #3490dc;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate} 3s infinite linear;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px rgba(52, 144, 220, 0.7));

  &::before {
    content: "";
    position: absolute;
    left: -50px;
    bottom: -80px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 80px solid #6574cd;
    transform: rotateX(60deg) translateZ(-40px);
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    left: -50px;
    bottom: -80px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 80px solid #4299e1;
    transform: rotateY(60deg) translateZ(-40px);
    opacity: 0.8;
  }
`;

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <LogoText>Sun4S</LogoText>

        {/* Вариант 1: CSS пирамида */}
        <Pyramid />
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
