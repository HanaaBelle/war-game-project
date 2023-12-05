import React, {useState} from 'react';

function ScoreBoard({scoreJoueur1, scoreJoueur2}) {

    return (
        <>
            <div className="score-board text-center text-white">
                <div className="card">
                    <div> 🫵 Score : {scoreJoueur1}</div>
                    <div> 💻 Score : {scoreJoueur2}</div>
                </div>
            </div>
        </>
    );
}

export default ScoreBoard;