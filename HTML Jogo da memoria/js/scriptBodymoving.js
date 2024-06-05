// const botao = document.getElementsByClassName(".quadrado");
const botao = document.querySelector('.quadrado');
var anim = document.querySelector('.bm');

var itemAnima = lottie.loadAnimation({
   wrapper: anim,
   animType: 'svg',
   loop: false,
   autoplay: false,
   path:  './js/data.json'
});
console.log(botao);
// anim.addEventListener('click', () => {
// });
botao.addEventListener('click', () => {
   console.log(botao);
   itemAnima.goToAndPlay(0,true);
});



// console.log(botao);
// console.log(itemAnima);