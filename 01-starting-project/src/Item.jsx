import React from "react";

export default function Item({items,loading}){

    return(
        <div id="title">
            {
                loading && items.length === 0 && 
                <p>Loading up</p> 
                }
            {
                loading !== undefined && !loading && items.length === 0 && 
                <p>Loading up</p> 
                }
                {
                !loading && items.length >0 && 
                items.length === 0 && 
                items.map((v)=>{

                    return(
                        <img src={`http://localhost:3000/${v.image}`} />
                    )
                })
            }
        </div>
    )
}