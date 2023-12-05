import React, { useState, useEffect } from 'react';
import { createDeck, shuffleDeck, distributeCards } from './GameLogic';

function GameBoard() {
    // État pour stocker les decks des joueurs
    const [decks_des_joueurs, set_decks_des_joueurs] =

        // useState est utilisé pour créer un état "decks_des_joueurs" qui stocke les decks des deux joueurs
        // (joueur_1 et joueur_2)
        useState({ joueur_1: [], joueur_2: [] });

    const [selectedCards, setSelectedCards] = useState([]);

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
        set_decks_des_joueurs({ joueur_1: deck_du_joueur_1, joueur_2: deck_du_joueur_2 });

    }, []); // Le tableau de dépendances vides signifie que cet effet ne s'exécute qu'une seule fois, juste après
                 // le premier rendu du composant

    const handleCardClick = (joueur) => {
        if (selectedCards.length < 2) {
            // Supposons que le joueur prend toujours la première carte du deck
            const card = decks_des_joueurs[joueur].shift();
            setSelectedCards([...selectedCards, card]);
        }
    };

    return (
        <div className="game-board p-4 bg-white shadow-lg rounded-lg">
            {/* Logique et affichage du plateau de jeu (à faire) */}
            {/* Par exemple, afficher le nombre de cartes pour chaque joueur */}

            {/* Affichage du deck du joueur 1 */}
            <div onClick={() => handleCardClick('joueur_1')}>
                {decks_des_joueurs.joueur_1.map((card, index) => (
                    <img key={index} src={card.image} alt={`${card.valeur} de ${card.enseigne}`} />
                ))}
            </div>

            {/* Affichage des cartes sélectionnées */}
            <div>
                {selectedCards.map((card, index) => (
                    <img key={index} src={card.image} alt={`${card.valeur} de ${card.enseigne}`} />
                ))}
            </div>

            {/* Affichage du deck du joueur 2 */}
            <div onClick={() => handleCardClick('joueur_2')}>
                {decks_des_joueurs.joueur_2.map((card, index) => (
                    <img key={index} src={card.image} alt={`${card.valeur} de ${card.enseigne}`} />
                ))}
            </div>

            <div>Joueur 1 : {decks_des_joueurs.joueur_1.length} cartes</div>
            <div>Joueur 2 : {decks_des_joueurs.joueur_2.length} cartes</div>
        </div>
    );
}

export default GameBoard;
