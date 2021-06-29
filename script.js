function run() {
	let annee = prompt("Quelle est votre année de naissance ?");
	let date = new Date().getFullYear();
	let result = (date - annee) * 365;
	
	/*création des éléments nécéssaire avec leurs attributs*/
	let nouveauDiv = document.createElement('div');
	nouveauDiv.setAttribute('class', 'cont');
	let h4 = document.createElement('h4');
	h4.setAttribute('id', 'resultat');
	
	/*création du texte à affiché, ici on affiche le resultat du calcul*/
	let contenu = document.createTextNode("Votre âge en jours est " + result + " jours");
	
	/*on affecte le contenu texte à l'élément h4 et ce dernier à l'élément div qui a la class cont qu'on vient de créer*/
	h4.appendChild(contenu);
	nouveauDiv.appendChild(h4);
	
	/*on personnalise le style du texte à afficher*/
	h4.style.textAlign="center";
	h4.style.color = "blue";
	h4.style.fontSize = 20 + "px";

	/*en dernier, on cible l'endroit où on veut placer le texte qui est dans le div de class cont*/
	let div = document.querySelector('.affichage .content');
	div.appendChild(nouveauDiv);
}

function remove() {
	/*on cible d'abord l'élément à supprimer, ici c'es le div qu'on vient de créer en haut qui a la class cont*/
	 let cible = document.querySelector('.affichage .content .cont');
	 cible.remove(); /* et on le supprime directement*/
	
}




	

