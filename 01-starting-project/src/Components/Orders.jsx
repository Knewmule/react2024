import React from "react";
import useHttp from "../hooks/useHttp";

const requestConfig = {}
export default function Orders(){
    const {data: loadedOrders,
        loading: loadup,
        error: errorReport
    } = useHttp('http://localhost:3000/orders',requestConfig,[])
    
    function ord(v){
        console.log(v)
        
    }
    return (

        <>
 
      
        { 
            
           loadedOrders.length > 0 && 
            loadedOrders.map((v,i)=>{
                {ord(v)}
                return(
                    <p key={v.id}>{v.customer.name}</p>
                )
                
            })
        }
        </>
    )
}