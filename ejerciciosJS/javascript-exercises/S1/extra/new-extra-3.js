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

for (const movie of movies) {
  if (movie.durationInMinutes <= 100) {
    peliPeq.push(movie);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes <= 200) {
    peliMed.push(movie);
  } else {
    peliGra.push(movie);
  }
}

console.log(peliPeq);
console.log(peliMed);
console.log(peliGra);