const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];



for (let index = 0; index < products.length; index++) {
 let element = products[index];

  if (element.sellCount > 20) {
    goodProducts.push(element);
  } else {
    badProducts.push(element);
  }
}

console.log(goodProducts);
console.log(badProducts);
