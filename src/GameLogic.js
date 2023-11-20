// Représentation des cartes d'un jeu standard de 52 cartes contenant
const suites = ['Coeurs', 'Piques', 'Carreaux', 'Trèfles']; // "4 enseignes
const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']; // "13 valeurs"

// La fonction createDeck() génère un deck de cartes complet en créant une nouvelle carte pour chaque combinaison de valeur et
// d'enseigne, puis en ajoutant cette carte au deck
function createDeck() {
    let deck = [];
    for (let valeur of valeurs) {
        for (let suite of suites){
            deck.push({ valeur , suite });
        }
    }
    return deck;
}

const deck = createDeck();

// La fonction shuffleDeck(deck) basée sur l'algorithme de mélange de "Fisher-Yates" aussi appelé "mélange de Knuth"
// qui mélange les cartes en parcourant le deck de la fin au début et en échangeant chaque carte avec une autre carte
// à une position aléatoire
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {

        // Ici "j" est un indice donc un entier compris entre 0 et i (inclus) qui est généré de façon aléatoire.
        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck);
}

// La fonction distributeCards(deck) permet de distribuer équitablement les cartes entre les deux joueurs.
// Elle divise le deck en deux moitiés et les retourne dans un tableau, représentant les mains des deux joueurs.
function distributeCards(deck) {
    const moitie_du_deck = deck.length / 2;
    return [deck.slice(0, moitie_du_deck), deck.slice(moitie_du_deck)];
}


console.log(createDeck());

shuffleDeck(deck);

console.log(distributeCards(deck))