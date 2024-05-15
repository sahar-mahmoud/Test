//Exercise 1
let arrOne = [2, 4, 6, 8];
function filterRange(arr, a, b) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
console.log(filterRange(arrOne, 2, 4));
console.log(filterRange(arrOne, 6, 8));

// Exercises 2

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((x) => x.name);
console.log(names);


//exercise 3
let arr = [john, pete, mary];

function getAverageAge(users) {
    let totalAge = 0;
    let age = users.map((x) => x.age);
    for (let i = 0; i < age.length; i++) {
      totalAge += age[i];
    }
    let avrAge = totalAge / age.length;
    let avrAge1=Math.round(avrAge);
    return avrAge1;
  }
  console.log(getAverageAge(users));