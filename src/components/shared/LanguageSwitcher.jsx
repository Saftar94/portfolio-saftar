import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLanguage, languages } from "../context/LanguageContext";
import { FaChevronDown, FaChevronUp, FaGlobeAmericas } from "react-icons/fa";
import { theme } from "../style/theme";

// Анимация появления
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Контейнер для языкового переключателя (десктоп)
const LanguageContainer = styled.div`
  position: relative;
  margin-left: 15px;
  z-index: 1000;
`;

// Контейнер для мобильной версии
const MobileLanguageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;
  padding: 10px 0;
`;

// Выбранный язык (для десктопа)
const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  color: ${theme.color.HeaderLogocolor};
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 6px;
    font-size: 14px;
    color: ${theme.color.ButtonColor};
  }

  .arrow {
    margin-left: 6px;
    margin-right: 0;
    font-size: 10px;
    opacity: 0.7;
  }
`;

// Выпадающее меню (для десктопа)
const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  min-width: 120px;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.isOpen ? "0" : "-10px")})
    scale(${(props) => (props.isOpen ? "1" : "0.95")});
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  border: 1px solid rgba(255, 215, 0, 0.1);
`;

// Опция языка для выпадающего меню
const LanguageOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: ${(props) => (props.active ? theme.color.ButtonColor : "#fff")};
  font-size: 14px;
  padding: 10px 12px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  opacity: ${(props) => (props.active ? 1 : 0.8)};
  transition: all 0.2s ease;
  border-radius: 8px;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(3px);
  }

  &:active {
    transform: translateX(3px) scale(0.98);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

// Кнопка языка для мобильной версии
const MobileLanguageButton = styled.button`
  flex: 0 0 70px;
  background: ${(props) =>
    props.active ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(255, 215, 0, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? theme.color.ButtonColor : "#fff")};
  font-size: 13px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  padding: 8px 0;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: ${(props) =>
    props.active ? "0 3px 10px rgba(0, 0, 0, 0.2)" : "none"};
  transform: ${(props) => (props.active ? "translateY(-2px)" : "none")};

  &:hover {
    opacity: 1;
    background: ${(props) =>
      props.active ? "rgba(255, 215, 0, 0.15)" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const LanguageSwitcher = ({ isMobile = false }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => !isMobile && setIsOpen(true);
  const handleMouseLeave = () => !isMobile && setIsOpen(false);

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  // Мобильная версия - просто выводим кнопки в ряд
  if (isMobile) {
    return (
      <MobileLanguageContainer>
        {Object.values(languages).map((lang) => (
          <MobileLanguageButton
            key={lang}
            active={language === lang}
            onClick={() => handleLanguageSelect(lang)}
          >
            {lang.toUpperCase()}
          </MobileLanguageButton>
        ))}
      </MobileLanguageContainer>
    );
  }

  // Десктопная версия - с выпадающим меню
  return (
    <LanguageContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <FaGlobeAmericas />
        {language.toUpperCase()}
        {isOpen ? (
          <FaChevronUp className="arrow" />
        ) : (
          <FaChevronDown className="arrow" />
        )}
      </SelectedLanguage>

      <LanguageDropdown isOpen={isOpen}>
        {Object.values(languages).map((lang) => (
          <LanguageOption
            key={lang}
            active={language === lang}
            onClick={() => handleLanguageSelect(lang)}
          >
            {lang.toUpperCase()}
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
