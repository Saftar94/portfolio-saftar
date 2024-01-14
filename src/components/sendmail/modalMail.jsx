import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";

const ModalMail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div>
          <h1>Modal window</h1>

          <p>Helllo MOdal window</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default ModalMail;
