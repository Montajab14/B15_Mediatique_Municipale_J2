# Conventions du projet Cap Web (AGENTS.md)

## 1. Règles de nommage

* **Fonctions** : Une fonction porte un verbe décrivant précisément ce qu'elle fait (ex: `validateMessage`, `replyTo`, `renderMessages`).
* **Constantes** : Les constantes globales et immutables s'écrivent en majuscules avec des tirets bas si besoin (ex: `LIMITE`, `MOTS`, `REPONSES`, `CLE`).
* **Fichiers** : Les noms de fichiers s'écrivent en minuscules (ex: `brain.js`, `view.js`, `app.js`).
* **Messages de commit** : Les messages de commit commencent par un type explicite suivi d'une description courte (ex: `docs: README`, `fix: réponse au message vide`, `refactor: nommage de variable`).

## 2. Interdits du projet

1. **Interdiction de modifier les tests de contrat et le cahier personnel** : Ne modifie jamais les fichiers situés dans `tests/contrat/`, le fichier `browser/contrat.spec.js` ni `cahier-personnel.json`. Si un test semble faux, arrête-toi et explique pourquoi.
2. **Interdiction d'injecter du HTML** : N'utilise jamais `innerHTML`, `outerHTML` ou `insertAdjacentHTML` dans les fichiers de vue ou de câblage (`view.js`, `app.js`). L'affichage doit se faire exclusivement avec `textContent` et la création d'éléments DOM pour éviter les failles XSS.
3. **Interdiction d'accéder au DOM dans `brain.js`** : Le module `brain.js` doit rester composé exclusivement de fonctions pures sans aucun accès à la page (ni `document`, ni `window`, ni `localStorage`).
4. **Interdiction de modifier les dépendances sans justification** : Ne modifie pas `package.json` ni `dependances-autorisees.json` pour ajouter de nouvelles bibliothèques externes.
