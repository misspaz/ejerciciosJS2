const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  const div$$ = document.createElement("div");
  const h4$$ = document.createElement("h4");
  const img$$ = document.createElement("img");
  h4$$.textContent = country.title;
  img$$.setAttribute("src", country.imgUrl);
  div$$.appendChild(h4$$);
  div$$.appendChild(img$$);
  document.body.appendChild(div$$);
}
