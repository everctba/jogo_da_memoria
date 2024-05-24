//define os grids específicos
const grid01 = document.querySelector(".grid-monta-frase-01");
const grid02 = document.querySelector(".grid-monta-frase-02");
const grid03 = document.querySelector(".grid-monta-frase-03");
const grid04 = document.querySelector(".grid-monta-frase-04");
const grid05 = document.querySelector(".grid-monta-frase-05");


//serie de cartas
const Cartas01 = [
   'Cheiro',
   'Fala',
   'Ouço',
   'Penço',
   'Sinto',
   'Vejo'
];

const Cartas02 = [
   'Calor',
   'Sorvete',
   'Pipa',
   'Correr',
   'Bicicleta',
   'Quebra-Cabeça',
   'Tocar',
   'Pintar',
   'Estudar',
   'Brincar',
   'Cantar',
   'Pular',
   'Basquete',
   'Futebol',
   'Video Game',
   'Fruta',
   'Música',
   'Ler'

];

const Cartas03 = [
   'irmã',
   'irmão',
   'mãe',
   'pai',
   'vovó',
   'vovô'
];

const Cartas04 = [
   'bravo',
   'feliz',
   'impressionado',
   'nervoso',
   'nojo',
   'triste'
];

const Cartas05 = [
   'Pizza',
   'Maçã',
   'Ovo',
   'Café',
   'Geleia',
   'Abacate',
   'Chocolate',
   'Brócolis',
   'Melancia',
   'Batata Frita',
   'Refrigerante',
   'Banana',
   'Morango',
   'Laranja',
   'Uva',
   'Abacaxi'   
   
];

tocaSom = ({target}) => {
   console.log("entrou no click do botao add event listener");
   // console.log(target);
   const pai = target.parentNode;
   // console.log(pai);

   // var flag = ('bounce-in-fwd');
   // pai.className = flag;

   target.classList.add('bounce-in-fwd');

   var nomeCarta = pai.dataset.carta
   
   console.log(nomeCarta);
   // let  audioTemp = new Audio(`../HTML%20Jogo%20da%20memoria/som/abc/${nomeCarta}.mp3`);
   let  audioTemp = new Audio(`../HTML%20Jogo%20da%20memoria/som/monta-frase/erro.wav`);
   audioTemp.play();
  

}


const criaDiv = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   // element.createTextNode("titulo");
   return element;
}

const createCard01 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   var cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode(`${frente}`);// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/01/${frente}.jpg")`;
   
 
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
   var cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode(`${frente}`);// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/02/${frente}.jpg")`;
   cartaIlustrada.appendChild(textoCarta);
   card.appendChild(cartaIlustrada);
   grid02.appendChild(card);
  
   return card;
}
const createCard03 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   var cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode(`${frente}`);// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/03/${frente}.jpg")`;
   cartaIlustrada.appendChild(textoCarta);
   card.appendChild(cartaIlustrada);
   grid03.appendChild(card);
  
   return card;
}
const createCard04 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   var cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode(`${frente}`);// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/04/${frente}.jpg")`;
   cartaIlustrada.appendChild(textoCarta);
   card.appendChild(cartaIlustrada);
   grid04.appendChild(card);
  
   return card;
}
const createCard05 = (frente) => {
   const card = criaDiv('div','tamanho-carta');
   var cartaIlustrada = criaDiv('div',' card face verso-carta');
   
   var textoCarta = criaDiv('text','texto-legenda');
   var conteudoTexto = document.createTextNode(`${frente}`);// textoCarta = document.createTextNode("titulo");
   textoCarta.appendChild(conteudoTexto);
   
   cartaIlustrada.style.backgroundImage = `url("./images/monta_frase/05/${frente}.jpg")`;
   cartaIlustrada.appendChild(textoCarta);
   card.appendChild(cartaIlustrada);
   grid05.appendChild(card);
  
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
const carregaCartas03 = () => {
   Cartas03.forEach((frente) => {
      const card = createCard03(frente);
      grid03.appendChild(card);
      card.setAttribute('data-carta', frente);
   })   
}
const carregaCartas04 = () => {
   Cartas04.forEach((frente) => {
      const card = createCard04(frente);
      grid04.appendChild(card);
      card.setAttribute('data-carta', frente);
   })   
}
const carregaCartas05 = () => {
   Cartas05.forEach((frente) => {
      const card = createCard05(frente);
      grid05.appendChild(card);
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
// createCard01(Cartas01);

carregaCartas02();
// createCard02(Cartas02);

carregaCartas03();
// createCard03(Cartas03);

carregaCartas04();
// createCard04(Cartas04);

carregaCartas05();
// createCard05(Cartas05);


const clicadoAgora = document.getElementsByClassName("tamanho-carta");
console.log(clicadoAgora[1]);

for (var i = 0; i < clicadoAgora.length; i++) {
   
   clicadoAgora[i].addEventListener("click", tocaSom);
   


   console.log("clicadoAgora i  = ", clicadoAgora[i]);




}