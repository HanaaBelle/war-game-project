import React, {useState} from 'react';

function ScoreBoard({scoreJoueur1, scoreJoueur2}) {

    return (
        <>
            <div className="score-board text-center text-white">
                <div className="card">
                    <div>Score Joueur 1 : {scoreJoueur1}</div>
                    <div>Score Joueur 2 : {scoreJoueur2}</div>
                    <button>
                        Score is {}
                    </button>
                </div>
            </div>
        </>
    );
}

export default ScoreBoard;