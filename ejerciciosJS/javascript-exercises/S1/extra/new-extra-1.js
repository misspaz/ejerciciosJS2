const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];


for (const user of users) {
    if (user.years < 18) {
        console.log("Este usuario es menor de edad: " + user.name);
    } else {
        console.log("Este usuario es mayor de edad: " + user.name);
    }
}