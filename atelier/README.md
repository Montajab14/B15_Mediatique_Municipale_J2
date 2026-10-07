# Cap Web

## 1. À quoi sert Cap Web

Cap Web est un assistant conversationnel à règles, créé par notre binôme pendant le module « Renforcement Dev Web ». On lui écrit un message, il répond selon des règles simples, sans intelligence artificielle : salutations, aide, mots du binôme (dont « bibliotheque », pour notre thème de la médiathèque municipale) et conseils envoyés par le serveur.

La page vérifie chaque message (vide, trop long) avant de répondre, affiche toujours le texte comme du texte (jamais comme du HTML), compte les caractères pendant la frappe et garde la conversation après un rechargement.

## 2. Installer, lancer et tester

Il faut **Node.js 24.20 ou plus récent** (`node --version` pour vérifier) et Git.

Récupérer le projet, puis entrer dans le dossier `atelier` :

```powershell
git clone https://github.com/Montajab14/B15_Mediatique_Municipale_J2.git
cd B15_Mediatique_Municipale_J2\atelier
```

Installer les outils, exactement dans les versions du projet :

```powershell
npm ci
```

`npm ci` annonce une vulnérabilité : c'est connu, ne lancez pas `npm audit fix`.

Lancer Cap Web, puis ouvrir http://127.0.0.1:3000 dans le navigateur (Ctrl+C arrête le serveur) :

```powershell
npm start
```

Si le port 3000 est déjà pris : `$env:PORT=3001`, puis `npm start`, et ouvrir http://127.0.0.1:3001.

Tester, dans un second terminal ouvert dans `atelier` :

```powershell
npm test
npm run lint
```

`npm test` doit afficher `fail 0`, et `npm run lint` ne doit rien signaler.

Facultatif, les tests dans un vrai navigateur (environ 150 Mo à télécharger la première fois) :

```powershell
npx playwright install chromium
npm run test:browser
```

## 3. Utiliser Cap Web

| Vous écrivez | Cap Web répond |
|---|---|
| `salut` ou `bonjour` | une salutation |
| `aide` | la liste des mots qu'il connaît, avec leur nombre |
| `test` | une confirmation que ses règles fonctionnent |
| `prairie`, `voisin`, `bibliotheque` | la phrase propre à chacun de nos mots |
| `conseil` | un conseil tiré au hasard par le serveur |
| autre chose | un message de repli qui renvoie vers « aide » |

Les majuscules et les espaces autour du message ne comptent pas. Un message vide, ou plus long que notre limite de 330 caractères, est refusé avec une erreur visible.

## 4. La route `/api/conseil`

Le serveur expose une route qui renvoie un conseil en JSON, tiré au hasard parmi trois :

```text
GET http://127.0.0.1:3000/api/conseil
```

Réponse (statut 200, en-tête `content-type: application/json; charset=utf-8`) :

```json
{ "conseil": "Un code clair est plus facile à maintenir." }
```

Dans la page, le message `conseil` appelle cette route avec `fetch` (fonction `demanderConseil` de `public/js/app.js`). Si le serveur ne répond pas, Cap Web affiche « Le serveur ne répond pas : conseil indisponible. » au lieu de planter. La route est vérifiée par `tests/conseil.test.js`.

## 5. Les trois modules de `public/js`

* **`brain.js`** : le cerveau. Des fonctions pures, sans aucun accès à la page : `validateMessage` (texte, vide, limite), `replyTo` (la réponse selon les règles et les mots du binôme) et `compterMots`.
* **`view.js`** : l'affichage. `renderMessages` crée une ligne par message et écrit le texte avec `textContent`, jamais avec `innerHTML`.
* **`app.js`** : le câblage. Il écoute le formulaire et les boutons, tient l'historique (enregistré dans `localStorage` sous `capweb.historique`), met à jour le compteur, affiche la version et demande les conseils au serveur.

## 6. Arborescence du projet

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
