let arrayFutbol = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(array, nombre1, nombre2) {
  let nombre1Index = array.indexOf(nombre1);
  let nombre2Index = array.indexOf(nombre2);
  array.splice(nombre1Index, 1, nombre2);
  array.splice(nombre2Index, 1, nombre1)
}

swap(arrayFutbol, "Cristiano Romualdo", "Ronalguiño")
console.log(arrayFutbol);





