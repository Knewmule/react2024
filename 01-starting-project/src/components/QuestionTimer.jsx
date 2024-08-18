import { useState,useEffect } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
    const [remaingTime,setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        setTimeout(onTimeout,timeout);

    },[timeout,onTimeout])
    useEffect(() =>{
        setInterval(()=>{
            setRemainingTime(prevRemaingTime => prevRemaingTime - 100);
        }, 100)
    }, [])
    
    return <progress id="question-time" max={timeout} value={remaingTime}/>;
}