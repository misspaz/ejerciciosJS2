const tbody$$ = document.querySelector('[data-function="board"]');

const promptfilas$$ = prompt("Introduce filas:");
const promptcolumnas$$ = prompt("Introduce columnas:");

function numRandom(max) {
  return Math.floor(Math.random() * max);
}

let aleatorio1 = numRandom(promptfilas$$);
let aleatorio2 = numRandom(promptcolumnas$$);

for (let i = 0; i < promptfilas$$; i++) {
  let tr$$ = document.createElement("tr");
  tbody$$.appendChild(tr$$);

  for (let y = 0; y < promptcolumnas$$; y++) {
    let td$$ = document.createElement("td");
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", "./public/exercise-4/x.png");
    td$$.appendChild(img$$);
    tr$$.appendChild(td$$);

    function cambiarImg() {
      if (i == aleatorio1 && y == aleatorio2) {
        const tesoro$$ = document.createElement("img");
        tesoro$$.setAttribute("src", "./public/exercise-4/chest.png");
        alert("¡Ganaste! Crack, fiera, máquina, número 1");
        img$$.src = tesoro$$;
        td$$.appendChild(tesoro$$);
      } else {
        img$$.src = "./public/exercise-4/skull.png";
      }
    }

    td$$.addEventListener("click", cambiarImg);
  }
}
let count = 0;
function sumarContador() {
  if (td$$.onclick) {
    count++;
  }
}

const contador$$ = document.querySelector("h1");
contador$$.addEventListener("click", sumarContador);
