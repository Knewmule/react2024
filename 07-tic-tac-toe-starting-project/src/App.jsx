import Player from "./componets/Player";
import GameBoard from "./componets/GameBoard";
import Log from "./componets/Log";
import { useState } from "react";
function App() {
  
const [gameTurns, setGameTurns] = useState([]);
const [activePlayer,setActivePlayer] = useState('X');
function handleSelectSquare(rowIndex, colIndex){
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns(prevTurns =>{
    let currentPlayer = 'X';

    if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
      currentPlayer = 'O';
    }
    const updatedTurns = [
      {square:{row: rowIndex, col: colIndex}, player: activePlayer},
      ...prevTurns
    ];
      return updatedTurns;
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initalName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol> 

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

      <Log />
    </main>
  )
}

export default App
