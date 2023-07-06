import { useState } from "react";

function BestLowDiceRoll() {
    const [currentDiceRoll, setCurrentDiceRoll] = useState(0);
    const [gameEndDiceRoll, setGameEndDiceRoll] = useState(0)
    const [gameBestDiceRoll, setGameBestDiceRoll] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
	const [gameEnded, setGameEnded] = useState(false);

    function resetDice() {
        setCurrentDiceRoll(0);
    }
    
    function rollDiceCounter() {
        setCurrentDiceRoll(prev => prev + 1);
    }

    return (
      <>
      <section className="best-low-dice-roll">
        <div className="best-low-dice-roll-inner-border">
          <div>Dice Rolls: {currentDiceRoll}</div>
        </div>
        <div className="best-low-dice-roll-inner-border">
          <div>Best Rolls: {gameBestDiceRoll}</div>
        </div>
      </section>

      <button onClick={rollDiceCounter}>
        Roll Dice
      </button>
      <button onClick={resetDice}>
        End Game
      </button>
    </>
    )
  }

  export default BestLowDiceRoll;