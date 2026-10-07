# Bilan du binôme · Montajab et Lucas

## Notre niveau de départ (positionnement de mardi) et aujourd'hui

Chacun indique « à l'aise » ou « à renforcer », mardi puis aujourd'hui.

| Notion | Montajab : mardi | Montajab : aujourd'hui | Lucas : mardi | Lucas : aujourd'hui |
|---|---|---|---|---|
| Structure HTML | à compléter | à compléter | à compléter | à compléter |
| CSS et responsive | à compléter | à compléter | à compléter | à compléter |
| JavaScript | à compléter | à compléter | à compléter | à compléter |
| DOM et événements | à compléter | à compléter | à compléter | à compléter |
| Git | à compléter | à compléter | à compléter | à compléter |
| Tests | à compléter | à compléter | à compléter | à compléter |

## Nos acquis, prouvés par un commit

1. **Le DOM et les événements.** `app.js` écoute l'événement `input` du champ et écrit, avec `textContent`, la longueur du texte et la limite dans `#compteur` ; le compteur revient à 0 après l'envoi. Commit `51c167d` (feat: compteur de caractères).
2. **Un serveur qui répond en JSON, avec son test.** La route `/api/conseil` de `server/app.js` renvoie `{ conseil }` tiré au hasard, avec le statut 200 et l'en-tête `application/json`, ce que vérifie `tests/conseil.test.js`. Commit `cf623cc` (feat: route /api/conseil).
3. **fetch avec async/await et la gestion des erreurs.** `afficherVersion()` affiche « version indisponible » en cas de panne. `demanderConseil()` appelle `/api/conseil`, vérifie `reponse.ok`, lit le JSON, et renvoie « Le serveur ne répond pas : conseil indisponible. » quand le serveur est arrêté, sans écran blanc. Commits `2867655` (refactor: version avec async/await) et `6748602` (feat: Cap Web donne un conseil).
4. **Un test vu rouge avant le code.** Le test de `compterMots` est commité seul et rouge (`does not provide an export named 'compterMots'`), puis le code le fait passer ; en remplaçant le `return` par `return 1;`, trois tests rougissent. Commits `1670374` (test: compterMots, critères C1 à C5) puis `20b4514` (feat: compterMots).
5. **L'accessibilité et le responsive.** Lighthouse donne 100 en accessibilité, et 82 sans le `label` du champ ; sous 600 px, le bouton Envoyer prend toute la largeur. Commits `a33520f` (docs: scores Lighthouse) et `6fe5ac8` (feat: version mobile).

Autres preuves : la documentation de R2 (`96fa457`, `53d6115`, `908e2e5`), le README final (`9dabbab`) et la revue des trois patchs de R4, dans le carnet.

## Nos points à renforcer

1. **Des messages de commit qui disent ce qui change.** Nos cinq corrections de R1 sont dans un seul commit, `9dbefa4`, dont le message « fix: <ce qui est corrigé> » est resté celui de l'exemple de la fiche ; « R3 + R4 » ou « edit R4 » ne disent pas non plus ce qui change.
2. **Vérifier qu'une étape est vraiment finie avant de la commiter.** À l'étape 1, « aide » annonçait encore « deux mots » (corrigé par `07fc601`), et le code de R3 n'avait pas été commité le jour 2 (rattrapé par `1670374` et `20b4514`).

## Notre objectif

Sur notre prochain projet : un commit par changement, avec un message qui dit ce qui change, et un test vu rouge avant chaque nouvelle fonction.
