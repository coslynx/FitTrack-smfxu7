import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import Button from '../Button';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  content: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
  onConfirm,
}) => {
  const [isOpenState, setIsOpen] = useState(isOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const StyledModal = styled(Modal)`
    .MuiModal-root {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      inset: 0;
      backgroundColor: rgba(0, 0, 0, 0.5);
    }

    .MuiPaper-root {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      max-width: 600px;
      width: 100%;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .modal-title {
      font-size: 20px;
      font-weight: bold;
    }
  `;

  return (
    <StyledModal
      open={isOpenState}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="MuiPaper-root">
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
          <Button variant="text" color="primary" onClick={closeModal}>
            Close
          </Button>
        </div>
        <div id="modal-description" className="modal-content">
          {content}
        </div>
        {onConfirm && (
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Confirm
          </Button>
        )}
      </div>
    </StyledModal>
  );
};

export default ModalComponent;