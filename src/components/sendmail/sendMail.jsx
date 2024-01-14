import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions";
import styled from "styled-components";
import EmailForm from "./emailInput";
const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Прозрачный черный фон */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 400px;
  max-width: 100%;
  position: relative;
  padding: 20px;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

const MailTab = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleEmailSubmit = (formData) => {
    // Логика отправки email
    console.log("Отправка email:", formData);
  };

  return (
    <>
      {isOpen && (
        <StyledModal style={{ display: isOpen ? "flex" : "none" }}>
          <ModalContent>
            <div>
              <h1>Форма для отправки письма</h1>
              <EmailForm onSubmit={handleEmailSubmit} />
            </div>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          </ModalContent>
        </StyledModal>
      )}
    </>
  );
};

export default MailTab;
