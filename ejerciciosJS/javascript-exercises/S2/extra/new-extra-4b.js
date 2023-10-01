let array1 = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == text) {
      return i;
    }
  }
}

function removeItem(array, texto) {
   let posicion = findArrayIndex(array, texto)
   array.splice(posicion, 1);
   return array;

}

console.log(removeItem(array1, "Ajolote"));
