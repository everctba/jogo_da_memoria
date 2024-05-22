//define os grids específicos
const grid01 = document.querySelector(".grid-monta-frase-01");
const grid02 = document.querySelector(".grid-monta-frase-02");


//serie de cartas
const Cartas01 = [
   'cheiro',
   'falo',
   'ouco',
   'penco',
   'sinto',
   'vejo'
];

const Cartas02 = [
   'calor',
   'sorvete',
   'pipa',
   'correr',
   'bicicleta',
   'quebracabeca',
   'tocar',
   'pintar',
   'estudar',
   'brincar',
   'cantar',
   'pular',
   'basquete',
   'futebol',
   'videogame',
   'fruta',
   'musica',
   'ler'

];



const criaDiv = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   // element.createTextNode("titulo");
   return element;
}

const createCard01 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode("titulo");// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/01/${frente}.jpg")`;
   
   // console.log(textoCarta);
   
   const textoCarta1 = document.createTextNode('titulo');
   
   cartaIlustrada.appendChild(textoCarta);
   card.appendChild(cartaIlustrada);
   // card.appendChild(textoCarta);
   // card.appendChild(textoCarta);
   grid01.appendChild(card);

   const txtLegenda = document.getElementsByTagName('text');
   // txtLegenda.createTextNode("titulo");
   // textoCarta1.appendChild(txtLegenda);
   return card;
}

const createCard02 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   const cartaIlustrada = criaDiv('div',' card face verso-carta');
  
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/02/${frente}.jpg")`;
   card.appendChild(cartaIlustrada);
   grid02.appendChild(card);
  
   return card;
}
const carregaCartas01 = () => {
   Cartas01.forEach((frente) => {
      const card = createCard01(frente);
      grid01.appendChild(card);
      card.setAttribute('data-carta', frente);
   })   
}
const carregaCartas02 = () => {
   Cartas02.forEach((frente) => {
      const card = createCard02(frente);
      grid02.appendChild(card);
      card.setAttribute('data-carta', frente);
   })   
}

// const criaDivLinha = () => {
//    const element = document.createElement('div');
//    element.className = ('centraliza-linha', 'linha-montar-frase');
  
//    element.style.backgroundImage = `url("./images/menu/linha3.png")`;
//    console.log("criadiv");
//    grid01.appendChild(element);
//    return element;
// }


carregaCartas01();
createCard01(Cartas01);

carregaCartas02();
createCard02(Cartas02);


// Cartas01.forEach((element) => console.log(element));