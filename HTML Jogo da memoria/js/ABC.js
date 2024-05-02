const grid = document.querySelector(".grid-abc");




const abcCartas = [
   '0',
   '1',
   '2',
   '3',
   '4',
   '5',
   'a',
   'b',
   'c',
   'd',
   'e',
   'f',
];


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
   })   
   
}
carregaCartas();
createCard(abcCartas);
console.log(grid);
