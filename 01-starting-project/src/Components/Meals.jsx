import React,{useState,useEffect} from "react";

export default function Meals(){
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(()=>{
        async function fetchMeals(){

            try{
                
                    const response = await fetch('http://localhost:3000/meals')
            // if(!response.ok){
                
            // }
            const meals = await response.json();
            meals.map((v)=>{
                console.log(v)
                setLoadedMeals((e)=>{
                    e
                }
                    );
            })
            // setLoadedMeals(meals);
            console.log(loadedMeals);
                
            }catch(e){
                console.log('error'+e);
            }
        }
        fetchMeals()
    },[loadedMeals])
    return( 
        <ul id="meals">
            {
                
                loadedMeals !== undefined &&
                loadedMeals.map((meal)=>{
                    meal !== undefined &&
                    <li key={meal.id}>{meal.name}</li>
                })
            }
        </ul>
    )
}