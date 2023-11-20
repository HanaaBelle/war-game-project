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
      ├─ GameBoard.jsx
      ├─ ScoreBoard.jsx
      └─ ... (autres fichiers et dossiers, comme index.css)
   ├─ .gitignore
   ├─ index.html
   ├─ package.json
   └─ ... (autres fichiers de configuration)

#### 2.1 Structuration du projet
Création des composants de base dans React :

- App.jsx (le composant racine de notre application, qui servira de conteneur pour les autres composants),
- GameBoard.jsx (pour gérer l'affichage du plateau de jeu y compris les cartes et les actions des joueurs), 
- ScoreBoard.jsx (pour afficher les scores des joueurs).

Comme App.jsx a été généré automatiquement par Vite lors de l'initialisation du projet. 
On va le modifier pour inclure nos composants "GameBoard" et "ScoreBoard" (voir App.jsx, GameBoard.jsx, ScoreBoard.jsx).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
