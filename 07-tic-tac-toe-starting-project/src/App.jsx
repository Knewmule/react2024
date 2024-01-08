import Player from "./componets/Player"
import GameBoard from "./componets/GameBoard"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player initalName="Player 1" symbol="X"/>
            <Player initalName="Player 2" symbol="0"/>
        </ol> 

        <GameBoard />
      </div>

      LOG
    </main>
  )
}

export default App
