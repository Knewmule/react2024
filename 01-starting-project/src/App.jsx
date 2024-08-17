// App to allow user to select place geographically closest to them
import { useRef, useState,useEffect, useCallback } from 'react';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from './loc.js';

// This code runs first once before App component
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  const storedPlaces = storedIds.map((id) => 
      AVAILABLE_PLACES.find((place) => place.id === id)
  );
function App() {
  
  const selectedPlace = useRef();
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [availablePlaces,setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


// UseEffect is for when you run into infinte loops or you need somethingn to run after the component
// Function runs one time


  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position) =>{
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
    });
  },[])
  // modal settings on state to start or remove selected place
  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
// put selected place into localStorage and stringify the id in L.I.F.O. order with storedIds spread below it
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1){
      localStorage.setItem('selectedPlaces',JSON.stringify([id,...storedIds]));
    }
    
  }
  // Use callback whenever passing a function to a useEffect that has that function as a dependency
  // Use CAllback will store the functiton internally and use it whenever the component is rexicuted without remaking it again
  const handleRemovePlace  = useCallback(
      /* Remove the selectedPlace.current ID off thhe storedIds Stack for selectedPlaces in localStorage to undo the above function*/
    function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      setModalIsOpen(false);
      const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
      localStorage.setItem('selectedPlace', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current
      )));
    }
    // Prop or state used within the callback that changed should be a callback dependecy
  , []);

  return (
    <>
      <Modal  open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
