const p$$ = document.createElement("p");
  p$$.textContent = "Voy en medio";

const divs$$ = document.querySelectorAll("div");

for (const div of divs$$) {
  
  document.body.insertBefore(p$$, div[1]);
}
