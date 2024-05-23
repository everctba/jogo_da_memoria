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
   // console.log(target);
   const pai = target.parentNode;
   // console.log(pai);
   var nomeCarta = pai.dataset.carta
   // console.log("nome carta = ", nomeCarta);
   console.log(nomeCarta);
   let  audioTemp = new Audio(`../HTML%20Jogo%20da%20memoria/som/abc/${nomeCarta}.mp3`);
   audioTemp.play();
  

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

   for (var i = 0; i < 1; i++) {
      abcCartas.forEach((frente) => {
         var card = createCard(frente);
         grid.appendChild(card);
         console.log("Adicionou carta numero = ", [i]);
         card.setAttribute('data-carta', frente);  
        
      })   

   }
  
}
carregaCartas();
createCard(abcCartas);



// console.log(grid);
const clicadoAgora = document.getElementsByClassName("tamanho-carta");

// const elementA = clicadoAgora.dataset();
// console.log(elementA);
// for (let i = 0; i < clicadoAgora.length; i++) {
//    let a = clicadoAgora.dataset.carta;
//    console.log(a);
//    }

// let a = clicadoAgora.dataset.carta;
// // console.log(a);
// const a1 = clicadoAgora.getAttribute("data-carta");
// clicadoAgora.forEach( e =>{
//    console.log(e);
// })
console.log(clicadoAgora[1]);
// console.log(a);


// var clicadoAgora = document.getElementsByClassName("tamanho-carta");
// console.log(clicadoAgora);

for (var i = 0; i < clicadoAgora.length; i++) {
   
   clicadoAgora[i].addEventListener("click", printE);

   console.log("clicadoAgora i  = ", clicadoAgora[i]);




}

// clicadoAgora[0].addEventListener("click", printE);
// clicadoAgora[1].addEventListener("click", printE);
// clicadoAgora[2].addEventListener("click", printE);
// clicadoAgora[3].addEventListener("click", printE);
// clicadoAgora[4].addEventListener("click", printE);
// clicadoAgora[5].addEventListener("click", printE);
// clicado.addEventListener("click", printE);

// clicadoAgora.dataset.addEventListener("click", printE);
// if (clicadoAgora.dataset.carta === "a") {
//    console.log("foi clicado no ", e);
// };

