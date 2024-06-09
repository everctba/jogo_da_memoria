var anim3 = document.getElementsByClassName("quadrado-jogo-da-meoria");


var itemAnima3 = lottie.loadAnimation({
   wrapper: anim3[0],
   animType: 'svg',
   loop: true,
   autoplay: true,
   path:  './js/data.json'
});
console.log(anim3);

// itemAnima3.goToAndPlay(0,true);

