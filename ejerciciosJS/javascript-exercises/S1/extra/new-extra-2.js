const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let counter = 0;

for (const comida of foodSchedule) {
    if (!comida.isVegan){
        comida.name = fruits[counter]
        counter++
    }
}

console.log(foodSchedule);