# Carnet de bord · J2

Binôme : bXX · Membres : … · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : … | Membre 2 : … |
|---|---|---|
| Structure HTML | | |
| CSS et responsive | | |
| JavaScript | | |
| DOM et événements | | |
| Git | | |
| Tests | | |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 :

Membre 2 :

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| | | | |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

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

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?
