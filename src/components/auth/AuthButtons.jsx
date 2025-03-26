import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../style/theme";

// Стили для десктопной версии (в navigation.jsx)
const DesktopLogoutButton = styled.button`
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

const DesktopLoginButton = styled(Link)`
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

// Стили для мобильной версии (в navSideBar.jsx)
const MobileUserInfoSection = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const MobileUserEmail = styled.p`
  color: ${theme.color.ColorText};
  font-size: 16px;
  margin-bottom: 15px;
`;

const MobileLogoutButton = styled.button`
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

const MobileLoginButton = styled(Link)`
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

// Компоненты для десктопной навигации
export const DesktopAuthButtons = ({ user, onLogout }) => {
  if (user) {
    return (
      <DesktopLogoutButton onClick={onLogout}>
        {user?.email && <p>{user.email}</p>}
        Logout
      </DesktopLogoutButton>
    );
  }

  return <DesktopLoginButton to="/login">Login</DesktopLoginButton>;
};

// Компоненты для мобильного меню
export const MobileAuthButtons = ({ user, onLogout, onClose }) => {
  return (
    <MobileUserInfoSection>
      {user ? (
        <>
          <MobileUserEmail>
            {user.email || "User"}
            {user.isAdmin && " (Administrator)"}
          </MobileUserEmail>
          <MobileLogoutButton onClick={onLogout}>Logout</MobileLogoutButton>
        </>
      ) : (
        <MobileLoginButton to="/login" onClick={onClose}>
          Login
        </MobileLoginButton>
      )}
    </MobileUserInfoSection>
  );
};
