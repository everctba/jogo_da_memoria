const grid = document.querySelector(".grid-abc");

let  audioA = new Audio("../HTML%20Jogo%20da%20memoria/som/abc/a.mp3");
let  audioB = new Audio("../HTML%20Jogo%20da%20memoria/som/abc/b.mp3");
let  audioC = new Audio("../HTML%20Jogo%20da%20memoria/som/abc/c.mp3");
let  audioD = new Audio("../HTML%20Jogo%20da%20memoria/som/abc/d.mp3");


const abcCartas = [
   'a',
   'b',
   'c',
   'd',
   'e',
   'f',
   'g',
   'h',
   'i',
   'j',
   'k',
   'l',
   'm',
   'n',
   'o',
   'p',
   'q',
   'r',
   's',
   't',
   'u',
   'v',
   'w',
   'x',
   'y',
   'z',
   '0',
   '1',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   
];

printE = ({target}) => {
   console.log("entrou no click do botao add event listener");
   console.log(target);
}



const criaDiv = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
}

const createCard = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const cartaIlustrada = criaDiv('div',' card face verso-carta');
 
   cartaIlustrada.style.backgroundImage = `url("./images/abc/${frente}.jpg")`;
   card.appendChild(cartaIlustrada);
   grid.appendChild(card);
   
   // card.addEventListener('click', revelaCarta);
   // card.setAttribute('data-frutas', frente);
   return card;
}


const carregaCartas = () => {
   abcCartas.forEach((frente) => {
      const card = createCard(frente);
      grid.appendChild(card);
      card.setAttribute('data-carta', frente);
   })   
   
}
carregaCartas();
createCard(abcCartas);



// console.log(grid);
var clicadoAgora = document.querySelectorAll("data-carta");
console.log(clicadoAgora);
// var clicadoAgora = document.getElementsByClassName("tamanho-carta");
// console.log(clicadoAgora);

// for (var i = 0; i < clicadoAgora.length; i++) {
   
//    clicadoAgora[i].addEventListener("click", printE);

//    console.log("clicadoAgora i  = ", clicadoAgora[i]);

// }



// clicadoAgora.addEventListener('click', function(e){
//    console.log("foi clicado no ", e);
// }); 
// clicado.addEventListener("click", printE);

// clicadoAgora.dataset.addEventListener("click", printE);
// if (clicadoAgora.dataset.carta === "a") {
//    console.log("foi clicado no ", e);
// };


audioA.play();
audioB.play();
audioC.play();
