const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let listaLugares = [];

for (const country of placesToTravel) {
  if (country.id !== 11 || country.id !== 40) {
    listaLugares.push(country);
  }
}

console.log(listaLugares);
