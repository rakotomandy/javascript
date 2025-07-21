// SPREAD OPERATOR ( ... ) IN JAVASCRIPT - FULL COMMENTED LESSON

// ---------------------------------------------
// 1. SPREAD IN ARRAYS
// ---------------------------------------------

// Create an array of numbers
const numbers = [1, 2, 3];
// Spread the numbers array into a new array
const moreNumbers = [...numbers, 4, 5];
// Result: [1, 2, 3, 4, 5]
console.log('Spread in Array:', moreNumbers);

// ---------------------------------------------
// 2. COMBINING MULTIPLE ARRAYS
// ---------------------------------------------

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'lettuce'];

// Merge fruits and vegetables using spread
const food = [...fruits, ...vegetables];
// Result: ['apple', 'banana', 'carrot', 'lettuce']
console.log('Combined Arrays:', food);

// ---------------------------------------------
// 3. COPY AN ARRAY USING SPREAD
// ---------------------------------------------

const original = [10, 20, 30];
const copied = [...original];
// This creates a shallow copy (only top-level elements are copied)
console.log('Copied Array:', copied);

// ---------------------------------------------
// 4. SPREAD IN OBJECTS (ES2018+)
// ---------------------------------------------

const user = { name: 'Alice', age: 25 };
// Add new properties or override existing ones
const updatedUser = { ...user, age: 26, city: 'Paris' };
// Result: { name: 'Alice', age: 26, city: 'Paris' }
console.log('Updated User Object:', updatedUser);

// ---------------------------------------------
// 5. COMBINE OBJECTS
// ---------------------------------------------

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// When properties overlap, the last one wins (obj2.b overrides obj1.b)
const combinedObj = { ...obj1, ...obj2 };
// Result: { a: 1, b: 3, c: 4 }
console.log('Combined Objects:', combinedObj);

// ---------------------------------------------
// 6. SPREAD IN FUNCTION ARGUMENTS
// ---------------------------------------------

function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
// Spread nums as individual arguments to the function
const total = sum(...nums); // same as sum(1, 2, 3)
console.log('Sum from Spread:', total);

// ---------------------------------------------
// 7. SPREAD AND NESTED STRUCTURES
// ---------------------------------------------

const nested = [1, [2, 3]];
const flatCopy = [...nested]; // only shallow copy
flatCopy[1][0] = 99; // changes nested too
console.log('Shallow Copy Issue:', nested);

// ---------------------------------------------
// 8. SPREAD VS REST (THEY LOOK SAME BUT DIFFER)
// ---------------------------------------------

// REST is used to gather values (in function args)
function showAll(...args) {
  // args is an array of all arguments passed
  console.log('Rest Parameters:', args);
}
showAll(5, 10, 15);

// SPREAD is used to spread out elements
const parts = ["head", "body"];
const whole = ["start", ...parts, "end"];
console.log('Spread Again:', whole);

// ---------------------------------------------
// 9. COMMON USE CASES
// ---------------------------------------------

// a. Merging arrays without mutating originals
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
const merged = [...arr1, ...arr2];
console.log('Merged without Mutation:', merged);

// b. Convert string to array of characters
const word = "hello";
const chars = [...word]; // ['h','e','l','l','o']
console.log('Spread String into Characters:', chars);

// c. Avoid mutating original object
const settings = { darkMode: true, fontSize: 14 };
const newSettings = { ...settings, fontSize: 16 };
console.log('Non-Mutating Settings Update:', newSettings);

// ---------------------------------------------
// 10. SUMMARY
// ---------------------------------------------
// - Spread ( ... ) expands elements from arrays/objects into places where multiple items are expected.
// - Useful in function calls, array/object cloning, merging.
// - Only performs shallow copies (nested structures remain linked).
// - Similar syntax to rest (...), but rest collects while spread expands.

// END OF LESSON
