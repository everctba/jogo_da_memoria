const grid = document.querySelector(".grid");
let a_carta = document.getElementsByClassName("frente-carta");
let b_carta = [...document.getElementsByClassName("frente-carta")];

//Teste de som
let  audioAcerto = new Audio("../HTML%20Jogo%20da%20memoria/som/acerto.wav");
let  audioErro = new Audio("../HTML%20Jogo%20da%20memoria/som/erro.wav");

const frutas = [
   'abacaxi',
   'abacate',
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
var naoVira1;
var naoVira2;
let aDivCerta;


const checar_Cartas = (primeiraFruta, segundaFruta, naoVira1) => {
   console.log(" ------------------------------------------------------------... ");
   console.log(" Dentro de checa carta = Pripeira fruta é ... ", primeiraFruta);
   console.log(" Dentro de checa carta = Segunda fruta é ... ", segundaFruta);
   console.log("primeiraCarta", primeiraCarta);
   console.log("SegundaCarta", segundaCarta);
   // let idCartaMatch = document.getElementsByClassName('primeiraFruta')
   a = primeiraCarta.childNodes[0];
   b = segundaCarta.childNodes[0];
   //c e d são referentes a mesma carta por isso um pega 1 dive e outro outra
   c = primeiraCarta.childNodes[1];
   d = segundaCarta.childNodes[0];
   //Pega as dives transforma em não clicaveis por display none
   e = primeiraCarta.childNodes[1];
   f = segundaCarta.childNodes[1];
   
   
   console.log(" a = primeiraCarta[0] =", a);
   // naoVira1 = a.getAttribute('data-metch');
   naoVira2 = b.getAttribute('data-metch');
   console.log(" ........................... ");
   
   console.log("data-metch carregado A DATA MATCH = ", naoVira1);
   console.log("data-metch carregado B DATA MATCH = ", naoVira2);
   // console.log("data-metch carregado b = ", naoVira2);

   // if (a.style.backgroundImage === `url("./images/jogo_da_memoria/ok.jpg")`) {
   //    console.log("PIOR QUE A CARTA JÁ TA COM O MATCH FEITO = "); 
   //    falgCartaOk = true;
   // }

   if (naoVira2 === naoVira1 ){
      console.log("VIX era a mesma CARTA!");
      console.log("VIX PRIMEIRA ANTESSSSS C CARTA! = ",c);
      console.log("VIX PRIMEIRA ANTESSSSS D CARTA! = ",d);
      c.classList.remove('revela-carta');
      d.classList.remove('revela-carta');

      console.log("Com DATA = ",d);
      d.removeAttribute('data-metch');
      console.log("Sem DATA = ",d);

      primeiraCarta = '';
      segundaCarta = '';
      console.log("VIX PRIMEIRA  CARTA! = ",d);
      audioErro.play();
      
   }else{
      if (primeiraFruta === segundaFruta && 
         (a.style.backgroundImage !== `url("./images/jogo_da_memoria/ok.jpg")`) 
         && (b.style.backgroundImage !== `url("./images/jogo_da_memoria/ok.jpg")`) ){
         console.log("ENTROU POIS CARTAS SÂO IGUAIS!!!");
            console.log("Com DATA = ",a);
            a.removeAttribute('data-metch');
            console.log("Sem DATA = ",a);

            //identifica as cartds
            console.log(" e = É Segunda Div[1] =", e);
            console.log(" f = É Segunda Div?[1] =", f);
            e.style.display = 'none';
            f.style.display = 'none';
            // toca audio que acertou
            audioAcerto.play();
            
            a.style.transform = "scale(1.1)";
            b.style.transform = "scale(1.1)";
            // a.style.backgroundImage = 'url("./images/jogo_da_memoria/ok.jpg")';
         setTimeout(() => {
            // style.primeiraFruta(transform: scale(1.1));
            // primeiraCarta.querySelectorAll();
            
            
            console.log("a = ", a);
            a.style.backgroundImage = `url("./images/jogo_da_memoria/ok.jpg")`;
            b.style.backgroundImage = `url("./images/jogo_da_memoria/ok.jpg")`;
         
            a.classList.add('cartacerta-z-index');
            b.classList.add('cartacerta-z-index');
            a.setAttribute('disabled', '');
            b.setAttribute('disabled', '');
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


         
      } else {  // se cartas são diferente ele desvira as cartas e reseta
         // Compara pra ver se as 2 ainda não tem o Chek de ok 
         if (a.style.backgroundImage !== `url("./images/jogo_da_memoria/ok.jpg")`  &&  
            b.style.backgroundImage !== `url("./images/jogo_da_memoria/ok.jpg")`) {
            console.log("ENTROU NO IFFFFFFF São diferentes");  
            a = primeiraCarta.childNodes[0];
            b = segundaCarta.childNodes[0];
            a.style.transform = "scale(1.1)";
            b.style.transform = "scale(1.1)";
         }
         audioErro.play();
         a = primeiraCarta.childNodes[0];
         b = segundaCarta.childNodes[0];

         if (a.style.backgroundImage === `url("./images/jogo_da_memoria/ok.jpg")`  ||  
            b.style.backgroundImage === `url("./images/jogo_da_memoria/ok.jpg")`) {

               console.log("PUTAMERDA JA TINHA ACERTADO A PRIMEIRA EM!.");

               if (a.style.backgroundImage === `url("./images/jogo_da_memoria/ok.jpg")`){

                  primeiraCarta = '';
                  segundaCarta = '';
                  setTimeout(() => {
                     a.style.opacity = "0.3";
                     b.style.opacity = "0.3";
                  } ,150);
                  setTimeout(() => {
                     a.style.opacity = "1.0";
                     b.style.opacity = "1.0";
                  } ,550);
                  // zerra data-metch
                  a.removeAttribute('data-metch');
                  b.removeAttribute('data-metch');
                  e.removeAttribute('data-metch');
                  f.removeAttribute('data-metch');
                  var carta1revelacarta = document.querySelectorAll('.revela-carta');
                  console.log("carta1revelacarta = ", carta1revelacarta);
                  for (var i = 0; i < carta1revelacarta.length; i++) {
   
                  carta1revelacarta[i].classList.remove('revela-carta');
               
                  console.log("carta1revelacarta = ", carta1revelacarta[i]);
         
               }
                  
               }
               if (b.style.backgroundImage === `url("./images/jogo_da_memoria/ok.jpg")`)  {
                 console.log("PUTAMERDA JA TINHA ACERTADO A SEGUNDA EM!.");

                 setTimeout(() => {
                  a.style.opacity = "0.3";
                  b.style.opacity = "0.3";
               } ,150);
               setTimeout(() => {
                  a.style.opacity = "1.0";
                  b.style.opacity = "1.0";
               } ,550);

                  // zerra data-metch
                  a.removeAttribute('data-metch');
                  b.removeAttribute('data-metch');
                  e.removeAttribute('data-metch');
                  f.removeAttribute('data-metch'); 

                 var carta1revelacarta = document.querySelectorAll('.revela-carta');
                 console.log("carta1revelacarta = ", carta1revelacarta);
                 for (var i = 0; i < carta1revelacarta.length; i++) {
     
                    carta1revelacarta[i].classList.remove('revela-carta');
                 
                    console.log("carta1revelacarta = ", carta1revelacarta[i]);
           
                 }
               
               primeiraCarta = '';
               segundaCarta = '';
              }
               
               


         } else{
            setTimeout(() => {
            
               console.log("Delayed for 1 second - CARTAS DIFERNETES.");
            }, 1000);
   
            setTimeout(() => {
               a.style.transform = "scale(1.0)";
               b.style.transform = "scale(1.0)";
               console.log("priemira carta 1 =", primeiraCarta);
               // Deleta Class de revela carta pra desvirar a carta que nao deu match
               primeiraCarta.classList.remove('revela-carta');
               // segundaCarta.children.classList.remove('revela-carta');
               console.log("priemira carta 2 =", primeiraCarta);
               // console.log("priemira carta 3 =", primeiraCarta[0]);
               
               //remove o data da primera carta se der erro
               console.log("Com DATA = ",a);
               a.removeAttribute('data-metch');
               console.log("Sem DATA = ",a);   
   
   
               var carta1revelacarta = document.querySelectorAll('.revela-carta');
               console.log("carta1revelacarta = ", carta1revelacarta);
               for (var i = 0; i < carta1revelacarta.length; i++) {
   
                  carta1revelacarta[i].classList.remove('revela-carta');
               
                  console.log("carta1revelacarta = ", carta1revelacarta[i]);
         
               }
   
               primeiraCarta = '';
               segundaCarta = '';
               
               
               //desvira as cartas
            
               
            },1100); 
            
         }

         
         
         console.log("sao Diferentes");
         // falgCartaOk = false;
         // setTimeout ( () => {
            
         //    primeiraCarta = '';
         //    segundaCarta = '';
         // }, 500);
   }
      
   
   }
  
}
revelaCarta = ({ target }) => {
 

   if (primeiraCarta === '')
   {
      target.classList.add('revela-carta');
      primeiraCarta = target.parentNode;
      // console.log("PRIMEIRA CARTA ESTAVA VAZIA");
      // console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIprimeiraCarta = ", primeiraCarta);

      aDivCerta = primeiraCarta.childNodes[0];
      console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIII A Div CERTA! = ", aDivCerta);
      // pega a div certa pra adicionar  a tag para depois comparar e não virar 2 vezes
      // Diciona TAG de data marcando para nao virar a carta novamente
      naoVira1 = aDivCerta.setAttribute('data-metch', 'não-vira');
      naoVira1 = aDivCerta.getAttribute('data-metch');
      console.log("...................a com o Atributo de data ",naoVira1);
      //.........................................................


      primeiraFruta = primeiraCarta.getAttribute('data-frutas');
      console.log("Primeira FRUTA = ", primeiraFruta);
      
   } else if (segundaCarta === '')
   {
      target.classList.add('revela-carta');
      segundaCarta = target.parentNode;
      // console.log("segundaCarta=",segundaCarta.getAttribute('data-frutas'));
      segundaFruta = segundaCarta.getAttribute('data-frutas');
      console.log("Segunda FRUTA = ", segundaFruta);
      console.log("---------------------- = ", segundaFruta);
      console.log("segundaCarta = ", segundaCarta);
      checar_Cartas(primeiraFruta , segundaFruta, naoVira1 );
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

