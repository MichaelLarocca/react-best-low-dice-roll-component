import { useState } from "react";

function BestLowDiceRoll() {
    const [rollDice, setRollDice] = useState(0);
    const [bestDiceRoll, setBestDiceRoll] = useState(0);

    function resetDice() {
        setRollDice(0);
    }
    
    function rollDiceCounter() {
        setRollDice(prev => prev + 1);
    }

    return (
      <>
      <section className="best-low-dice-roll">
        <div className="best-low-dice-roll-inner-border">
          <div>Dice Rolls: {rollDice}</div>
        </div>
        <div className="best-low-dice-roll-inner-border">
          <div>Best Rolls: {bestDiceRoll}</div>
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