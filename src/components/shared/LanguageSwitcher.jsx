import React from "react";
import styled from "styled-components";
import { useLanguage, languages } from "../context/LanguageContext";

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.active ? "#3490dc" : "#fff")};
  font-size: 14px;
  padding: 5px 8px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <LanguageContainer>
      {Object.values(languages).map((lang) => (
        <LanguageButton
          key={lang}
          active={language === lang}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </LanguageButton>
      ))}
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
