import React from "react";
import Itemcon from "./Itemcon";
export default function Item({items,loading}){

    return(
        <>
            <Itemcon items={items} loading={loading} />
         </>
    )
}