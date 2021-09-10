import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
    return (
        <div className="modal-content">
            <p>{modalContent}</p>
        </div>
    );
};

export default Modal;
