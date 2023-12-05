import React, {useState} from 'react';

function ScoreBoard({scoreJoueur1, scoreJoueur2}) {

    return (
        <>
            <div className="score-board text-center text-white mx-auto m-2">
                <div className="card p-2">
                    <div> 🫵 : {scoreJoueur1}  <span className="ligne p-4"> ❌ </span>  💻 : {scoreJoueur2}</div>
                </div>
            </div>
        </>
    );
}

export default ScoreBoard;