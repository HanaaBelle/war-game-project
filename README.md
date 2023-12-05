## Projet de jeu : War Game 
Création d'un jeu de bataille "War Game" avec React Vite, Tailwind pour le style et la gestion des scores via le local 
storage

### Étape 1 : Initialisation du Projet dans un répertoire déjà créé

#### 1.1 accédez au répertoire 
Avec la commande suivante :

`cd chemin_vers/war-game-project`

#### 1.2 Initialisation du projet React Vite dans le répertoire actuel 
Pour le faire directement dans le répertoire courant sans créer un sous-dossier, on utilise un point (.) comme nom du 
projet. Cela indique à Vite de configurer le projet dans le répertoire actuel.

`npm create vite@latest . --template react`

#### 1.3 Installation des dépendances 
Une fois l'initialisation terminée, on exécute la commande suivante pour installer toutes les dépendances nécessaires 
du projet.

`npm install

#### 1.4 Vérification de tous les dossiers et fichiers nécessaires au projet Vite
Qu'ils ont bien été créés dans notre répertoire. Tels que : package.json, index.html, src/, .gitignore, etc, en plus de 
notre et README.md existant.

#### 1.5 Démarrage du serveur afin de commencer le développement localement
Afin commencer à travailler sur notre projet, on exécute la commande suivante pour démarrer notre serveur localement à 
l'adresse : " http://localhost:5173/ "

`npm run dev` 

### Étape 2 : Structuration de Base et Style du projet

Notre structure de répertoire ressemble à ceci :

war-game-project/
   ├─ node_modules/
   ├─ public/
   ├─ src/
      ├─ assets
      ├─ App.jsx
      ├─ pages
      ├─ components 
         ├─ GameBoard.jsx
         ├─ ScoreBoard.jsx
         ├─ GameLogic.js
      └─ ... (autres fichiers et dossiers, comme index.css)
   ├─ .gitignore
   ├─ index.html
   ├─ package.json
   └─ ... (autres fichiers de configuration)

#### 2.1 Structuration du projet
Création des composants de base dans React Vite

- App.jsx (le composant racine de notre application, qui servira de conteneur pour les autres composants),
- GameBoard.jsx (pour gérer l'affichage du plateau de jeu y compris les cartes et les actions des joueurs), 
- ScoreBoard.jsx (pour créer un affichage distinct pour les scores des joueurs).

Comme App.jsx a été généré automatiquement par Vite lors de l'initialisation du projet. 
On va le modifier pour inclure nos composants "GameBoard" et "ScoreBoard" (voir App.jsx, GameBoard.jsx, ScoreBoard.jsx).

#### 2.2 Stylisation avec Tailwind
Utilisation de Tailwind pour ajouter du style à nos composants.

##### 2.2.1 Installation de Tailwind CSS avec les lignes de commande suivantes

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
`npx tailwindcss init -p`

##### 2.2.2 Intègration de Tailwind à notre projet en ajoutant les lignes suivantes au fichier "index.css"

`@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`
##### 2.2.3 Ajout des classes Tailwind pour styliser mes composants
- Dans "App.jsx", on centre verticalement et horizontalement du contenu. On ajoute de l'espace autour des composants et 
on s'assure que le conteneur prend au minimum la hauteur de l'écran (voir App.jsx).

- Dans "GameBoard.jsx", on ajoute du padding, une ombre pour un effet en relief, et des coins arrondis 
(voir GameBoard.jsx). 

- Dans "ScoreBoard.jsx", on ajoute une marge en haut pour séparer le "score board" du "game board", et on centre le 
texte à l'intérieur (voir ScoreBoard.jsx).

### Étape 3 : Logique du "WAR GAME" 
On crée un nouveau fichier "GameLogic.js" où on mettra la logique principale du jeu.
Cela inclut la création d'un deck de cartes, le mélange de ce deck, et la distribution des cartes aux joueurs. 
(voir GameLogic.js)

#### 3.1 Définition des Cartes
On crée une représentation des cartes d'un jeu standard de "52 cartes" qui contient "4 enseignes" et "13 valeurs".
(voir GameLogic.js)

#### 3.2 Création du Deck
On crée une fonction pour générer un deck de cartes complet (voir GameLogic.js).

#### 3.3 Mélange du Deck
On utilise l'algorithme de mélange de "Fisher-Yates" aussi appelé "mélange de Knuth" qui est une méthode efficace et 
juste pour mélanger un tableau (voir GameLogic.js).

#### 3.4 Distribution les Cartes
On crée une fonction qui distribue les cartes de manière équitable entre deux joueurs (voir GameLogic.js).

#### 3.5 Utilisation des fonctions (Création et Mélange du Deck ainsi que Distribution les Cartes) dans le Projet
On exporte les fonctions pour les utiliser dans d'autres parties de notre application (voir GameLogic.js).

#### 3.6 Intégration des fonctions dans le composant React "GameBoard.jsx" 
(voir GameBoard.js)

#### 3.7 Affichage des images des cartes depuis le dossier (public/cards)
Pour afficher des images de chaque carte et permettre aux joueurs de voir leur deck et de cliquer dessus pour révéler des 
images de cartes (voir GameLogic.js). 

#### 3.8 Ajout d'un état (state) 
(voir App.jsx).

#### 3.9 Gestion des scores des deux joueurs
(voir GameBoard.jsx).

#### 3.10 Affichage du résultat du score des deux joueurs
(voir ScoreBoard.jsx).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
