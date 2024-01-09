import { useState } from "react";
const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];
export default function GameBoard( {onSelectSquare, turns}) {
    // const [gameBoard,setGameBoard] = useState(initalGameBoard);

    let gameBoard = initalGameBoard;

    for (const turn of turns){
        const {square, player} = turn;
        const { row, col} = square;

        gameBoard[row][col] = player;
    }

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = turns;
    //         return updatedBoard;

    //     });
    //     onSelectSquare();
    // }

    return (<ol id="game-board">
        {gameBoard.map((row,rowIndex) =>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex,colIndex)} 
                            disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
                )   
            )}
            </ol>
            );
}
    
