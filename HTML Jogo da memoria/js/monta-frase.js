const grid01 = document.querySelector(".grid-monta-frase-01");

const Cartas01 = [
   'cheiro',
   'falo',
   'ouco',
   'penco',
   'sinto',
   'vejo'
];

const criaDiv = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
}

const createCard = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const cartaIlustrada = criaDiv('div',' card face verso-carta');
 
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/01/${frente}.jpg")`;
   card.appendChild(cartaIlustrada);
   grid01.appendChild(card);
  
   return card;
}

const carregaCartas = () => {
   Cartas01.forEach((frente) => {
      const card = createCard(frente);
      grid01.appendChild(card);
      card.setAttribute('data-carta', frente);
   }) 
   // for (var i = 0, len = Cartas01.length; i < len-1; ++i) {
   //    const card = createCard(Cartas01[i]);
   //    grid01.appendChild(card);
   //    card.setAttribute('data-carta', Cartas01[i]);
   // }
   
}
carregaCartas();
createCard(Cartas01);

Cartas01.forEach((element) => console.log(element));