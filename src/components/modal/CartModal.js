import React from 'react';

import Modal from 'react-bootstrap/Modal';

import { useHistory } from 'react-router';

import './CartModal.css';
function CartModal(props) {
    const history=useHistory();
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
            Your Item Has Been Added to Cart 🐼
            </p>
        </Modal.Body>
        <div className="modal-footer">
            <div className="modal-btn-1" type="button" onClick={()=>history.push('/carts')}>
                <span>Proceed to Cart</span>
            </div>
            <div onClick={props.onHide} className="modal-btn" type="button">
                <span>Add More</span>
            </div>
        </div>
            
        </Modal>
    );
}

export default CartModal;