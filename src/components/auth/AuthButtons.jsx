import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../style/theme";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

// Анимация пульсации границы
const pulse = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.03);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.98);
  }
`;

// Анимация свечения
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
  }
`;

// Анимация волны (ripple)
const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

// Стили для десктопной версии
const DesktopLogoutButton = styled.button`
  min-width: 110px;
  min-height: 28px;
  line-height: 1.1;
  font-size: 7px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  background: ${theme.color.ButtonColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 7px 20px;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    font-size: 8px;
    min-width: 115px;
    padding: 7px 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;
    min-width: 120px;
    min-height: 30px;
  }

  &:before {
    content: "";
    border-radius: 1000px;
    width: 110%;
    height: 140%;
    border: 2px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0s;
  }

  &:hover {
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
    transform: translateY(-5px);
    animation: ${glow} 2.5s infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:hover:before {
    opacity: 1;
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(-2px);
  }

  &:active:after {
    animation: ${ripple} 0.6s ease-out;
    opacity: 1;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

// Делаем те же улучшения для кнопки логина
const DesktopLoginButton = styled(Link)`
  min-width: 110px;
  min-height: 28px;
  line-height: 1.1;
  font-size: 7px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  background: ${theme.color.ButtonColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 7px 20px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 480px) {
    font-size: 8px;
    min-width: 115px;
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;
    min-width: 120px;
    min-height: 30px;
  }

  &:before {
    content: "";
    border-radius: 1000px;
    width: 110%;
    height: 140%;
    border: 2px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0s;
  }

  &:hover {
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
    transform: translateY(-5px);
    animation: ${glow} 2.5s infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:hover:before {
    opacity: 1;
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(-2px);
  }

  &:active:after {
    animation: ${ripple} 0.6s ease-out;
    opacity: 1;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

// Применяем улучшения и для мобильных кнопок
const MobileUserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileUserEmail = styled.p`
  color: white;
  margin-bottom: 15px;
  font-size: 14px;
`;

const MobileLogoutButton = styled.button`
  min-width: 95px;
  min-height: 26px;
  line-height: 1;
  font-size: 7px;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  background: ${theme.color.ButtonColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 7px 16px;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    font-size: 8px;
    min-width: 100px;
    min-height: 28px;
  }

  &:before {
    content: "";
    border-radius: 1000px;
    width: 110%;
    height: 140%;
    border: 2px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0s;
  }

  &:hover {
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
    transform: translateY(-5px);
  }

  &:hover:before {
    opacity: 1;
  }

  &:active {
    transform: translateY(-2px);
  }

  &:active:after {
    animation: ${ripple} 0.6s ease-out;
    opacity: 1;
  }
`;

const MobileLoginButton = styled(Link)`
  min-width: 95px;
  min-height: 26px;
  line-height: 1;
  font-size: 7px;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 500;
  color: ${theme.color.HeaderLogocolor};
  background: ${theme.color.ButtonColor};
  border: none;
  border-radius: 1000px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 7px 16px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 480px) {
    font-size: 8px;
    min-width: 100px;
    min-height: 28px;
  }

  &:before {
    content: "";
    border-radius: 1000px;
    width: 110%;
    height: 140%;
    border: 2px solid ${theme.color.ButtonColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0s;
  }

  &:hover {
    background: ${theme.color.HeaderLogocolor};
    color: ${theme.color.ButtonColor};
    transform: translateY(-5px);
  }

  &:hover:before {
    opacity: 1;
  }

  &:active {
    transform: translateY(-2px);
  }

  &:active:after {
    animation: ${ripple} 0.6s ease-out;
    opacity: 1;
  }
`;

// Компоненты для десктопной навигации
export const DesktopAuthButtons = ({ user, onLogout }) => {
  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  if (user) {
    return (
      <DesktopLogoutButton onClick={onLogout}>
        {user?.email && <p>{user.email}</p>}
        {text.headerLogout || "Logout"}
      </DesktopLogoutButton>
    );
  }

  return (
    <DesktopLoginButton to="/login">
      {text.headerLogin || "Login"}
    </DesktopLoginButton>
  );
};

// Компоненты для мобильного меню
export const MobileAuthButtons = ({ user, onLogout, onClose }) => {
  // Получаем текущий язык
  const { language } = useLanguage();
  const text = lang[language];

  return (
    <MobileUserInfoSection>
      {user ? (
        <>
          <MobileUserEmail>
            {user.email || "User"}
            {user.isAdmin && " (Administrator)"}
          </MobileUserEmail>
          <MobileLogoutButton onClick={onLogout}>
            {text.headerLogout || "Logout"}
          </MobileLogoutButton>
        </>
      ) : (
        <MobileLoginButton to="/login" onClick={onClose}>
          {text.headerLogin || "Login"}
        </MobileLoginButton>
      )}
    </MobileUserInfoSection>
  );
};
