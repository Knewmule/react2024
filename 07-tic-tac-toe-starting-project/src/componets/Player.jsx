import { useState } from "react"

export default function Player({initalName,symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initalName);
    const [isEditing,setIsEditing] = useState(false);
    function handleEditing(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }
        
    }
    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption= 'Save';
    }
    return (
        <li className={isActive ? 'active' : undefined}><span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditing}>{btnCaption}</button>
          </li>
    )
}