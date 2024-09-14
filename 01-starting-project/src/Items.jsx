import React,{useState,useEffect} from "react";
import Item from './Item'
import { fetchItems } from "./http";
export default function Items(){

    const [items,setItems] = useState([{}])
    const [fetching,setFetching] = useState(false);
    useEffect(()=>{
        async function fetchI(){
            
            try{
                setFetching(true)
                const i = await fetchItems();
                setItems(i)
                setFetching(false);
            }catch(e){
                console.log(e)
            }
        }
        fetchI()
    },[items])


    return(
        fetching && <Item loading={fetching}items={items}/>
   
    )
}