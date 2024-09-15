import React,{useContext} from "react";
import logoImg from '../assets/logo.jpg';
import CartContext from "../store/CartContext";
export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((totalItems,item)=>{
        return totalItems + item.quantity
    },0)
    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg } alt={"Restuarnt Food"}/>
                <h1>React Food</h1>
            </div>
            <nav>
                <button>{totalCartItems}</button>
            </nav>
            
        </header>
        </>
    );
}