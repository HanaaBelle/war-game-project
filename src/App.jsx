import React, {useState} from 'react';
import GameBoard from './components/GameBoard.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

import './App.css';

function App() {
    // On ajoute un état pour gérer les scores des deux joueurs
    const [scoreJoueur1, setScoreJoueur1] = useState(0);
    const [scoreJoueur2, setScoreJoueur2] = useState(0);
  return (
    <>
        <div className="App text-black flex flex-col items-center justify-center rounded-3xl m-auto w-full min-h-screen px-4 sm:px-6 lg:px-8">
            <ScoreBoard scoreJoueur1={scoreJoueur1} scoreJoueur2={scoreJoueur2} />
            <GameBoard setScoreJoueur1={setScoreJoueur1} setScoreJoueur2={setScoreJoueur2} />
        </div>
    </>
  )
}

export default App;
