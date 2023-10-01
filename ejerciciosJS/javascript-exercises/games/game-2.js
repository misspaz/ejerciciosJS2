const square$$ = document.querySelectorAll('[data-function="square"]');
const bmole$$ = document.getElementsByClassName("b-mole");

function cambiarImg() {
  for (const square of square$$) {
    let randomNum = Math.floor(Math.random() * 9);
    let position = square[randomNum];
    
  }
}

setInterval(cambiarImg, 500);

let segundosTotales = 30;
let segundos$$ = document.querySelector('[data-function="time-left"]');
let timerId = setInterval(cuentaAtras, 1000);

function cuentaAtras() {
  if (segundosTotales == -1) {
    clearTimeout(timerId);
    alert("¡Se acabó el tiempo!");
  } else {
    segundos$$.innerHTML = segundosTotales;
    segundosTotales--;
  }
}

const puntuacion$$ = document.querySelector('[data-function="score"]');
