import React, {useState, useEffect} from 'react';
import StyledWrapper from './StyledWrapper';

const ModalHeader = ({title, handleCancel}) => (
  <div className="modal-header">
    {title ? <div className="modal-header-title">{title}</div> : null}
    {handleCancel ? (
      <div className="close" onClick={handleCancel ? () => handleCancel() : null}>
        ×
      </div>
    ) : null}
  </div>
);

const ModalContent = ({body}) => (
  <div className="modal-content">
    {body}
  </div>
);

const ModalFooter = ({confirmText, handleSubmit, handleCancel}) => {
  return (
    <div className="modal-footer">
      <span className="">
        <button type="button" onClick={handleCancel} className="btn">
          Cancel
        </button>
      </span>
      <span className="">
        <button type="submit" className="submit btn" onClick={handleSubmit} >
          {confirmText}
        </button>
      </span>
    </div>
  );
}

const ConfirmModal = ({
  size,
  title,
  body,
  confirmText,
  handleCancel,
  handleConfirm
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const escFunction = (event) => {
    const escKeyCode = 27;
    if (event.keyCode === escKeyCode) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => handleCancel(), 500);
  }

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    }
  }, []);

  let classes = 'modal';
  if (isClosing) {
    classes += ' modal--animate-out';
  }
  return (
    <StyledWrapper className={classes}>
      <div className={`modal-card modal-${size}`}>
        <ModalHeader title={title} handleCancel={() => closeModal()} />
        <ModalContent body={body}></ModalContent>
        <ModalFooter confirmText={confirmText} handleCancel={() => closeModal()} handleSubmit={handleConfirm}/>
      </div>
      <div className="modal-backdrop" onClick={() => closeModal()} />
    </StyledWrapper>
  );
};

export default ConfirmModal;

export {ModalHeader, ModalContent};
