import React, {useEffect, useState} from 'react';
import {compareCards, createDeck, distributeCards, shuffleDeck} from './GameLogic.js';

// La fonction GameBoard(setScoreJoueur1, setScoreJoueur2) affiche les decks des joueurs et gére les clics sur les decks
function GameBoard({setScoreJoueur1, setScoreJoueur2}) {

    // État pour stocker les decks des joueurs
    const [decks_des_joueurs, set_decks_des_joueurs] =
        // useState est utilisé pour créer un état "decks_des_joueurs" qui stocke les decks des deux joueurs
        // (joueur_1 et joueur_2)
        useState({joueur_1: [], joueur_2: []});

    // useEffect est un hook qui s'exécute après le rendu du composant "GameBoard"
    // Il encapsule la logique de création, de mélange et de distribution du deck
    useEffect(() => {

        // Un nouveau deck est créé et mélangé à l'intérieur du "useEffect"
        let deck = createDeck();

        // Mélanger le deck et le distribuer entre les deux joueurs
        shuffleDeck(deck);

        // La fonction "distributeCards" renvoie un tableau de deux éléments, qui sont ensuite décomposés en
        // "deck_joueur_1" et "deck_joueur_2"
        const [deck_du_joueur_1, deck_du_joueur_2] = distributeCards(deck);

        // Mettre à jour l'état avec les "decks des joueurs" en déclenchant un nouveau rendu du composant avec les
        // données mises à jour
        set_decks_des_joueurs({joueur_1: deck_du_joueur_1, joueur_2: deck_du_joueur_2});

    }, []); // Le tableau de dépendances vides signifie que cet effet ne s'exécute qu'une seule fois, juste après
    // le premier rendu du composant

    // Chemin vers l'image du dos de carte
    const dosDeCarte = "/cards/dos_cartes.jpg";

    // Indique si les cartes doivent être affichées
    const [revealCards, setRevealCards] = useState(false);

    // La mission de cette fonction est que chaque clique sur le bouton "WAR_fr.png" entraîne le retournement de
    // la carte du haut de chaque deck et l'appel de la fonction "compareCards" compare les cartes des deux joueurs
    // pour déterminer quel joueur gagne le tour
    const jouerTour = () => {

        // Révéler les cartes
        setRevealCards(true);

        if (decks_des_joueurs.joueur_1.length > 0 && decks_des_joueurs.joueur_2.length > 0) {

            const carteJoueur1 = decks_des_joueurs.joueur_1.shift();
            const carteJoueur2 = decks_des_joueurs.joueur_2.shift();

            // Appel de la fonction "compareCards" pour déterminer le gagnant à chaque tour en comparant les valeurs
            // des cartes
            const gagnant = compareCards(Number(carteJoueur1.valeur), Number(carteJoueur2.valeur));

            // Mettre à jour le score en fonction de la logique de notre jeu
            if (gagnant === 'joueur_1') {
                setScoreJoueur1(prevScore => prevScore + 1);
            } else if (gagnant === 'joueur_2') {
                setScoreJoueur2(prevScore => prevScore + 1);
            }

            // Mettre à jour l'état des decks
            set_decks_des_joueurs({
                joueur_1: [...decks_des_joueurs.joueur_1],
                joueur_2: [...decks_des_joueurs.joueur_2]
            });
        }
    };

    return (
        <>
            <div className="text-white p-2 flex flex-col items-center justify-center mx-auto">
                <div className="mb-0">
                    Nombre de cartes qui restent dans chaque main : {decks_des_joueurs.joueur_1.length}
                </div>

                <div className="game-board rounded-lg flex justify-around items-center w-full">

                    {/* Affichage du deck du joueur 1 */}
                    <div className="flex flex-col items-center rounded-3xl justify-center m-7">
                        {decks_des_joueurs.joueur_1[0] && (
                            <img src={revealCards ? decks_des_joueurs.joueur_1[0]?.image : dosDeCarte}
                                 alt="Dos de carte"
                                 className='bg-red-800 rounded-xl shadow-lg p-2 m-2' height="250px" width="250px"/>
                        )}
                        <div className="mb-2">Vous</div>
                    </div>

                    {/* Affichage du deck du joueur 2 */}
                    <div className="flex flex-col items-center rounded-3xl justify-center m-7">
                        {decks_des_joueurs.joueur_2[0] && (
                            <img src={revealCards ? decks_des_joueurs.joueur_2[0]?.image : dosDeCarte}
                                 alt="Dos de carte"
                                 className='bg-red-800 rounded-xl shadow-lg p-2 m-2' height="250px" width="250px"/>
                        )}
                        <div className="mb-2">L'ordinateur</div>
                    </div>

                </div>

                <div className="flex items-center justify-center">
                    <img src={"/cards/warGame.png"} className="war-game mb-2 rounded-xl cursor-pointer"
                         alt="war game"
                         height="100px" width="100px" onClick={jouerTour}/>
                </div>
            </div>

        </>

    )
        ;
}

export default GameBoard;
