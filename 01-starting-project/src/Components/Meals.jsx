import React,{useState,useEffect} from "react";
import useHttp  from "../hooks/useHttp";
import MealItem from "./MealItem";
export default function Meals(){
    // const [loadedMeals, setLoadedMeals] = useState([])
    const {data:loadedMeals,
        loading: loadup,
        error: errorReport
    } = useHttp('http://localhost:3000/meals')
            
    // useEffect(()=>{
    //     async function fetchMeals(){

    //         try{
                
                    
    //         console.log(loadedMeals);
                
    //         }catch(e){
    //             console.log('error'+e);
    //         }
    //     }
    //     fetchMeals()
    // },[])
    function mh (meal){
        console.log(meal);
    }
    if(loadup){
        return <p> Please Wait</p>
    }
    if(errorReport){
        return <p>{errorReport}</p>
    }
    function sw(){
         loadup || !loadedMeals.map((meal)=>{
            {mh(meal.name)}
           return   <MealItem key={meal.id} meal={meal}/>
        })
    }
    return( 
        <ul id="meals">
            {
                
               sw()
               
                
            }
        </ul>
    )
}