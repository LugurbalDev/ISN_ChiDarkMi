let liste = document.getElementsByClassName("liste");
let sections = document.getElementsByTagName("section");

let gameDifficulty = document.getElementsByClassName('difficulty')

console.log(gameDifficulty)


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

let choixPlayer = document.getElementById("choixPlayer");


function DragStart(event){
    event.dataTransfer.setData('Text',event.target.getAttribute('src'))
}

document.addEventListener('dragstart',DragStart);


function Dragover(event){
    event.preventDefault();
}

choixPlayer.addEventListener('dragover',Dragover)


function Drop(event){
    event.target.style.backgroundImage = `url(${event.dataTransfer.getData('Text')}`
}

choixPlayer.addEventListener('drop',Drop)

let tableauObjet = ["darksathi","laser","pierre","papier","yoda"]

let nbreObjets = tableauObjet.length;

console.log(nbreObjets)

gameDifficulty[0].addEventListener('click',function(){

})