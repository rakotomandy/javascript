// ===================================================
// ✅ 1. FOR LOOP – Basic Iteration (Indexed Loop)
// ===================================================
/*
The classic loop for iterating through an array using index numbers.
*/
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry


// ===================================================
// ✅ 2. FOR...OF LOOP – Modern Array Iteration
// ===================================================
/*
Iterates directly over the values of an array (introduced in ES6).
*/
for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: cherry


// ===================================================
// ✅ 3. FOR...IN LOOP – Used with Objects
// ===================================================
/*
Loops through the property names (keys) of an object.
Not recommended for arrays due to ordering issues.
*/
let person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

for (let key in person) {
  console.log(`${key} → ${person[key]}`);
}
// Output:
// name → Alice
// age → 30
// job → Engineer


// ===================================================
// ✅ 4. forEach() – Array Method
// ===================================================
/*
Calls a function for each array element.
Does not return a new array.
*/
fruits.forEach(function (item, index) {
  console.log(`Index ${index}: ${item}`);
});
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry


// ===================================================
// ✅ 5. map() – Transform Array
// ===================================================
/*
Creates a new array by applying a function to each element.
*/
let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]


// ===================================================
// ✅ 6. while LOOP – Conditional Repetition
// ===================================================
/*
Repeats code while a condition is true.
*/
let count = 0;
while (count < 3) {
  console.log(`while count: ${count}`);
  count++;
}
// Output: 0, 1, 2


// ===================================================
// ✅ 7. do...while LOOP – Guaranteed One Run
// ===================================================
/*
Runs at least once, even if condition is false.
*/
let tries = 0;
do {
  console.log(`do-while try #${tries}`);
  tries++;
} while (tries < 2);
// Output: try #0, try #1


// ===================================================
// ✅ 8. Looping Over Object Values
// ===================================================
/*
Object.values() returns an array of values.
Use with for...of to loop over them.
*/
for (let val of Object.values(person)) {
  console.log(`Value: ${val}`);
}
// Output: Alice, 30, Engineer


// ===================================================
// ✅ 9. Looping Over Object Keys and Values
// ===================================================
/*
Object.entries() returns [key, value] pairs.
Perfect for destructuring in for...of.
*/
for (let [key, value] of Object.entries(person)) {
  console.log(`${key.toUpperCase()} = ${value}`);
}
// Output:
// NAME = Alice
// AGE = 30
// JOB = Engineer


// ===================================================
// ✅ 10. break and continue in Loops
// ===================================================
/*
break → exits the loop entirely
continue → skips current iteration
*/

for (let fruit of fruits) {
  if (fruit === "banana") continue; // skip banana
  if (fruit === "cherry") break;    // stop before cherry
  console.log(fruit); // Only "apple"
}


// ===================================================
// ✅ 11. Nested Loops – Loop Inside a Loop
// ===================================================
/*
Useful for working with 2D arrays or combinations.
*/
let matrix = [
  [1, 2],
  [3, 4]
];

for (let row of matrix) {
  for (let col of row) {
    console.log(col);
  }
}
// Output: 1, 2, 3, 4


// ===================================================
// ✅ 12. Looping Object in Sorted Order
// ===================================================
/*
To sort object keys before looping.
*/
let unsorted = {
  b: 2,
  a: 1,
  c: 3
};

let sortedKeys = Object.keys(unsorted).sort();

for (let key of sortedKeys) {
  console.log(`${key}: ${unsorted[key]}`);
}
// Output:
// a: 1
// b: 2
// c: 3


// ===================================================
// ✅ 13. Practical: Count Frequency in Array
// ===================================================
let colors = ["red", "blue", "red", "green", "blue", "red"];
let frequency = {};

for (let color of colors) {
  frequency[color] = (frequency[color] || 0) + 1;
}
console.log(frequency);
// Output: { red: 3, blue: 2, green: 1 }


