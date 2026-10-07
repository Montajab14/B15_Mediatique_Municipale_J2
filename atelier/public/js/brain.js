// Cap Web — cerveau à règles. Fonctions pures : aucun accès à la page.

// Vos réglages : recopiez ici la limite et les deux mots de votre cahier-personnel.json.
// Les valeurs écrites ci-dessous sont celles de l'exemple (240, boussole, refuge), pas les vôtres.
export const LIMITE = 330;

const MOTS = {
  prairie: 'La prairie de la madeleine est un site naturel remarquable.',
  voisin: 'Le chemin des voisins est un lieu de promenade agréable.',
  bibliotheque : 'La bibliothèque est ouverte tous les jours de 8h à 20h.',
};

const liste = Object.keys(MOTS).map((mot) => `« ${mot} »`).join(' et ');

const REPONSES = {
  salut: 'Bonjour ! Je suis Cap Web, un assistant à règles. Écrivez « aide » pour voir ce que je sais faire.',
  aide: `Je connais « salut », « aide », « test », et ${Object.keys(MOTS).length} mots à moi : ${liste}.`,
  test: 'Test bien reçu : mes règles fonctionnent.',
  inconnu: 'Je ne comprends pas cette demande. Écrivez « aide » pour voir ce que je sais faire.'
};


export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Le message ne doit pas être vide.' };
  }
  if (value.length > LIMITE) {
    return { ok: false, error: `Le message doit contenir ${LIMITE} caractères au maximum.` };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = String(message).trim().toLowerCase();
  if (texte === 'salut' || texte === 'bonjour') {
    return REPONSES.salut;
  }
  if (texte === 'aide') {
    return REPONSES.aide;
  }
  if (texte === 'test') {
    return REPONSES.test;
  }
  if (texte === '') {
    return REPONSES.inconnu;
  }
  if (Object.hasOwn(MOTS, texte)) {
    return MOTS[texte];
  }
  // Message inconnu : on rappelle ce que Cap Web sait faire.
  return REPONSES.inconnu;
}

export function compterMots(message) {
  if (typeof message !== 'string') {
    return 0;
  }
  const mots = message.trim().split(/\s+/).filter((mot) => mot !== '');
  return mots.length;
}
