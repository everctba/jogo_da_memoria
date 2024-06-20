let pato = document.getElementsByClassName("pato");
let opcaoPato1 = document.getElementsByClassName("opcao-pato-1");
let opcaoPato2 = document.getElementsByClassName("opcao-pato-2");
let opcaoPato3 = document.getElementsByClassName("opcao-pato-3");
let confetiPato = document.getElementsByClassName("confeti-pato");

let porco = document.getElementsByClassName("porco");
let opcaoPorco1 = document.getElementsByClassName("opcao-porco-1");
let opcaoPorco2 = document.getElementsByClassName("opcao-porco-2");
let opcaoPorco3 = document.getElementsByClassName("opcao-porco-3");
let confetiPorco = document.getElementsByClassName("confeti-porco");

let frango = document.getElementsByClassName("frango");
let vaca = document.getElementsByClassName("vaca");
let ovelha = document.getElementsByClassName("ovelha");
let cavalo = document.getElementsByClassName("cavalo");
let coelho = document.getElementsByClassName("coelho");
let bode = document.getElementsByClassName("bode");
let gato = document.getElementsByClassName("gato");
// patoData = pato.getAttribute('data-opcao');

let card_menu_pato = document.getElementById("card-menu-pato")
let card_menu_porco = document.getElementById("card-menu-porco")
let card_menu_frango = document.getElementById("card-menu-frango")
let card_menu_vaca = document.getElementById("card-menu-vaca")
let card_menu_ovelha = document.getElementById("card-menu-ovelha")
let card_menu_cavalo = document.getElementById("card-menu-cavalo")
let card_menu_coelho = document.getElementById("card-menu-coelho")
let card_menu_bode = document.getElementById("card-menu-bode")
let card_menu_gato = document.getElementById("card-menu-gato")
abre_menu_pato = ({ target }) => {
   console.log("Entrou no abre menu PATO  = ", pato);
   card_menu_pato.style.display = "flex"; 
   setTimeout(() => {
      card_menu_pato.style.opacity = "100%";  
   } ,350);
}

abre_menu_porco = ({ target }) => {
   console.log("Entrou no abre menu PORCO = ", porco);
   console.log("card_menu_porco = ", card_menu_porco);
   card_menu_porco.style.display = "flex";
   setTimeout(() => {
      card_menu_porco.style.opacity = "100%";  
   } ,350);
}
abre_menu_frango = ({ target }) => {
   console.log("Entrou no abre menu FRANGO = ", frango);
   card_menu_frango.style.display = "flex";
}
abre_menu_vaca = ({ target }) => {
   console.log("Entrou no abre menu VACA = ", vaca);
   card_menu_vaca.style.display = "flex";
}
abre_menu_ovelha = ({ target }) => {
   console.log("Entrou no abre menu OVELHA = ", ovelha);
   card_menu_ovelha.style.display = "flex";
}
abre_menu_cavalo = ({ target }) => {
   console.log("Entrou no abre menu CAVALO = ", cavalo);
   card_menu_cavalo.style.display = "flex";
}
abre_menu_coelho = ({ target }) => {
   console.log("Entrou no abre menu COELHO = ", coelho);
   card_menu_coelho.style.display = "flex";
}
abre_menu_bode = ({ target }) => {
   console.log("Entrou no abre menu BODE = ", bode);
   card_menu_bode.style.display = "flex";
}
abre_menu_gato = ({ target }) => {
   console.log("Entrou no abre menu GATO = ", gato);
   card_menu_gato.style.display = "flex";
}

pato[0].addEventListener('click', abre_menu_pato);
porco[0].addEventListener('click', abre_menu_porco);
frango[0].addEventListener('click', abre_menu_frango);
vaca[0].addEventListener('click', abre_menu_vaca);
ovelha[0].addEventListener('click', abre_menu_ovelha);
cavalo[0].addEventListener('click', abre_menu_cavalo);
coelho[0].addEventListener('click', abre_menu_coelho);
bode[0].addEventListener('click', abre_menu_bode);
gato[0].addEventListener('click', abre_menu_gato);


opcaoCertaPato = ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoPato1);
   console.log("confeti[0] = ", confetiPato[0]);
   confetiPato[0].style.display = "flex";
   opcaoPato1[0].classList.add("certo-clicado");
   setTimeout(() => {
      card_menu_pato.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_pato.style.display = "none";   
   } ,450);

}
opcaoErradaPato1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoPato2);
   opcaoPato2[0].classList.add("opcao-pos-clique");
   opcaoPato2[0].classList.add("errado-clicado");
   opcaoPato2[0].classList.remove("opcao");
   opcaoPato2[0].classList.remove("errado");

}
opcaoErradaPato2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoPato3);
   opcaoPato3[0].classList.add("opcao-pos-clique");
   opcaoPato3[0].classList.add("errado-clicado");
   opcaoPato3[0].classList.remove("opcao");
   opcaoPato3[0].classList.remove("errado");

}
opcaoCertaPorco = ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoPorco1);
   console.log("confeti[0] = ", confetiPorco[0]);
   confetiPorco[0].style.display = "flex";
   opcaoPorco1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_porco.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_porco.style.display = "none";   
   } ,450);
}
opcaoErradaPorco1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoPorco2);
   opcaoPorco2[0].classList.add("opcao-pos-clique");
   opcaoPorco2[0].classList.add("errado-clicado");
   opcaoPorco2[0].classList.remove("opcao");
   opcaoPorco2[0].classList.remove("errado");

}
opcaoErradaPorco2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoPorco3);
   opcaoPorco3[0].classList.add("opcao-pos-clique");
   opcaoPorco3[0].classList.add("errado-clicado");
   opcaoPorco3[0].classList.remove("opcao");
   opcaoPorco3[0].classList.remove("errado");

}
opcaoPato1[0].addEventListener('click', opcaoCertaPato);
opcaoPato2[0].addEventListener('click', opcaoErradaPato1);
opcaoPato3[0].addEventListener('click', opcaoErradaPato2);

opcaoPorco1[0].addEventListener('click', opcaoCertaPorco);
opcaoPorco2[0].addEventListener('click', opcaoErradaPorco1);
opcaoPorco3[0].addEventListener('click', opcaoErradaPorco2);

