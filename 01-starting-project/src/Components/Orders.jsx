import React from "react";
import useHttp from "../hooks/useHttp";

const requestConfig = {}
export default function Orders(){
    const {data: loadedOrders,
        loading: loadup,
        error: errorReport
    } = useHttp('http://localhost:3000/orders',requestConfig,[])
    
    function ord(){
        loadedOrders !== undefined && console.log(loadedOrders[0])
    }
    return (

        <>
      {ord()}
      
        { 
            
           loadup && loadedOrders !== undefined ||  loadedOrders.length >= 1 && 
            loadedOrders.map((v,i)=>{
                
                    { 
              
                        v[i]
                    
                    }
                
            })
        }
        </>
    )
}