import React, { useState } from 'react'

const numDice = 5
const numRolls = 3

function Game() {
  const [gameState, setGameState] = useState({
    dice: Array.from({ length: numDice }),
    locked: Array(numDice).fill(false),
    rollsLeft: numRolls,
    rolling: false,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined
    }
  })
}

function App() {
  return (
    <div>
      <h1>React Yahtzee</h1>
      <div>Score Card here</div>
      <div>Game board here</div>
    </div>
  );
}

export default App;
