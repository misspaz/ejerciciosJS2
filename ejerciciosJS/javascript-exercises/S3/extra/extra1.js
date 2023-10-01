const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement("ul");

for (const country of countries) {
  const li$$ = document.createElement("li");
  ul$$.appendChild(li$$);
  li$$.textContent = country;
}

document.body.appendChild(ul$$);
