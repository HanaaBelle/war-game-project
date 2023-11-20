import React from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <GameBoard />
            <ScoreBoard />
        </div>
      <div>
        <a href="" target="_blank">
          <img src={""} className="logo" alt="logo" />
        </a>
      </div>
      <h1>WAR GAME</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Here is <code>src/App.jsx</code>
        </p>
      </div>
    </>
  )
}

export default App;
