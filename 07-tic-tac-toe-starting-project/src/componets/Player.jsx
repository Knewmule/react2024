import { useState } from "react"

export default function Player({name,symbol}){
    const [isEditing,setIsEditing] = useState(false);
    function handleEditing(){
        setIsEditing((editing) => !editing);
        
    }
    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = 'Edit';
    if (isEditing) {
        playerName = <input type="text" required defaultValue={name}/>
        btnCaption= 'Save';
    }
    return (
        <li><span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditing}>{btnCaption}</button>
          </li>
    )
}