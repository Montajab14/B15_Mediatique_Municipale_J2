// Cap Web — affichage de l'historique. Aucune règle de réponse ici.

export function renderMessages(messages, container) {
  const lignes = messages.map((msg) => {
    const nom = document.createElement('strong');
    nom.textContent = msg.role === 'user' ? 'Vous' : 'Cap Web';
    const li = document.createElement('li');
    li.append(nom, ` : ${msg.text}`);
    if (msg.role === 'assistant') {
      li.classList.add('bot');
    }
    return li;
  });
  container.replaceChildren(...lignes);
}
