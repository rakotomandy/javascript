// ===============================
// FULL LESSON ON MAP IN JAVASCRIPT
// ===============================

// Map is a built-in JavaScript object that allows storing key-value pairs.
// Unlike plain objects, Maps can use any data type as a key (objects, functions, etc.)

// --- Creating a new Map ---
const myMap = new Map(); // Creates an empty Map object

// --- Adding values to a Map using set(key, value) ---
myMap.set('name', 'Alice'); // Sets key 'name' to value 'Alice'
myMap.set('age', 30); // Sets key 'age' to value 30
myMap.set(true, 'boolean key'); // Key can be a boolean
myMap.set(42, 'number key'); // Key can be a number
myMap.set({ id: 1 }, 'object key'); // Key can be an object

// --- Getting values from a Map using get(key) ---
console.log(myMap.get('name')); // Output: 'Alice'
console.log(myMap.get(42)); // Output: 'number key'

// --- Checking existence of a key using has(key) ---
console.log(myMap.has('age')); // Output: true
console.log(myMap.has('unknown')); // Output: false

// --- Size of the Map ---
console.log(myMap.size); // Output: 5 (because we added 5 entries)

// --- Deleting a key using delete(key) ---
myMap.delete(42); // Deletes the entry with key 42
console.log(myMap.has(42)); // Output: false

// --- Clearing the Map ---
const tempMap = new Map([
  ['x', 10],
  ['y', 20],
]);
console.log(tempMap.size); // Output: 2
tempMap.clear(); // Removes all entries
console.log(tempMap.size); // Output: 0

// --- Initializing a Map with an array of pairs ---
const studentGrades = new Map([
  ['John', 90],
  ['Mary', 85],
  ['Bob', 78],
]);

// --- Iterating over a Map ---
// Using for...of with entries
for (const [key, value] of studentGrades) {
  console.log(`${key}: ${value}`); // Output: John: 90, Mary: 85, Bob: 78
}

// Using forEach
studentGrades.forEach((value, key) => {
  console.log(`${key} scored ${value}`); // Same as above but with a different format
});

// --- Converting Map to an Array ---
const gradesArray = Array.from(studentGrades); // Converts to [ ['John', 90], ['Mary', 85], ['Bob', 78] ]
console.log(gradesArray);

// --- Converting Map keys and values to separate arrays ---
const keysArray = Array.from(studentGrades.keys()); // ['John', 'Mary', 'Bob']
const valuesArray = Array.from(studentGrades.values()); // [90, 85, 78]

// --- Using Objects as Keys ---
const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

const loginCount = new Map();
loginCount.set(user1, 5);
loginCount.set(user2, 2);

console.log(loginCount.get(user1)); // Output: 5
console.log(loginCount.get(user2)); // Output: 2

// --- Difference between Map and Object ---
// 1. Keys in Map can be any type; in Objects, keys are strings/symbols
// 2. Maps preserve insertion order; Objects do not guarantee order
// 3. Maps have built-in size property; Objects require manual counting
// 4. Map is iterable directly; Object is not iterable directly
// 5. Performance: Maps are optimized for frequent additions/removals

// --- Real-world Use Case Example ---
// Suppose you are building a login tracker

const loginTracker = new Map();

// Add users and track their login count
function userLoggedIn(user) {
  if (loginTracker.has(user)) {
    loginTracker.set(user, loginTracker.get(user) + 1); // increment count
  } else {
    loginTracker.set(user, 1); // first login
  }
}

userLoggedIn('alice');
userLoggedIn('bob');
userLoggedIn('alice');

console.log(loginTracker); // Map(2) { 'alice' => 2, 'bob' => 1 }

// --- Converting Map to Object ---
const exampleMap = new Map([
  ['a', 1],
  ['b', 2],
]);

const obj = Object.fromEntries(exampleMap); // { a: 1, b: 2 }
console.log(obj);

// --- Summary of Map Methods ---
// set(key, value)    => adds or updates a key-value pair
// get(key)           => retrieves the value for a key
// has(key)           => checks if the key exists
// delete(key)        => removes a key-value pair
// clear()            => removes all entries
// size               => returns the number of entries
// keys()             => returns an iterator of keys
// values()           => returns an iterator of values
// entries()          => returns an iterator of [key, value] pairs
// forEach(callback)  => iterates over all entries

// --- Advanced: Custom Iteration ---
const roles = new Map([
  ['Admin', ['Create', 'Read', 'Update', 'Delete']],
  ['Editor', ['Read', 'Update']],
  ['Viewer', ['Read']],
]);

roles.forEach((permissions, role) => {
  console.log(`${role} can: ${permissions.join(', ')}`);
});
