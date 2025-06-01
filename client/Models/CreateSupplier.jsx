import React from "react";
import './Windowstyle.css'

const CreateSupplier = ({isOpen,onClose,children}) => {
    return (
        <>
        {isOpen && (
       <div className="modal">
            <div className="modal-wrapper">
                <div className="modal-content">
                    <button className="modal-close-button" onClick={() => onClose()}>Закрыть</button>
                    {children}
                </div>
            </div>
        </div>
)}
        </>
    )
}

export default CreateSupplier;