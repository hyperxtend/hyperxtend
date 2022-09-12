import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const OverviewModal = ({ title, body }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="modal-button"
        variant="dark"
        onClick={handleShow}
        animation
      >
        About
      </Button>
      <Modal
        className="modal-overview"
        show={show}
        onHide={handleClose}
        centered
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
};

export default OverviewModal;
