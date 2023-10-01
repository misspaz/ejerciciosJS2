const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

let peliPeq = [];
let peliMed = [];
let peliGra = [];


for (let index = 0; index < movies.length; index++) {
 let pelicula = movies[index];
  if (pelicula.durationInMinutes <= 100) {
    peliPeq.push(pelicula);
  } else if (
    pelicula.durationInMinutes > 100 &&
    pelicula.durationInMinutes <= 200
  ) {
    peliMed.push(pelicula);
  } else {
    peliGra.push(pelicula);
  }
}

console.log(peliPeq);
console.log(peliMed);
console.log(peliGra);
