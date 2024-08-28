import { useState,useEffect } from "react";

export default function QuestionTimer({timeout,onTimeout}) {
    const [remaingTime,setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        console.log("Setting Timeout");
        const timer = setTimeout(onTimeout,timeout);
        return () =>{
            clearTimeout(timer);
        }

    },[timeout,onTimeout])
    useEffect(() =>{
        console.log("setting Interval");
        const interval =   setInterval(()=>{
            setRemainingTime(prevRemaingTime => prevRemaingTime - 100);
        }, 100)
        return () => {
            clearInterval(interval);
        };
    }, []);

    
    return <progress id="question-time" max={timeout} value={remaingTime}/>;
}