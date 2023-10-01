const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

let sumaTotal = 0;

for (const product of products) {
    sumaTotal += product.sellCount;
}

console.log(sumaTotal / 2);