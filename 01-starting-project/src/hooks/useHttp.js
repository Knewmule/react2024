import React,{useState,useEffect,useCallback} from "react";
 async function fetchItems(url){
    const item = await fetch(url);
    const res = await item.json()
    if(!item.ok){
        return new Error('Faild to fetch meals')
    }
    return res
}

export default function useHttp(url){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const sendRequest = useCallback(
        async function sendRequest(){
            setLoading(true);
            try{

                const resdata = await fetchItems(url)
                setData(resdata);
                
            }catch(e){
                console.log(e);
                setError(e);
                
            }
            setLoading(false);
        },[url]
    );
    useEffect(()=>{
        sendRequest()
    },[])
    return {
        data,
        loading,
        error
    }
}