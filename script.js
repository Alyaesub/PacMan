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
	///// on crée le pacman et lui donne le point de spawn ////
	// let caseGame = document.querySelector('[data-numerocase="489"]');
	// caseGame.classList.add("pacman");
	getCaseByIndex(489).classList.add("pacman");
}

//// crée une fonction qui permettra de return une case une case depuis l'index//////
function getCaseByIndex(index) {
	let caseGame = document.querySelector(`[data-numerocase="${index}"]`);
	return caseGame;
}

//appelle la fonction pour créer le plateau
creerPlateau();

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
			caseDestination = getCaseByIndex(
				parseInt(pacManCase) - sizeCaseWidth
			);
			break;
		case "ArrowRight":
			//déplace PM de 1 vers la droite
			caseDestination = getCaseByIndex(parseInt(pacManCase) + 1);
			break;
		case "ArrowLeft":
			//déplace PM de 1 vers la gauche
			caseDestination = getCaseByIndex(parseInt(pacManCase) - 1);
			break;
		case "ArrowDown":
			caseDestination = getCaseByIndex(
				parseInt(pacManCase) + sizeCaseWidth
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
