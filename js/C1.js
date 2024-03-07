// genera un numero aleatorio
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// obtiene la distancia de 2 puntos
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// devolver un String dependiendo de las distancias
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Hirviendo!";
  } else if (distance < 40) {
    return "Muy caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Tibio";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Muy frio";
  } else {
    return "HELADO!";
  }
}
