import React,{ useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch.js';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

async function fetchSortedPlaces(){
  const places = await fetchAvailablePlaces();

        return new Promise((resolve,reject)=>{
          navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude
            );
            resolve(sortedPlaces);
            AvailablePlaces(sortedPlaces);

        })
          
          setIsFetching(false);
        })
}

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  const {isFetching,setIsFetching,error,
    fetchedData:availablePlaces, 
    setFetchedData: setAvailablePlaces} = useFetch(fetchSortedPlaces,[]);





  useEffect(() => {
    async function fetchPlaces() {
      
      setIsFetching(true);

      try {
        
        fetchSortedPlaces();
        }

       catch(error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
        setIsFetching(false);
        if (error) {
          return <Error title="An error occurred!" message={error.message} />;
        }
      }
    
    }
    fetchPlaces();
  },[]);






  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );

}
