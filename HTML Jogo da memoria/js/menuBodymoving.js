

var nuvenAnima = document.getElementsByClassName("anima-nuven");
var nuvenANIMADA = lottie.loadAnimation({
   wrapper: nuvenAnima[0],
   animType: 'svg',
   loop: true,
   autoplay: true,
   path:  './js/nuvens-anima.json'
});
nuvenANIMADA.goToAndPlay(0,true);
console.log(nuvenAnima);
var nuvenAnima2 = document.getElementsByClassName("nuven2");
var nuvenANIMADA2 = lottie.loadAnimation({
   wrapper: nuvenAnima2[0],
   animType: 'svg',
   loop: true,
   autoplay: true,
   path:  './js/nuvens-anima2.json'
});
nuvenANIMADA2.goToAndPlay(0,true);
console.log(nuven2);

const botao = document.querySelector('.quadrado');
// var anim2 = document.querySelector('.linha-1-anima');
var anim2 = document.getElementsByClassName("linha-1-anima");

var itemAnima = lottie.loadAnimation({
   wrapper: anim2[0],
   animType: 'svg',
   loop: true,
   autoplay: false,
   path:  './js/linha.json'
});
itemAnima.goToAndPlay(0,true);
console.log(anim2);
var itemAnima = lottie.loadAnimation({
   wrapper: anim2[1],
   animType: 'svg',
   loop: true,
   autoplay: false,
   path:  './js/linha.json'
});
itemAnima.goToAndPlay(0,true);
var itemAnima = lottie.loadAnimation({
   wrapper: anim2[2],
   animType: 'svg',
   loop: true,
   autoplay: false,
   path:  './js/linha.json'
});
itemAnima.goToAndPlay(0,true);
var itemAnima = lottie.loadAnimation({
   wrapper: anim2[3],
   animType: 'svg',
   loop: true,
   autoplay: false,
   path:  './js/linha.json'
});
itemAnima.goToAndPlay(0,true);
var itemAnima = lottie.loadAnimation({
   wrapper: anim2[4],
   animType: 'svg',
   loop: true,
   autoplay: false,
   path:  './js/linha.json'
});
itemAnima.goToAndPlay(0,true);
// anim.addEventListener('click', () => {
// });
// botao.addEventListener('click', () => {
//    console.log(botao);
//    itemAnima.goToAndPlay(0,true);
// });
