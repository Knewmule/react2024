import React,{useState,useEffect} from 'react';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export function usePlace(fetchAvailFn){
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();
  

    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
    
          try {
            const places = await fetchAvailablePlaces();
    
            navigator.geolocation.getCurrentPosition((position) => {
              const sortedPlaces = sortPlacesByDistance(
                places,
                position.coords.latitude,
                position.coords.longitude
              );
              setAvailablePlaces(sortedPlaces);
              setIsFetching(false);
            });
          } catch (error) {
            setError({
              message:
                error.message || 'Could not fetch places, please try again later.',
            });
            setIsFetching(false);
          }
        }
    
        fetchPlaces();
      }, [fetchAvailFn]);
      return {
        fetchAvailablePlaces,
        error,
        availablePlaces,
        isFetching
      }
}