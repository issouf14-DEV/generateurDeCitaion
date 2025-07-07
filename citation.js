let p = document.querySelector("p");
let span = document.querySelector('span');
let btn = document.querySelector('button');

let monTableau2D = [
  [
    "L'éducation est l'arme la plus puissante pour changer le monde.",
    "Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble.",
    "Je ne peux pas changer la direction du vent, mais je peux ajuster mes voiles.",
    "L'Afrique n'a pas besoin d'hommes forts, mais d'institutions fortes.",
    "Un peuple sans la connaissance de son passé est comme un arbre sans racines.",
    "La culture africaine doit être écrite par les Africains eux-mêmes.",
    "L'art africain n'est pas primitif, il est primordial.",
    "Un homme qui ne connaît pas son histoire est comme un arbre sans racines.",
    "La diversité culturelle est aussi nécessaire que la biodiversité.",
    "L'Afrique doit écrire sa propre histoire ou être écrite par ses ennemis.",
    "La beauté réside dans la diversité.",
    "Nous devons apprendre à vivre ensemble comme des frères ou périr ensemble comme des idiots.",
    "L'injustice quelque part est une menace pour la justice partout.",
    "Celui qui n'a pas d'objectif ne risque pas de les atteindre.",
    "La philosophie africaine doit être décolonisée.",
    "L'homme est condamné à être libre.",
    "Je pense, donc je suis.",
    "La science sans conscience n'est que ruine de l'âme.",
    "Le doute est le commencement de la sagesse.",
    "Connais-toi toi-même.",
  ],
  [
    "Nelson Mandela",
    "Proverbe africain",
    "Wole Soyinka",
    "Ellen Johnson Sirleaf",
    "Marcus Garvey",
    "Chinua Achebe",
    "Léopold Sédar Senghor",
    "Cheikh Anta Diop",
    "Wangari Maathai",
    "Kwame Nkrumah",
    "Desmond Tutu",
    "Martin Luther King Jr.",
    "Martin Luther King Jr.",
    "Sun Tzu",
    "Paulin Hountondji",
    "Jean-Paul Sartre",
    "René Descartes",
    "François Rabelais",
    "Aristote",
    "Socrate",
  ],
];
let i = 0;
btn.addEventListener("click", () => {
  // Afficher la citation et l'auteur correspondants
  p.textContent = monTableau2D[0][i];
  span.textContent = "~~" + monTableau2D[1][i];

  // Passer à la citation suivante (boucle)
  i += 1;
  // Si on dépasse la fin, revenir au début
  if (i >= monTableau2D[0].length) {
    i = 0;
  }
});