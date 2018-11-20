let liste = document.getElementsByClassName("liste");
let sections = document.getElementsByTagName("section");


function changeMenu(NbBouton) {
    liste[NbBouton].addEventListener('click', function () {
        for (let i = 0; i < liste.length; i++) {
            sections[i].style.display = "none"
        }
        sections[NbBouton].style.display = "block"
    })
}

for (let i = 0; i < liste.length; i++) {
    changeMenu(i)
}

let mode = document.getElementsByClassName("difficulty");


let ordi = document.getElementById("ordi"),
    humain = document.getElementById("humain"),
    result = document.getElementById("result");
// Récupération des images de séléction
let logos = document.getElementsByClassName("logo");

/* Choix aléatoire  de l'ordinateur entre 1 et 5
La variable choixAleatoireOrdinateur référence un entier de l'intervalle [0;nombreObjet - 1] */

const nombreObjet = 5;

let tableuObjet = ['laser', 'papier', 'pierre', 'darksathi', 'yoda'];

/*
Ajouter une valeur dans un tableau
tableuObjet.push("DarkSathi")
**/
let choixAleatoireOrdinateur = Math.floor(nombreObjet * Math.random());

for(let i = 0; i < logos.length;i++){
    logos[i].setAttribute('onclick',`choicePlayer1(${i})`)
}

function choicePlayer1(){
    for(let i = 0; i < logos.length;i++){

        logos[i].addEventListener('click',function(){
            return i;
        })
    }
}

console.log(choicePlayer1());

let choixHumain = choicePlayer1();

/**
Math.floor tronque le nombre donné en paramètre
**/
console.log(`Choix ordinateur : ${tableuObjet[choixAleatoireOrdinateur]}`);



//let choixHumain = parseInt(window.prompt("Choisir un nombre entier entre 0 et 2"))

ordi.innerHTML = `<p class='textChoix'>Choix de l'ordinateur :</p> <img src='imgs/${tableuObjet[choixAleatoireOrdinateur]}.png' class='choix'>`;

humain.innerHTML = `<p class='textChoix'>Votre choix :</p> <img src='imgs/${tableuObjet[choixHumain]}.png' class='choix'>`;

console.log(`Choix humain : ${tableuObjet[choixHumain]}`);


if (choixHumain == choixAleatoireOrdinateur) {
    console.log("Partie nulle !");
    result.innerHTML = "Partie nulle !"
}

if (choixHumain > choixAleatoireOrdinateur) {

    let somme = choixHumain + choixAleatoireOrdinateur;


    switch (somme) {
        case 1:
            console.log('Ordi gagne');
            result.innerHTML = "L'ordi a gagné !";
            break
        case 2:
            console.log("Humain gagne");
            result.innerHTML = "Vous avez gagné !";
            break
        case 3:
            if (choixAleatoireOrdinateur == 0) {
                console.log('Humain gagne');
                result.innerHTML = "Vous avez gagné !";
                break
            } else {
                console.log("Ordi gagne");
                result.innerHTML = "L'ordi a gagné";
                break
            }
        case 4:
            console.log("Ordi gagne");
            result.innerHTML = "L'ordi a gagné !";
            break
        case 5:
            console.log('Humain gagne');
            result.innerHTML = "Vous avez gagné !";
            break
    }
}

result.style.color = 'white';

if (choixHumain < choixAleatoireOrdinateur) {

    let somme = choixHumain + choixAleatoireOrdinateur;

    console.log(`Somme = ${somme}`);

    switch (somme) {
        case 1:
            console.log("Humain gagne");
            result.innerHTML = "Vous avez gagné !";
            break
        case 2:
            console.log("Ordi gagne");
            result.innerHTML = "L'ordi a gagné";
            break
        case 3:
            if (choixHumain == 0) {
                console.log("Ordi gagne !");
                result.innerHTML = "L'ordi a gagné";
                break
            } else {
                console.log("Humain gagne");
                result.innerHTML = "Vous avez gagné !";
                break
            }
        case 4:
            console.log("Humain gagne");
            result.innerHTML = "Vous avez gagné !";
            break
        case 5:
            console.log("Ordi gagne");
            result.innerHTML = "L'ordi a gagné !";
            break
    }
}

/*for(i in tableuObjet){
    console.log(tableuObjet[i])
} */
