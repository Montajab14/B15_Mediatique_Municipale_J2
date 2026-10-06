# Spécification de Cap Web (SPEC.md)

1. **Quand** on envoie 331 caractères (dépassant la limite autorisée), **Cap Web** refuse le message et retourne une erreur indiquant la limite de 330 caractères au maximum.  
   *Vérifié par : test « accepte 330 caractères et refuse 331 ».*

2. **Quand** on envoie un message vide ou composé uniquement d'espaces, **Cap Web** refuse la saisie et retourne une erreur.  
   *Vérifié par : test « refuse le vide et les espaces seuls ».*

3. **Quand** l'utilisateur saisit l'un des deux mots du cahier personnel (« prairie » ou « voisin »), **Cap Web** renvoie la réponse propre définie pour ce mot.  
   *Vérifié par : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour ».*

4. **Quand** l'utilisateur envoie une phrase inconnue, **Cap Web** renvoie un message de repli distinct.  
   *Vérifié par : test « répond à une phrase inconnue par un repli distinct ».*

5. **Quand** l'historique des messages est affiché à l'écran, **Cap Web** insère le texte brut sans évaluer le HTML.  
   *Vérifié par : test « view.js affiche du texte et ne décide pas des réponses ».*
