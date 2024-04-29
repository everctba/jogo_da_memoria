const grid = document.querySelector(".grid");
let a_carta = document.getElementsByClassName("frente-carta");
let b_carta = [...document.getElementsByClassName("frente-carta")];

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
let primeiraCarta = '';
let segundaCarta = '';

const checar_Cartas = () => {
   const primeiraFruta = primeiraCarta.getAttribute('data-fruta');
   const segundaFruta = segundaCarta.getAttribute('data-fruta');
   console.log(primeiraFruta);
   if (primeiraFruta == segundaFruta){

      console.log("sao iguais NANANAN");
      
   } else {
      console.log("sao Diferentes");
      setTimeout ( () => {
         primeiraCarta.classList.remove('revela-carta');
         segundaCarta.classList.remove('revela-carta');
         primeiraCarta = '';
         segundaCarta = '';
      }, 500);
   }
}
revelaCarta = ({ target }) => {
   console.log(target);
   
   // let javirou = a_carta.className.("revela-carta");
   // console.log(a_carta);
   // console.log(b_carta);
  
   if (target.classList == "verso-carta") {
      console.log("VERSO");
   }
   if (a_carta.classList == ("frente-carta")) {
      console.log("FRENTE");
   }

   if (primeiraCarta == ''){
      target.classList.add('revela-carta');
      primeiraCarta = target.parentNode;
      console.log("PRIMEIRA CARTA VAZIA");
   } else if (segundaCarta == ''){
      target.classList.add('revela-carta');
      segundaCarta = target.parentNode;
      console.log("SEGUNDA CARTA VAZIA");
   }

   checar_Cartas();

   // target.classList.add('revela-carta');




   // if (a_carta)
   //    console.log("tem a carta!!!");
   //    console.log(a_carta);
   //    
      
   
   // console.log(document.getElementsByClassName("verso-carta"));
   // if (target.document.getElementsByClassName("verso-carta"));
   // // if (a_carta.classList.contains('revela-carta')) {
   //    a_carta.classList.replace('revela-carta', "");
   // }

}

const createCard = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const front = criaDiv('div',' card face verso-carta');
   const back = criaDiv('div', 'card face frente-carta');

   front.style.backgroundImage = `url("./images/jogo_da_memoria/${frente}.jpg")`;
   card.appendChild(front);
   card.appendChild(back);
   grid.appendChild(card);

   card.addEventListener('click', revelaCarta);
   card.setAttribute('data-frutas', frente);
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

