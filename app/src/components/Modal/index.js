import React, {useState, useEffect} from 'react';
import StyledWrapper from './StyledWrapper';

const ModalHeader = ({title, handleClose}) => (
  <div className="modal-header">
    {title ? <div className="modal-header-title">{title}</div> : null}
    {handleClose ? (
      <div className="close cursor-pointer" onClick={handleClose ? () => handleClose() : null}>
        ×
      </div>
    ) : null}
  </div>
);

const ModalContent = ({children}) => <div className="modal-content px-4 py-6">{children}</div>;

const ModalFooter = ({handleSubmit, handleCancel}) => {
  return (
    <div className="modal-footer">
      <span className="mr-2">
        <button type="button" onClick={handleCancel} className="btn btn-sm btn-close">
          Cancel
        </button>
      </span>
      <span className="">
        <button type="submit" className="btn btn-sm btn-secondary" onClick={handleSubmit} >
          Save
        </button>
      </span>
    </div>
  );
}

const Modal = ({
  title,
  children,
  size,
  handleClose,
  handleSubmit
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
    setTimeout(() => handleClose(), 500);
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
        <ModalHeader title={title} handleClose={() => closeModal()} />
        <ModalContent>{children}</ModalContent>
        <ModalFooter handleCancel={() => closeModal()} handleSubmit={handleSubmit}/>
      </div>
      <div className="modal-backdrop" onClick={() => closeModal()} />
    </StyledWrapper>
  );
};

export default Modal;

export {ModalHeader, ModalContent};
