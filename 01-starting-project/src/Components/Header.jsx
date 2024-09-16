import React,{useContext} from "react";
import logoImg from '../assets/logo.jpg';
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
    const userProgressCtx = useContext(UserProgressContext)
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((totalItems,item)=>{
        return totalItems + item.quantity
    },0)
    function handleShowCart(){
        userProgressCtx.showCart();
    }
    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg } alt={"Restuarnt Food"}/>
                <h1>React Food</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart} >{totalCartItems}</Button>
            </nav>
            
        </header>
        </>
    );
}