import React from 'react';

import Modal from 'react-bootstrap/Modal';
function CheckOutModal(props) {
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
            Thank you for purchasing our product<br/>
            Continue Shopping with us 😜
            </p>
        </Modal.Body>
        <div className="modal-footer">
            {/* <a href="/carts" style={{textDecoration:'none'}}>
            <div className="modal-btn-1" type="button">
                <span>Proceed to Cart</span>
            </div>
            </a> */}
            <div onClick={props.onHide} className="contactModal-btn" type="button">
                <span>Continue Shopping</span>
            </div>
        </div>
            
        </Modal>
    );
}

export default CheckOutModal;