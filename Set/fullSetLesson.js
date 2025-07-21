// JavaScript SET - Full Commented Explanation

// A Set is a built-in JavaScript object that stores unique values (no duplicates allowed)
// It can store values of any type, whether primitive values or object references

// 1. Creating a Set
const mySet = new Set(); // Creates a new empty Set object
console.log(mySet); // Outputs: Set(0) {}

// 2. Adding values to the Set
mySet.add(10); // Adds number 10 to the set
mySet.add(20); // Adds number 20 to the set
mySet.add(10); // Will NOT be added again (Set keeps only unique values)
mySet.add("Hello"); // Adds a string value
mySet.add({name: "John"}); // Adds an object to the set
console.log(mySet); // Outputs the current Set with unique values

// 3. Checking if a value exists in the Set
console.log(mySet.has(10)); // true, 10 exists
console.log(mySet.has(30)); // false, 30 does not exist

// 4. Removing values from the Set
mySet.delete(20); // Deletes the value 20 from the set
console.log(mySet.has(20)); // false

// 5. Getting the size of the Set
console.log(mySet.size); // Outputs: 3 (10, "Hello", and object)

// 6. Iterating through Set values
for (let value of mySet) {
  console.log(value); // Logs each value in the set
}

// 7. Using forEach with Set
mySet.forEach((value) => {
  console.log("Set has:", value); // Logs each value with message
});

// 8. Converting Set to Array
const myArray = [...mySet]; // Uses spread operator to convert Set to Array
console.log(myArray); // Array of Set's elements

// 9. Creating Set from an array (to remove duplicates)
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = new Set(nums); // Removes duplicates
console.log(uniqueNums); // Set(5) {1, 2, 3, 4, 5}

// 10. Clearing all elements from a Set
uniqueNums.clear(); // Removes all values from the Set
console.log(uniqueNums); // Set(0) {}

// === Use Cases of Set ===
// - Removing duplicates from arrays
// - Efficient membership checks (has method)
// - Storing unique data like visited pages, tags, etc.

// 11. Chaining add() calls
const letters = new Set().add('a').add('b').add('c');
console.log(letters); // Set(3) { 'a', 'b', 'c' }

// 12. Objects in Set are compared by reference, not value
const obj1 = {x: 1};
const obj2 = {x: 1};
const objSet = new Set();
objSet.add(obj1);
objSet.add(obj2); // Will be added because it's a different object in memory
console.log(objSet); // Set(2) { {x: 1}, {x: 1} }

// 13. Comparing with Arrays
const arr = [1, 2, 3, 1];
const unique = [...new Set(arr)]; // [1, 2, 3] - duplicate removed
console.log(unique);

// 14. Practical example - filtering duplicate words
const sentence = "the quick brown fox jumps over the lazy dog the fox";
const words = sentence.split(" ");
const uniqueWords = new Set(words);
console.log([...uniqueWords]); // Logs each unique word in the sentence

// 15. Convert back to string
const uniqueStr = [...uniqueWords].join(" ");
console.log(uniqueStr); // Unique sentence without duplicate words

// This concludes the full lesson on JavaScript Sets
// Sets are ideal for storing unique values and can be useful in many practical scenarios
