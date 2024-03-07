// Coordenadas del tesoro
const ANCHO = 852;
const ALTO = 852;

let objetivo = {
  x: getRandomNumber(ANCHO),
  y: getRandomNumber(ALTO)
};

// Manejador de clics
let $mapa = document.querySelector('#mapa');
let $distancia = document.querySelector('#distancia');
let clics = 0;

$mapa.addEventListener('click', function (e) {
  console.log('click');
  clics++;
  let distancia = getDistance(e, objetivo);
  let pistaDistancia = getDistanceHint(distancia);
  $distancia.innerHTML = `<h1>${pistaDistancia}</h1>`;

  if (distancia < 20 ) {
    alert(`¡Encontraste el tesoro en ${clics} clics!`);
    location.reload();
  }
});