const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul$$ = document.createElement("ul");

for (const app of apps) {
  const li$$ = document.createElement("li");
  ul$$.appendChild(li$$);
  li$$.textContent = app;
}

document.body.appendChild(ul$$);
