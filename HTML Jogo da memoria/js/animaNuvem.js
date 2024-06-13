var nuvenAnima = document.getElementsByClassName("anima-nuven");
var nuvenANIMADA = lottie.loadAnimation({
   wrapper: nuvenAnima,
   animType: 'svg',
   loop: true,
   autoplay: true,
   path:  './js/nuvens-anima.json'
});
nuvenANIMADA.goToAndPlay(0,true);
console.log(nuvenAnima);
var nuvenAnima2 = document.getElementsByClassName("nuven2");
var nuvenANIMADA2 = lottie.loadAnimation({
   wrapper: nuvenAnima2,
   animType: 'svg',
   loop: true,
   autoplay: true,
   path:  './js/nuvens-anima2.json'
});