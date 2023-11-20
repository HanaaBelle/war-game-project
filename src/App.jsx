import React, { useState }  from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-200">
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
