import React,{useContext} from "react";
import Modal from './UI/Modal';
import UserProgressContext from "../store/UserProgressContext";

export default function Order({name}){
    function handleCloseOrder(){
        UserProgressCtx.hideOrder();
    }
    const UserProgressCtx = useContext(UserProgressContext)
    return (
            <p>{name}</p>
    )
}
