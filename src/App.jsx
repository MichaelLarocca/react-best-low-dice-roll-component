import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <section className="best-low-dice-roll">
      <div className="best-low-dice-roll-inner-border">
        <div>Dice Rolls: 25</div>
      </div>
      <div className="best-low-dice-roll-inner-border">
        <div>Best Dice Rolls: 12</div>
      </div>
    </section>
    <button>
      Start Game
    </button>
    <button>
      End Game
    </button>
  </>
  )
}

export default App
