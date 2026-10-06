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
