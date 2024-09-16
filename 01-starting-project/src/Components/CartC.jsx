import React,{useContext} from "react";
import CartContext from '../store/CartContext';
import CartItem from "./CartItem";
export default function CartC(){
    const cartCtx = useContext(CartContext);

    return(
        <>
     
        
            
        {
            
                cartCtx.items.map((item)=>{
                
                    
                return(
                    <CartItem
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        onIncrease={()=>cartCtx.addItem(item)}
        onDecrease={()=>cartCtx.removeItem(item.id)}
        />
                )
            
        
    })
            
        }
    
    </>
        
    )
}