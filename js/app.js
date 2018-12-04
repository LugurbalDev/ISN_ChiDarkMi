let liste = document.getElementsByClassName("liste");
let sections = document.getElementsByTagName("section");

let gameDifficulty = document.getElementsByClassName('difficulty')

let choixPlayer = document.getElementById("choixPlayer");
let choixOrdi = document.getElementById('choixOrdi')

let imgChoixPlayer;


function changeMenu(NbBouton) {
    liste[NbBouton].addEventListener('click', function () {
        for (let i = 0; i < liste.length; i++) {
            sections[i].style.display = "none"
        }
        sections[NbBouton].style.display = "block"
    })
}

for(let i = 0; i < gameDifficulty.length; i++){
    if(localStorage.getItem('id') == "vsOrdi"){
        gameDifficulty[0].setAttribute('checked','checked')
    } else if (localStorage.getItem('id') == "2players"){
        gameDifficulty[1].setAttribute('checked','checked')
    }
    gameDifficulty[i].addEventListener('click',function(){
        gameDifficulty[i].setAttribute('checked','checked')
        localStorage.setItem('id',gameDifficulty[i].getAttribute('id'))
        location.reload()
    })
}

for (let i = 0; i < liste.length; i++) {
    changeMenu(i)
}


function DragStart(event){
    event.dataTransfer.setData('Text',event.target.getAttribute('src'))
}

document.addEventListener('dragstart',DragStart);


function Dragover(event){
    event.preventDefault();
}

choixPlayer.addEventListener('dragover',Dragover)

function Drop(event){
    console.log(this.id)
    event.target.style.backgroundImage = `url(${event.dataTransfer.getData('Text')}`
    imgChoixPlayer = event.dataTransfer.getData('Text')
}


choixPlayer.addEventListener('drop',Drop)

let tableauObjet = ["darksathi","laser","pierre","papier","yoda"]

let nbreObjets = tableauObjet.length;

if(gameDifficulty[0].checked){
    console.log(imgChoixPlayer)
    let choixAleatOrdi = Math.floor(Math.random() * nbreObjets)
    let provImgChoixPlayer = imgChoixPlayer.substr(10)
    imgChoixPlayer = provImgChoixPlayer.substr(0,provImgChoixPlayer.lastIndexOf('.'))
    //console.log(imgChoixPlayer)
}