import { useContext } from "react";
import './Windowstyle.css'
import { Context } from "../src/main";

const CreateProduct = ({isOpen,onClose,children}) => {
    const {product} = useContext(Context)
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

export default CreateProduct;