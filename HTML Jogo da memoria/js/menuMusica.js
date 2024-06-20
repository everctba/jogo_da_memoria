


let  audioMenu = new Audio("../HTML%20Jogo%20da%20memoria/som/Fonny-menu.mp3");
audioMenu.loop = true; 
audioMenu.play();

let pausado = false

pausaMusica = ({ target }) => {
   console.log("Entro na funçao do clique  = ");
   console.log("pausado  = ", pausado);
   if (pausado===false) {
      console.log("pausado dentro do false  = ", pausado);
      audioMenu.pause();
      pausado = true

   }
   else {
      console.log("pausado dentro do true  = ", pausado);
      audioMenu.play();
      pausado = false

   }
  

}


var botaoMute = document.getElementById("icone-muta");

botaoMute.addEventListener('click', pausaMusica);
console.log("botaoMute  = ", botaoMute);