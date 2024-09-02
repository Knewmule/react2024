
import React,{useState,useEffect} from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places');
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(()=>{
    async function fetchPlaces(){
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }

    fetchPlaces();
    //   fetch('http://localhost:3000/places')
    // .then((response) => {
    //   return response.json()
    // })
    // .then((resData) => {
    //   setAvailablePlaces(resData.places);
    // });
  },[])

  // const response = await fetch('http://localhost:3000/places')
  return (
    <Places
      title={availablePlaces.title}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
