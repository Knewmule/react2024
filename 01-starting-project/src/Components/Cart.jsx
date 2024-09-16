import React,{useContext} from "react";
import Modal from "./UI/Modal";
import CartC from "./CartC";
import CartContext from '../store/CartContext'
import Button from './UI/Button'
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
export default function Cart(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price,
        0)

    function handleCloseCart(){
        userProgressCtx.hideCart()
    }
    function handleGoToCheckout(){
        userProgressCtx.showCheckout()
    }


    return(
        <Modal 
        className="cart"
        open={userProgressCtx.progress === 'cart'}
        onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
        >
        <h2>Your Cart</h2>
        
            
            <div>
            <CartC />
            </div>
        
            

        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button  onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && (
                <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
            )}
        
        </p>

        </Modal>
    )
}