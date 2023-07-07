import { useState, useEffect } from "react";

function BestLowDiceRoll() {
    const [currentDiceRoll, setCurrentDiceRoll] = useState(0);
    const [gameEndDiceRoll, setGameEndDiceRoll] = useState(0)
    const [gameBestDiceRoll, setGameBestDiceRoll] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
	  const [gameEnded, setGameEnded] = useState(false);
    const yourAwesomeGameName = "yourAwesomeGameName";

    function resetDice() {
        setCurrentDiceRoll(0);
    }
    
    function rollDiceCounter() {
        setCurrentDiceRoll(prev => prev + 1);
    }

    function getBestDiceRoll() {
      const storedBestDiceRoll = localStorage.getItem(`${yourAwesomeGameName}-BestDiceRoll`);
      return storedBestDiceRoll ? parseInt(storedBestDiceRoll, 10) : Infinity;
    }

    function saveBestDiceRoll(bestDiceRoll) {
      localStorage.setItem(`${yourAwesomeGameName}-BestDiceRoll`, bestDiceRoll);
    }

    function bestDiceRol() {
      if (gameEndDiceRoll < gameBestDiceRoll && gameEndDiceRoll !== 0) {
        setGameEndDiceRoll(gameEndDiceRoll);
        saveBestDiceRoll(gameEndDiceRoll);
      }
    }

    function startGame() {
      setGameStarted(true);
      setGameEnded(false);
    }

    function endGame() {
      if (!gameEnded) {
        setGameEnded(true);
        setGameStarted(false);
        setGameEndDiceRoll(currentDiceRoll);
          console.log(`gameEndDiceRoll: ${gameEndDiceRoll}`);
          console.log( `gameBestDiceRoll: ${gameBestDiceRoll}`);
        const bestDiceRoll = getBestDiceRoll();
        if (currentDiceRoll < bestDiceRoll) {
          saveBestDiceRoll(currentDiceRoll);
          setGameBestDiceRoll(currentDiceRoll);
        }
      }
    }

    useEffect(() => {
      if (gameStarted) {
        resetDice();
      }
    }, [gameStarted]);

    useEffect(() => {
      bestDiceRol();
    }, [gameEnded]);

      useEffect(() => {
    const bestDiceRoll = getBestDiceRoll();
    setGameBestDiceRoll(bestDiceRoll);
  }, []);

  useEffect(() => {
    if (gameEnded) {
      const bestDiceRoll = getBestDiceRoll();
      if (currentDiceRoll < bestDiceRoll) {
        saveBestDiceRoll(currentDiceRoll);
        setGameBestDiceRoll(currentDiceRoll);
      }
    }
  }, [gameEnded]);

    return (
      <>
      <section className="best-low-dice-roll">
        <div className="best-low-dice-roll-inner-border">
          <div>Dice Rolls: {currentDiceRoll}</div> 
        </div>
        <div className="best-low-dice-roll-inner-border">
          {/* <div>Best Rolls: {gameBestDiceRoll}</div> */}
          <div>Best Rolls: {gameBestDiceRoll === Infinity ? '---' : gameBestDiceRoll}</div>
        </div>
      </section>

      <button onClick={startGame} disabled={gameStarted}>
        Start
      </button>
      {/* <button onClick={rollDiceCounter} disabled={gameEnded}> */}
      <button onClick={rollDiceCounter} disabled={!gameStarted || gameEnded}>
        Roll Dice
      </button>
      {/* <button onClick={endGame} disabled={gameEnded}> */}
      <button onClick={endGame} disabled={!gameStarted || gameEnded}>
        End
      </button>
    </>
    )
  }

  export default BestLowDiceRoll;