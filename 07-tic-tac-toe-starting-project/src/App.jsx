import Player from "./componets/Player";
import GameBoard from "./componets/GameBoard";
import Log from "./componets/Log";
import { useState } from "react";
import {WINNING_COMBINATIONS} from './winning-combinations';

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initalGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function App() {
  
const [gameTurns, setGameTurns] = useState([]);
// const [activePlayer,setActivePlayer] = useState('X');


const activePlayer = deriveActivePlayer(gameTurns);

let gameBoard = initalGameBoard;
let winner ;
for (const turn of gameTurns){
    const {square, player} = turn;
    const { row, col} = square;

    gameBoard[row][col] = player;
}

for (const combinations of  WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
  const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
  const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

  if (firstSquareSymbol 
    && firstSquareSymbol === secondSquareSymbol 
    && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol;
  }

}

function handleSelectSquare(rowIndex, colIndex){
  // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns(prevTurns =>{
    const currentPlayer = deriveActivePlayer(prevTurns);
    const updatedTurns = [
      {square:{row: rowIndex, col: colIndex}, player: currentPlayer},
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
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
