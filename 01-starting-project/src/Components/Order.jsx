import React,{useContext} from "react";
import Modal from './UI/Modal';
import UserProgressContext from "../store/UserProgressContext";

export default function Order({name}){
    function handleCloseOrder(){
        UserProgressCtx.hideOrder();
    }
    const UserProgressCtx = useContext(UserProgressContext)
    return (
        <Modal open={UserProgressCtx.progress === 'order'}
        className="cart"
        onClose={UserProgressCtx.progress === 'order' ? handleCloseOrder : null }
        >
            <p className="modal-actions">{name}</p>
        </Modal>
    )
}
