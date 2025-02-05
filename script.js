console.log("test");

/*
OK Créer le plateau (dynamique)
OK Créer notre pacman
OK Gérer ses déplacements (sans contrainte)
OK Contraintes de déplacement (pas dans les murs)
OK Pièces à manger
* Générer les fantômes
* Déplacer les fantômes : Moyen, en aléatoire, déplacement pas top
* Gérer collision pacman et un fantome
* Gérer les power-pellet (un mode ou pacman peut manger un fantome)
*/

const layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
	1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
	1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
	1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
	1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
	2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
	2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1,
];
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

const gameDiv = document.getElementById("game");
const sizeCaseWidth = 28;
const scoreHtml = document.getElementById("score");
let score = 0;

function creerPlateau() {
	let cptCase = 0; // va servire a donner un chiffre unique a chaque case du plateau
	scoreHtml.innerHTML = `mon score : ${score}`; // add de la ligne score direct le innerhtml
	//pour chacunne d'elle (les cases, les chiffres) avec le forEach
	layout.forEach((caseLayout) => {
		let casePlateau = document.createElement("div"); // on crée les div ici avec creatElement
		casePlateau.dataset.numerocase = cptCase; // datasat nous permet de donne les data attribu et ça nous incrément bien chaqu'une des div donc 783
		//le switch "en fonction" du case layout donc du chiffre
		switch (caseLayout) {
			//pour layout 0 (points)
			case 0:
				casePlateau.classList.add("pac-dots");
				break;
			//pour case layout 1 (murs)
			case 1:
				casePlateau.classList.add("mur"); // on ajoute la classe "murs" a toute les div des cases 1
				break;
			case 2:
				casePlateau.classList.add("ghost-lair"); // et pareil pour chacune
				break;
			case 3:
				casePlateau.classList.add("power-pellet");
				break;
			case 4:
				casePlateau.classList.add("empty");
				break;
		}

		gameDiv.appendChild(casePlateau); // on ajoute le let a tous les child de gameDiv
		cptCase++; //incrément le compteur pour les chiffres des cases
	});
	///// on appelle la fonction qui crée le pacman et lui donne le point de spawn ////
	getCaseByIndex(489).classList.add("pacman");
	//on appell la fonction qui crée les ghost
	generGhost();

	//deplacement aléatoir des guost
	setInterval(moovGhost, 1000); // appell la fonction moovghost et l'apllique toutes les seconde ce qui fait avancer les ghost
}

//appelle la fonction pour créer le plateau
creerPlateau();

//// crée une fonction qui permettra de return une case une case depuis l'index//////
function getCaseByIndex(index) {
	let caseGame = document.querySelector(`[data-numerocase="${index}"]`);
	return caseGame;
}

//on utilise keyup pour recupere les touche sur les quel l'utilisateur appuis pour faire les mouvement du pacman
document.addEventListener("keyup", (e) => {
	DeplacePacMan(e.key); // et on appelle la fonction dans l'event listener
});
//on crée la fonction pour le deplacement
function DeplacePacMan(direction) {
	let pacManDiv = document.querySelector(".pacman");
	let pacManCase = pacManDiv.dataset.numerocase;
	let caseDestination = null; // on met en null pour simplifier et pour le valoriser que si besoin
	switch (direction) {
		case "ArrowUp":
			//déplace PM de 1 vers le haut
			caseDestination = getNumberCaseDestination(
				pacManCase,
				directions.Haut
			);
			break;
		case "ArrowRight":
			//déplace PM de 1 vers la droite
			caseDestination = getNumberCaseDestination(
				pacManCase,
				directions.Droite
			);
			break;
		case "ArrowLeft":
			//déplace PM de 1 vers la gauche
			caseDestination = getNumberCaseDestination(
				pacManCase,
				directions.Gauche
			);
			break;
		case "ArrowDown":
			caseDestination = getNumberCaseDestination(
				pacManCase,
				directions.Bas
			);
			break;
		default:
			break;
	}
	//si inverse a null
	if (caseDestination != null) {
		//si cse destination dans checkoutdirection est true, alors fair add et remove
		if (checkDirection(caseDestination)) {
			caseDestination.classList.add("pacman");
			pacManDiv.classList.remove("pacman");
		}
	}
}

//function utiliser pour bloque PM avec les murs
//return false quand tu peux pas avancer
//return true si ces possible
//if pour compter les points et les incrementer
function checkDirection(caseDestination) {
	if (caseDestination.classList.contains("mur")) {
		return false;
	} else {
		if (caseDestination.classList.contains("pac-dots")) {
			incrementScore();
			caseDestination.classList.remove("pac-dots");
		}
		return true;
	}
}

//fonction qui permet d'incrémenter le score
function incrementScore() {
	score++;
	scoreHtml.innerHTML = `mon score : ${score}`;
	if (score == 234) {
		alert("T'a gagné BG");
	}
}
// Fonction qui crée les Ghost
function generGhost() {
	//permet de generé des ghost en évitant de spawn sur les autres (ghost-lair;not(.ghost))
	for (let i = 0; i < 4; i++) {
		let casePotentialForGhost = document.querySelectorAll(
			".ghost-lair:not(.ghost)"
		);
		//parmis les case dispo 1 est selct au hasard
		let caseForGhost =
			casePotentialForGhost[
				getRandomNumber(casePotentialForGhost.length)
			];
		//ajout de la classe ghost au ghost
		caseForGhost.classList.add("ghost");
	}
}
//fonction de creation au hasard du spawn
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function moovGhost() {
	let allGhost = document.querySelectorAll(".ghost");
	allGhost.forEach((ghost) => {
		let direction = getRandomNumber(4);
		let ghostCaseId = ghost.dataset.numerocase;
		let caseDestination = null;

		switch (direction) {
			case 1:
				caseDestination = getNumberCaseDestination(
					ghostCaseId,
					directions.Haut
				);
				break;
			case 2:
				caseDestination = getNumberCaseDestination(
					ghostCaseId,
					directions.Bas
				);
				break;
			case 3:
				caseDestination = getNumberCaseDestination(
					ghostCaseId,
					directions.Droite
				);
				break;
			case 4:
				caseDestination = getNumberCaseDestination(
					ghostCaseId,
					directions.Gauche
				);
				break;
		}

		if (caseDestination && !caseDestination.classList.contains("mur")) {
			// Vérifie que la case destination existe et n'est pas un mur
			ghost.classList.remove("ghost"); // Supprime la classe de la case actuelle
			caseDestination.classList.add("ghost"); // Ajoute la classe à la nouvelle case
			ghost.dataset.numerocase = caseDestination.dataset.numerocase; // Met à jour la position du ghost
		}
	});
}

const direction = {
	Haut: 1,
	Bas: 2,
	Droite: 3,
	Gauche: 4,
};

function getNumberCaseDestination(caseActuel, direction) {
	let caseDestination = null;
	switch (
		direction // Comparaison avec des chaînes de caractères
	) {
		case "Haut":
			caseDestination = getCaseByIndex(
				parseInt(caseActuel) - sizeCaseWidth
			);
			break;
		case "Droite":
			caseDestination = getCaseByIndex(parseInt(caseActuel) + 1);
			break;
		case "Gauche":
			caseDestination = getCaseByIndex(parseInt(caseActuel) - 1);
			break;
		case "Bas":
			caseDestination = getCaseByIndex(
				parseInt(caseActuel) + sizeCaseWidth
			);
			break;
		default:
			console.error("Direction invalide :", direction);
			break;
	}
	return caseDestination;
}
const directions = {
	Haut: "Haut",
	Bas: "Bas",
	Droite: "Droite",
	Gauche: "Gauche",
};
