const grid = document.querySelector(".grid");

const frutas = [
   'abacate',
   'abacaxi',
   'laranja',
   'maca',
   'melancia',
   'uva',
   'abacate',
   'abacaxi',
   'laranja',
   'maca',
   'melancia',
   'uva',
];

const criaDiv = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
}

const createCard = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const front = criaDiv('div','card face verso-carta');
   const back = criaDiv('div','card face frente-carta');

   front.style.backgroundImage = `url("./images/jogo_da_memoria/${frente}.jpg")`;
   card.appendChild(front);
   card.appendChild(back);
   grid.appendChild(card);
   return card;
}

const loadGame = () => {
   //const arrayEspalhado = [ ...frutas,...frutas]; //so pra não precisar duplicar os nomes manualmente na lista
   const listaAleatoria = frutas.sort(()=> Math.random() - 0.5);
   
   listaAleatoria.forEach((frente) => {
      const card = createCard(frente);
      grid.appendChild(card);
   })   
   
}
loadGame();

