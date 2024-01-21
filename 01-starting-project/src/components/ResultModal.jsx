import {forwardRef, useImperativeHandle,useRef} from 'react';
import { createPortal } from 'react-dom';
const ResultModal = forwardRef(function ResultModal({onReset,targetTime,remainingTime},ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemaningTime = (remainingTime/1000).toFixed(2);
    useImperativeHandle(ref, ()=>{
        return{
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>You Lost</h2>}
            <p>The target time was <strong>{targetTime}</strong></p>
            <p>You stopped the timer with <strong> {formattedRemaningTime} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});
export default ResultModal;