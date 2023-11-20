// Représentation des cartes d'un jeu standard de 52 cartes contenant
const suites = ['Coeurs', 'Piques', 'Carreaux', 'Trèfles']; // "4 enseignes
const valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']; // "13 valeurs"

// La fonction génère un deck de cartes complet en créant une nouvelle carte pour chaque combinaison de valeur et
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

console.log(createDeck());
