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
let primeiraFruta = '...';
let segundaFruta = '...';

const checar_Cartas = (primeiraFruta, segundaFruta) => {
   
   console.log(" Dentro de checa carta = Pripeira fruta é ... ", primeiraFruta);
   console.log(" Dentro de checa carta = Segunda fruta é ... ", segundaFruta);
   console.log("primeiraCarta", primeiraCarta);
   console.log("SegundaCarta", segundaCarta);
   // let idCartaMatch = document.getElementsByClassName('primeiraFruta')
   
   if (primeiraFruta === segundaFruta){
         a = primeiraCarta.childNodes[0];
         b = segundaCarta.childNodes[0];
         a.style.transform = "scale(1.1)";
         b.style.transform = "scale(1.1)";
         // a.style.backgroundImage = 'url("./images/jogo_da_memoria/ok.jpg")';
      setTimeout(() => {
         // style.primeiraFruta(transform: scale(1.1));
         // primeiraCarta.querySelectorAll();
         
         
         console.log("a = ", a);
         a.style.backgroundImage = `url("./images/jogo_da_memoria/ok.jpg")`;
         b.style.backgroundImage = `url("./images/jogo_da_memoria/ok.jpg")`;
        
         // aumenta tamanho das cartas
         //toca som
         //animação
         //troca imagem das cartas para ok com uma classe com bg imagem important???
        
         console.log("Delayed for 1 second.");
       }, 1000);

       setTimeout(() => {
         a.style.transform = "scale(1.0)";
         b.style.transform = "scale(1.0)";
         primeiraCarta = '';
         segundaCarta = '';
       },1100);
       

      console.log("sao iguais PARABÉNS!");


      
   } else {
      a = primeiraCarta.childNodes[0];
      b = segundaCarta.childNodes[0];
      a.style.transform = "scale(1.1)";
      b.style.transform = "scale(1.1)";
      setTimeout(() => {

         console.log("Delayed for 1 second.");
       }, 1000);
      setTimeout(() => {
         a.style.transform = "scale(1.0)";
         b.style.transform = "scale(1.0)";

         //desvira as cartas
         
         primeiraCarta = '';
         segundaCarta = '';
         
      },1100);
       
      console.log("sao Diferentes");
      // setTimeout ( () => {
      //    primeiraCarta.classList.remove('revela-carta');
      //    segundaCarta.classList.remove('revela-carta');
      //    primeiraCarta = '';
      //    segundaCarta = '';
      // }, 500);
   }
}
revelaCarta = ({ target }) => {
   // console.log(target);
   // console.log("entrou no revela cartas");
   // let segundaFruta = target.getAttribute('data-frutas');
   // console.log("segunda carta tributo = ", segundaFruta);
   
   // let javirou = a_carta.className.("revela-carta");
   // console.log(a_carta);
   // console.log(b_carta);
  
   // if (target.classList == "verso-carta") {
   //    console.log("VERSO");
   // }
   // if (a_carta.classList == ("frente-carta")) {
   //    console.log("FRENTE");
   // }

   if (primeiraCarta === '')
   {
      target.classList.add('revela-carta');
      primeiraCarta = target.parentNode;
      // console.log("PRIMEIRA CARTA ESTAVA VAZIA");
      // console.log("primeiraCarta = ", primeiraCarta.getAttribute('data-frutas'));
      primeiraFruta = primeiraCarta.getAttribute('data-frutas');
      console.log("Primeira FRUTA = ", primeiraFruta);
      
   } else if (segundaCarta === '')
   {
      target.classList.add('revela-carta');
      segundaCarta = target.parentNode;
      // console.log("segundaCarta=",segundaCarta.getAttribute('data-frutas'));
      segundaFruta = segundaCarta.getAttribute('data-frutas');
      console.log("Segunda FRUTA = ", segundaFruta);
      
      checar_Cartas(primeiraFruta , segundaFruta );
   }

   
   

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

