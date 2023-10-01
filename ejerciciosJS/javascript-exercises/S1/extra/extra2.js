const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


let change = "";
let count = 0;

for (let index = 0; index < foodSchedule.length; index++) {
  change = foodSchedule[index].isVegan;
  if (!change) {

    foodSchedule[index].name = fruits[count];
    count++;
  }
}

console.log(foodSchedule);
