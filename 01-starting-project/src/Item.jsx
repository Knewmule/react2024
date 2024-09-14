import React from "react";

export default function Item({items,loading}){

    return(
        <div id="title">
            
            {
                
                loading !== undefined && 
                items === true && 
                items.length === 0 && 
                <p>Loading up</p> 
                }
            {
                loading !== undefined && 
                loading === false && 
                items.length === 0 && 
                <p>Loading up</p> 
                }
                {
                loading !== undefined && 
                loading === false && 
                items.length >0 && 
                items.length === 0 && 
                items.map((v)=>{

                    return(
                        <img key={items.id} src={`http://localhost:3000/${v.image}`} />
                    )
                })
            }
        </div>
    )
}