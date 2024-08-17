import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect( () =>{
    console.log('Timer Set');
    const timer = setTimeout(() =>{
      onConfirm();
    },TIMER)
// Before DeleteConfirmation is removed from the dom or dismounts this anonymous function returns
// Before useEffect will run setTimeout Again & is used as a cleanup function to stop the timer
    return () =>{
      console.log('Cleaning up Timmer');
      clearTimeout(timer);
    }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
