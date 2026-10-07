# Cap Web

## 1. À quoi sert Cap Web
Cap Web est un assistant conversationnel web basé sur un système de règles déterministes.
Il permet de valider les saisies des utilisateurs, de répondre à des commandes et mots-clés précis, et de conserver l'historique des échanges localement.
Il fonctionne entièrement côté client avec des fonctions pures et un affichage sécurisé.

## 2. Comment l'installer et le lancer

Dans le dossier `atelier` :

1. Installer les dépendances du projet :
   ```bash
   npm install
   ```
2. Lancer l'application en mode développement :
   ```bash
   npm start
   ```
   L'application est ensuite accessible dans le navigateur à l'adresse : http://127.0.0.1:3000

3. Exécuter la suite de tests pour vérifier le bon fonctionnement :
   ```bash
   npm test
   ```

## 3. Rôle des 3 modules de `public/js`

* **`brain.js`** : Le moteur logique (« cerveau ») de l'assistant. Il contient les fonctions pures `validateMessage` (validation du texte et contrôle de la limite) et `replyTo` (détermination des réponses selon les règles et mots-clés). Il ne réalise aucun accès à la page ni au DOM.
* **`view.js`** : Le module d'affichage de la conversation. Il fournit la fonction `renderMessages` responsable de générer les éléments de liste (`<li>`) et de mettre à jour le conteneur HTML en utilisant exclusivement du texte brut (`textContent`) pour prévenir l'injection HTML.
* **`app.js`** : Le script principal de câblage. Il écoute les événements du formulaire et des boutons, gère la persistance de la conversation dans `localStorage`, et fait le lien entre la logique métier (`brain.js`) et la vue (`view.js`).

## 4. Arborescence du projet

```text
atelier/
├── public/                    ce que le navigateur reçoit
│   ├── index.html             la page de Cap Web
│   ├── styles.css             les styles, dont la version mobile (sous 600 px)
│   └── js/
│       ├── app.js             le câblage : formulaire, historique, compteur, version, conseil
│       ├── brain.js           le cerveau à règles, fonctions pures : validateMessage, replyTo, compterMots
│       └── view.js            l'affichage de la conversation, toujours en texte (textContent)
├── server/
│   ├── app.js                 le serveur HTTP : fichiers publics, /version.json et /api/conseil
│   └── start.js               démarre le serveur sur http://127.0.0.1:3000
├── tests/                     les tests Node, lancés par npm test
│   ├── contrat/               le contrat du formateur : ne jamais le modifier
│   ├── harnais/               les tests des scripts du projet
│   ├── server.test.js         le serveur sert les bons fichiers, et rien d'autre
│   ├── conseil.test.js        la route /api/conseil répond en JSON
│   └── compterMots.test.js    les critères C1 à C5 de compterMots
├── browser/                   les tests navigateur Playwright (npm run test:browser)
├── scripts/                   les contrôles : dépendances, tests protégés, build statique
├── cahier-personnel.json      notre limite et nos mots : ne jamais le modifier
├── AGENTS.md                  les conventions du projet
├── SPEC.md                    la spécification, critère par critère
└── package.json               les scripts npm et les dépendances
```
