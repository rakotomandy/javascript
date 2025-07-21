// --------------------------------------------
// REST OPERATOR (...) in JavaScript - FULL LESSON
// --------------------------------------------
// The rest operator allows us to represent an indefinite number of arguments as an array.
// It is used in function parameters to gather all remaining arguments into a single array.

console.log("--- Rest Operator with Function Parameters ---");

// Example 1: Gather all arguments into an array
function showAllArguments(...args) {
  // 'args' is an array that contains all passed arguments
  console.log("Received arguments:", args);
}

showAllArguments(1, 2, 3, 4); // Output: [1, 2, 3, 4]

// Example 2: Named parameters before rest operator
function introduce(firstName, lastName, ...titles) {
  // 'firstName' and 'lastName' are captured directly
  // 'titles' collects the rest of the parameters in an array
  console.log(`First: ${firstName}, Last: ${lastName}`);
  console.log("Titles:", titles);
}

introduce("Ada", "Lovelace", "Mathematician", "Programmer", "Visionary");

console.log("--- Rest Operator Inside Arrow Function ---");

// Works the same in arrow functions
const sum = (...nums) => {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
};

console.log("Sum:", sum(10, 20, 30)); // Output: 60

console.log("--- Rest Operator in Destructuring ---");

// Array Destructuring with Rest
const [a, b, ...rest] = [10, 20, 30, 40, 50];
// 'a' gets 10, 'b' gets 20, 'rest' gets [30, 40, 50]
console.log("a:", a);
console.log("b:", b);
console.log("rest:", rest);

// Object Destructuring with Rest
const person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
  location: "Paris"
};

const { name, ...details } = person;
// 'name' gets "Alice", 'details' gets remaining properties
console.log("name:", name);
console.log("details:", details);

console.log("--- Difference between Rest and Spread ---");

// Rest collects multiple elements into one
function printAll(...items) {
  console.log("Items:", items);
}
printAll("A", "B", "C"); // items becomes ["A", "B", "C"]

// Spread expands elements out
const letters = ["X", "Y", "Z"];
console.log("Spread:", ...letters); // X Y Z (each value separated)

// Summary:
// - REST is used to gather items into an array (function args, destructuring)
// - SPREAD is used to expand arrays/objects into individual items (function calls, merging)

// --------------------------------------------
// END OF REST OPERATOR LESSON
// --------------------------------------------
