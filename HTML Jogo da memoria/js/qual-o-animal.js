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
let opcaoFrango1 = document.getElementsByClassName("opcao-frango-1");
let opcaoFrango2 = document.getElementsByClassName("opcao-frango-2");
let opcaoFrango3 = document.getElementsByClassName("opcao-frango-3");
let confetiFrango = document.getElementsByClassName("confeti-frango");

let vaca = document.getElementsByClassName("vaca");
let opcaoVaca1 = document.getElementsByClassName("opcao-vaca-1");
let opcaoVaca2 = document.getElementsByClassName("opcao-vaca-2");
let opcaoVaca3 = document.getElementsByClassName("opcao-vaca-3");
let confetiVaca = document.getElementsByClassName("confeti-vaca");

let ovelha = document.getElementsByClassName("ovelha");
let opcaoOvelha1 = document.getElementsByClassName("opcao-ovelha-1");
let opcaoOvelha2 = document.getElementsByClassName("opcao-ovelha-2");
let opcaoOvelha3 = document.getElementsByClassName("opcao-ovelha-3");
let confetiOvelha = document.getElementsByClassName("confeti-ovelha");

let cavalo = document.getElementsByClassName("cavalo");
let opcaoCavalo1 = document.getElementsByClassName("opcao-cavalo-1");
let opcaoCavalo2 = document.getElementsByClassName("opcao-cavalo-2");
let opcaoCavalo3 = document.getElementsByClassName("opcao-cavalo-3");
let confetiCavalo = document.getElementsByClassName("confeti-cavalo");

let coelho = document.getElementsByClassName("coelho");
let opcaoCoelho1 = document.getElementsByClassName("opcao-coelho-1");
let opcaoCoelho2 = document.getElementsByClassName("opcao-coelho-2");
let opcaoCoelho3 = document.getElementsByClassName("opcao-coelho-3");
let confetiCoelho= document.getElementsByClassName("confeti-coelho");

let bode = document.getElementsByClassName("bode");
let opcaoBode1 = document.getElementsByClassName("opcao-bode-1");
let opcaoBode2 = document.getElementsByClassName("opcao-bode-2");
let opcaoBode3 = document.getElementsByClassName("opcao-bode-3");
let confetiBode= document.getElementsByClassName("confeti-bode");

let gato = document.getElementsByClassName("gato");
let opcaoGato1 = document.getElementsByClassName("opcao-gato-1");
let opcaoGato2 = document.getElementsByClassName("opcao-gato-2");
let opcaoGato3 = document.getElementsByClassName("opcao-gato-3");
let confetiGato= document.getElementsByClassName("confeti-gato");


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
   console.log("card_menu_porco = ", card_menu_frango);
   card_menu_frango.style.display = "flex";
   setTimeout(() => {
      card_menu_frango.style.opacity = "100%";  
   } ,350);
}

abre_menu_vaca = ({ target }) => {
   console.log("Entrou no abre menu VACA = ", vaca);
   card_menu_vaca.style.display = "flex";
   setTimeout(() => {
      card_menu_vaca.style.opacity = "100%";  
   } ,350);
}
abre_menu_ovelha = ({ target }) => {
   console.log("Entrou no abre menu OVELHA = ", ovelha);
   card_menu_ovelha.style.display = "flex";
   setTimeout(() => {
      card_menu_ovelha.style.opacity = "100%";  
   } ,350);
}
abre_menu_cavalo = ({ target }) => {
   console.log("Entrou no abre menu CAVALO = ", cavalo);
   card_menu_cavalo.style.display = "flex";
   setTimeout(() => {
      card_menu_cavalo.style.opacity = "100%";  
   } ,350);
}
abre_menu_coelho = ({ target }) => {
   console.log("Entrou no abre menu COELHO = ", coelho);
   card_menu_coelho.style.display = "flex";
   setTimeout(() => {
      card_menu_coelho.style.opacity = "100%";  
   } ,350);
}
abre_menu_bode = ({ target }) => {
   console.log("Entrou no abre menu BODE = ", bode);
   card_menu_bode.style.display = "flex";
   setTimeout(() => {
      card_menu_bode.style.opacity = "100%";  
   } ,350);
}
abre_menu_gato = ({ target }) => {
   console.log("Entrou no abre menu GATO = ", gato);
   card_menu_gato.style.display = "flex";
   setTimeout(() => {
      card_menu_gato.style.opacity = "100%";  
   } ,350);
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



opcaoCertaFrango = ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoFrango1);
   console.log("confeti[0] = ", confetiFrango[0]);
   confetiFrango[0].style.display = "flex";
   opcaoFrango1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_frango.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_frango.style.display = "none";   
   } ,450);
}
opcaoErradaFrango1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoFrango2);
   opcaoFrango2[0].classList.add("opcao-pos-clique");
   opcaoFrango2[0].classList.add("errado-clicado");
   opcaoFrango2[0].classList.remove("opcao");
   opcaoFrango2[0].classList.remove("errado");

}
opcaoErradaFrango2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoFrango3);
   opcaoFrango3[0].classList.add("opcao-pos-clique");
   opcaoFrango3[0].classList.add("errado-clicado");
   opcaoFrango3[0].classList.remove("opcao");
   opcaoFrango3[0].classList.remove("errado");

}



opcaoCertaVaca = ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoVaca1);
   console.log("confeti[0] = ", confetiVaca[0]);
   confetiVaca[0].style.display = "flex";
   opcaoVaca1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_vaca.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_vaca.style.display = "none";   
   } ,450);
}
opcaoErradaVaca1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoVaca2);
   opcaoVaca2[0].classList.add("opcao-pos-clique");
   opcaoVaca2[0].classList.add("errado-clicado");
   opcaoVaca2[0].classList.remove("opcao");
   opcaoVaca2[0].classList.remove("errado");

}
opcaoErradaVaca2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoVaca3);
   opcaoVaca3[0].classList.add("opcao-pos-clique");
   opcaoVaca3[0].classList.add("errado-clicado");
   opcaoVaca3[0].classList.remove("opcao");
   opcaoVaca3[0].classList.remove("errado");

}



opcaoCertaOvelha= ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoOvelha1);
   console.log("confeti[0] = ", confetiOvelha[0]);
   confetiOvelha[0].style.display = "flex";
   opcaoOvelha1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_ovelha.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_ovelha.style.display = "none";   
   } ,450);
}
opcaoErradaOvelha1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoOvelha2);
   opcaoOvelha2[0].classList.add("opcao-pos-clique");
   opcaoOvelha2[0].classList.add("errado-clicado");
   opcaoOvelha2[0].classList.remove("opcao");
   opcaoOvelha2[0].classList.remove("errado");

}
opcaoErradaOvelha2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoOvelha3);
   opcaoOvelha3[0].classList.add("opcao-pos-clique");
   opcaoOvelha3[0].classList.add("errado-clicado");
   opcaoOvelha3[0].classList.remove("opcao");
   opcaoOvelha3[0].classList.remove("errado");

}



opcaoCertaCavalo= ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoCavalo1);
   console.log("confeti[0] = ", confetiCavalo[0]);
   confetiCavalo[0].style.display = "flex";
   opcaoCavalo1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_cavalo.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_cavalo.style.display = "none";   
   } ,450);
}
opcaoErradaCavalo1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoCavalo2);
   opcaoCavalo2[0].classList.add("opcao-pos-clique");
   opcaoCavalo2[0].classList.add("errado-clicado");
   opcaoCavalo2[0].classList.remove("opcao");
   opcaoCavalo2[0].classList.remove("errado");

}
opcaoErradaCavalo2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoCavalo3);
   opcaoCavalo3[0].classList.add("opcao-pos-clique");
   opcaoCavalo3[0].classList.add("errado-clicado");
   opcaoCavalo3[0].classList.remove("opcao");
   opcaoCavalo3[0].classList.remove("errado");

}



opcaoCertaCoelho= ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoCoelho1);
   console.log("confeti[0] = ", confetiCoelho[0]);
   confetiCoelho[0].style.display = "flex";
   opcaoCoelho1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_celho.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_coelho.style.display = "none";   
   } ,450);
}
opcaoErradaCoelho1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoCoelho2);
   opcaoCoelho2[0].classList.add("opcao-pos-clique");
   opcaoCoelho2[0].classList.add("errado-clicado");
   opcaoCoelho2[0].classList.remove("opcao");
   opcaoCoelho2[0].classList.remove("errado");

}
opcaoErradaCoelho2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoCoelho3);
   opcaoCoelho3[0].classList.add("opcao-pos-clique");
   opcaoCoelho3[0].classList.add("errado-clicado");
   opcaoCoelho3[0].classList.remove("opcao");
   opcaoCoelho3[0].classList.remove("errado");

}



opcaoCertaBode= ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoBode1);
   console.log("confeti[0] = ", confetiBode[0]);
   confetiBode[0].style.display = "flex";
   opcaoBode1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_bode.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_bode.style.display = "none";   
   } ,450);
}
opcaoErradaBode1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoBode2);
   opcaoBode2[0].classList.add("opcao-pos-clique");
   opcaoBode2[0].classList.add("errado-clicado");
   opcaoBode2[0].classList.remove("opcao");
   opcaoBode2[0].classList.remove("errado");

}
opcaoErradaBode2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoBode3);
   opcaoBode3[0].classList.add("opcao-pos-clique");
   opcaoBode3[0].classList.add("errado-clicado");
   opcaoBode3[0].classList.remove("opcao");
   opcaoBode3[0].classList.remove("errado");

}



opcaoCertaGato= ({ target }) => {
   console.log("Opção certa clicada  = ", opcaoGato1);
   console.log("confeti[0] = ", confetiGato[0]);
   confetiGato[0].style.display = "flex";
   opcaoGato1[0].classList.add("certo-clicado");
   
   setTimeout(() => {
      card_menu_gato.style.opacity = "0%";  
   } ,150);
   setTimeout(() => {
      card_menu_gato.style.display = "none";   
   } ,450);
}
opcaoErradaGato1 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoGato2);
   opcaoGato2[0].classList.add("opcao-pos-clique");
   opcaoGato2[0].classList.add("errado-clicado");
   opcaoGato2[0].classList.remove("opcao");
   opcaoGato2[0].classList.remove("errado");

}
opcaoErradaGato2 = ({ target }) => {
   console.log("Opção ERRADA clicada  = ", opcaoGato3);
   opcaoGato3[0].classList.add("opcao-pos-clique");
   opcaoGato3[0].classList.add("errado-clicado");
   opcaoGato3[0].classList.remove("opcao");
   opcaoGato3[0].classList.remove("errado");

}
opcaoPato1[0].addEventListener('click', opcaoCertaPato);
opcaoPato2[0].addEventListener('click', opcaoErradaPato1);
opcaoPato3[0].addEventListener('click', opcaoErradaPato2);


opcaoPorco1[0].addEventListener('click', opcaoCertaPorco);
opcaoPorco2[0].addEventListener('click', opcaoErradaPorco1);
opcaoPorco3[0].addEventListener('click', opcaoErradaPorco2);


opcaoFrango1[0].addEventListener('click', opcaoCertaFrango);
opcaoFrango2[0].addEventListener('click', opcaoErradaFrango1);
opcaoFrango3[0].addEventListener('click', opcaoErradaFrango2);


opcaoVaca1[0].addEventListener('click', opcaoCertaVaca);
opcaoVaca2[0].addEventListener('click', opcaoErradaVaca1);
opcaoVaca3[0].addEventListener('click', opcaoErradaVaca2);


opcaoOvelha1[0].addEventListener('click', opcaoCertaOvelha);
opcaoOvelha2[0].addEventListener('click', opcaoErradaOvelha1);
opcaoOvelha3[0].addEventListener('click', opcaoErradaOvelha2);


opcaoCavalo1[0].addEventListener('click', opcaoCertaCavalo);
opcaoCavalo2[0].addEventListener('click', opcaoErradaCavalo1);
opcaoCavalo3[0].addEventListener('click', opcaoErradaCavalo2);


opcaoCoelho1[0].addEventListener('click', opcaoCertaCoelho);
opcaoCoelho2[0].addEventListener('click', opcaoErradaCoelho1);
opcaoCoelho3[0].addEventListener('click', opcaoErradaCoelho2);


opcaoBode1[0].addEventListener('click', opcaoCertaBode);
opcaoBode2[0].addEventListener('click', opcaoErradaBode1);
opcaoBode3[0].addEventListener('click', opcaoErradaBode2);


opcaoGato1[0].addEventListener('click', opcaoCertaGato);
opcaoGato2[0].addEventListener('click', opcaoErradaGato1);
opcaoGato3[0].addEventListener('click', opcaoErradaGato2);



