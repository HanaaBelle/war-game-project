// Représentation des cartes d'un jeu standard de 52 cartes contenant
const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']; // "13 valeurs"
const enseignes = ['coeurs', 'piques', 'carreaux', 'trefles']; // "4 enseignes

// On intègre des images (voir le dossier : public/cards) correspondant à chaque combinaison de carte avec la fonction
// createDeck() qui génère un deck de cartes complet en créant une nouvelle carte pour chaque combinaison de valeur et
// d'enseigne qui associe chaque carte à son image correspondante puis l'ajoute au deck
function createDeck() {
    let deck = [];
    for (let enseigne of enseignes) {
        for (let valeur of valeurs) {
            // Chemin de l'image
            let image = `/cards/${valeur}_${enseigne}.jpg`;
            deck.push({ enseigne, valeur, image });
        }
    }
    return deck;
}

// La fonction shuffleDeck(deck) basée sur l'algorithme de mélange de "Fisher-Yates" aussi appelé "mélange de Knuth"
// qui mélange les cartes en parcourant le deck de la fin au début et en échangeant chaque carte avec une autre carte
// à une position aléatoire
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {

        // Ici "j" est un indice donc un entier compris entre 0 et i (inclus) qui est généré de façon aléatoire.
        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// La fonction distributeCards(deck) permet de distribuer équitablement les cartes entre les deux joueurs.
// Elle divise le deck en deux moitiés et les retourne dans un tableau, représentant les mains des deux joueurs.
function distributeCards(deck) {
    const moitie_du_deck = deck.length / 2;
    return [deck.slice(0, moitie_du_deck), deck.slice(moitie_du_deck)];
}

//  La fonction "compareCards" détermine le gagnant en comparant les cartes suivant la logique de la plus grande
//  valeur ou égalité
function compareCards(valeurCarteJoueur1, valeurCarteJoueur2) {
    // Comparer les cartes des joueurs
    if(valeurCarteJoueur1 > valeurCarteJoueur2) {
        // Retourner 'joueur_1'
        return 'joueur_1'
    } else if (valeurCarteJoueur1 < valeurCarteJoueur2) {
        // Retourner 'joueur_2'
        return 'joueur_2'
    }
    // Sinon, ils sont à égalité
}

export { createDeck, shuffleDeck, distributeCards, compareCards };
