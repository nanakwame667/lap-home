import React from 'react';

import Modal from 'react-bootstrap/Modal';

import './contactModal.css';
function ContactModal(props) {
    return (
        <Modal
        {...props}
        size="ml"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animated={true}
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <p>
            Thank you for getting in touch 🙏
            </p>
        </Modal.Body>
        <div className="modal-footer">
            <div onClick={props.onHide} className="contactModal-btn" type="button">
                <span>Continue Shopping</span>
            </div>
        </div>
            
        </Modal>
    );
}

export default ContactModal;