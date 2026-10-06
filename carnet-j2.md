# Carnet de bord · J2

Binôme : bXX · Membres : … · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : Lucas LAI | Membre 2 : Nontajab MAROUF |
|---|---|---|
| Structure HTML | | |
| CSS et responsive | | |
| JavaScript | | |
| DOM et événements | | |
| Git | | |
| Tests | | |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 : Lucas LAI

Membre 2 : Nontajab MAROUF

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| `accepte 330 caractères et refuse 331` | `validateMessage` vérifiait la longueur avec une valeur en dur (280) au lieu d'utiliser la constante `LIMITE`. | `public/js/brain.js` | `fix: validation de la limite de caractères avec LIMITE` |
| `refuse le vide et les espaces seuls` | `raw === ''` était contrôlé avant d'appliquer `.trim()`, laissant passer les espaces seuls. | `public/js/brain.js` | `fix: refus des messages contenant uniquement des espaces` |
| `ignore la casse et les espaces autour` | `replyTo` ne nettoyait pas les espaces avec `.trim()`, empêchant d'identifier les mots-clés entourés d'espaces. | `public/js/brain.js` | `fix: trim du message dans replyTo` |
| `répond à une phrase inconnue par un repli distinct` | `replyTo` renvoyait la même réponse que `aide` au lieu d'avoir son propre message de repli. | `public/js/brain.js` | `fix: réponse de repli distincte pour les phrases inconnues` |
| `view.js affiche du texte et ne décide pas des réponses` | `renderMessages` utilisait `innerHTML` au lieu de `textContent` pour insérer le texte. | `public/js/view.js` | `fix: affichage sécurisé avec textContent sans innerHTML` |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.
L'agent avait initialement proposé de contourner le problème en modifiant temporairement les tests pour les faire passer, ce qui a été refusé car le contrat de tests ne doit pas être altéré.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | Tentative de modification directe d'un fichier dans `tests/contrat/`. | Refusé | Interdiction de modifier les fichiers de `tests/contrat/`. |
| 2 | Proposition d'utiliser `innerHTML` pour ajouter du style HTML rapidement. | Refusé | Interdiction d'injecter du HTML avec `innerHTML` (sécurité XSS). |
| 3 | Tentative de modification des mots du `cahier-personnel.json`. | Refusé | Interdiction de modifier `cahier-personnel.json`. |

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | compterMots |
| Le rouge vu (message exact) | The requested module '../public/js/brain.js' does not provide an export named 'compterMots' |
| Identifiant du commit `test:` |  |
| Identifiant du commit `feat:` |  |
| Casse volontaire : la ligne changée | return mots.length; remplacé par return 1; |
| Casse volontaire : le test devenu rouge | C1 : compte les mots séparés par un espace |
| Pour aller plus loin : la deuxième fonction | |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | Accepté | public/js/brain.js, lignes 18 et 47-49 | Ajoute seulement « merci » et son test, conforme à la description. Tests verts ; <b>gras</b>, les espaces seuls et aide sont corrects dans la page. |
| 2 | Refusé | tests/contrat/brain.contrat.test.js, lignes 69, 71 et 86 ; public/js/brain.js, ligne 38 | Le patch affaiblit le contrat (assertions sans espaces) pour cacher que normaliser() a perdu trim() : replyTo(' SALUT ') donne le repli, et le contrat d'origine a 2 rouges. |
| 3 | Refusé | public/js/view.js, ligne 13 | createContextualFragment interprète le message comme du HTML : <b>gras</b> s'affiche en gras, et un <img onerror> exécute du code (injection). Le contrat navigateur « le texte reste du texte » est rouge. |

Pour aller plus loin : j'ai corrigé le patch 2 dans mon-patch.patch. Il garde « au revoir » et normaliser(), mais normaliser() fait maintenant String(message).trim().toLowerCase(), et le contrat n'est plus modifié. Son test vérifie aussi les espaces autour. J'ai contrôlé trois choses :

- sur une base neuve, on obtient 46 tests sur 46, avec le contrat d'origine ;
- si on remet le défaut du patch 2, mon test rougit (2 rouges) ;
- il ne touche que public/js/brain.js et tests/normaliser.test.js.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?
