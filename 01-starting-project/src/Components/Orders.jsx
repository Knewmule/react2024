import React from "react";
import useHttp from "../hooks/useHttp";
import Button from "./UI/Button";
import Order from "./Order";
const requestConfig = {}
export default function Orders(){
    const {data: loadedOrders,
        loading: loadup,
        error: errorReport
    } = useHttp('http://localhost:3000/orders',requestConfig,[])
    
    function ord(v){
        console.log(v)
        
    }
    function handleOrder(name){
        console.log(name);
        return(
           name && <Order name={name}/>
        )
    }
    return (

        <>
 
      
        { 
            
           loadedOrders.length > 0 && 
            loadedOrders.map((v,i)=>{
                {ord(v)}
                return(
                    <Button onClick={() =>handleOrder(v.customer.name)} textOnly key={v.id}>{v.customer.name}</Button>
                )
                
            })
        }
        </>
    )
}