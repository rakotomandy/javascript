// ===================================================
// ✅ JavaScript OBJECTS – Meticulous Full Lesson
// ===================================================


// ===================================================
// ✅ 1. What is an Object in JavaScript?
// ===================================================
/*
🔹 An object is a non-primitive data type used to store **key-value pairs**.
🔹 Each property (key) has a value: it can be any data type including another object or function.

Syntax:
const obj = {
  key1: value1,
  key2: value2
};
*/


// ===================================================
// ✅ 2. Creating a Basic Object
// ===================================================

const user = {
  name: "Alice",                  // string value
  age: 30,                        // number value
  isAdmin: true,                 // boolean value
  hobbies: ["reading", "music"], // array value
  address: {                     // nested object value
    city: "Paris",
    country: "France"
  }
};


// ===================================================
// ✅ 3. Accessing Object Properties
// ===================================================

// 🔹 Dot notation (preferred for simple keys):
console.log(user.name);          // "Alice"

// 🔹 Bracket notation (useful for dynamic keys or keys with spaces):
console.log(user["age"]);        // 30

// 🔹 Accessing nested properties:
console.log(user.address.city);  // "Paris"
console.log(user["hobbies"][0]); // "reading"


// ===================================================
// ✅ 4. Updating Object Properties
// ===================================================

// 🔹 Change an existing value:
user.age = 31;

// 🔹 Add a new property:
user.city = "Lyon";

console.log(user);


// ===================================================
// ✅ 5. Add and Delete Properties
// ===================================================

// 🔹 Add new key:
user.email = "alice@example.com";

// 🔹 Delete existing key:
delete user.isAdmin;

console.log(user);


// ===================================================
// ✅ 6. Check if a Property Exists
// ===================================================

// 🔹 Using the `in` operator returns true if the key exists in the object
console.log("name" in user);      // true
console.log("password" in user);  // false


// ===================================================
// ✅ 7. Loop Through Properties with `for...in`
// ===================================================

// 🔹 `for...in` loops over all enumerable properties (keys)
for (let key in user) {
  console.log(`${key} → ${user[key]}`);
}


// ===================================================
// ✅ 8. Object.keys, Object.values, Object.entries
// ===================================================

// 🔹 Object.keys → returns array of keys
console.log(Object.keys(user));    // ["name", "age", "hobbies", "address", "city", "email"]

// 🔹 Object.values → returns array of values
console.log(Object.values(user));  // ["Alice", 31, [...], {...}, "Lyon", "alice@example.com"]

// 🔹 Object.entries → array of [key, value] pairs
console.log(Object.entries(user));


// ===================================================
// ✅ 9. Adding Methods (Functions as Values)
// ===================================================

const person = {
  firstName: "John",
  lastName: "Doe",
  
  // A method: a function attached to an object
  fullName() {
    return this.firstName + " " + this.lastName;
    // `this` refers to the current object (`person`)
  }
};

console.log(person.fullName()); // "John Doe"


// ===================================================
// ✅ 10. Shorthand Property Syntax (ES6)
// ===================================================

const x = 10;
const y = 20;

// Instead of writing { x: x, y: y }
const point = { x, y };
console.log(point); // { x: 10, y: 20 }


// ===================================================
// ✅ 11. Object Spread Operator – Copy and Merge
// ===================================================

const obj1 = { a: 1, b: 2 };

// 🔹 Create a shallow copy of obj1
const obj2 = { ...obj1 };
obj2.a = 999; // Changing obj2 does NOT affect obj1

console.log(obj1.a); // 1
console.log(obj2.a); // 999


// ===================================================
// ✅ 12. Destructuring Assignment – Extract Keys
// ===================================================

const book = {
  title: "JS Guide",
  author: "Eric",
  pages: 300
};

// 🔹 Extract `title` and `author` into variables
const { title, author } = book;
console.log(title);  // "JS Guide"
console.log(author); // "Eric"


// ===================================================
// ✅ 13. Optional Chaining (?.)
// ===================================================

const car = {
  model: "Peugeot",
  engine: {
    type: "diesel"
  }
};

// 🔹 Safe access (returns undefined instead of error if not exists)
console.log(car.engine?.type);  // "diesel"
console.log(car.owner?.name);   // undefined (no crash)


// ===================================================
// ✅ 14. Merging Objects
// ===================================================

const base = { a: 1, b: 2 };
const extra = { b: 99, c: 3 };

// 🔹 Merges and overrides `b`
const merged = { ...base, ...extra };
console.log(merged); // { a: 1, b: 99, c: 3 }


// ===================================================
// ✅ 15. Object.freeze() and Object.seal()
// ===================================================

const frozen = Object.freeze({ a: 1 });
frozen.a = 999;  // ❌ Cannot modify
console.log(frozen); // { a: 1 }

const sealed = Object.seal({ b: 2 });
sealed.b = 22;    // ✅ Can update
delete sealed.b;  // ❌ Cannot delete
console.log(sealed); // { b: 22 }


// ===================================================
// ✅ 16. Summary of Object Techniques
// ===================================================
/*
🟦 Basic operations:
  - obj.key            → Access value
  - obj["key"]         → Access with string key
  - obj.key = value    → Set or update
  - delete obj.key     → Remove a key
  - "key" in obj       → Test key existence

🟩 Useful methods:
  - Object.keys(obj)    → Array of keys
  - Object.values(obj)  → Array of values
  - Object.entries(obj) → Array of [key, value] pairs
  - Object.freeze(obj)  → Prevent changes
  - Object.seal(obj)    → Prevent adding/removing keys
  - Spread syntax `{ ...obj }` → Copy or merge

🟧 Advanced:
  - Method as value     → Functions inside objects
  - `this` keyword      → Refers to current object
  - Optional chaining   → Safe access with `?.`
  - Destructuring       → Extract keys as variables
*/


// ===================================================
// ✅ Test Object for Practice
// ===================================================
/*
const student = {
  name: "Sara",
  grade: 18,
  passed: true,
  greet() {
    return "Hello, " + this.name;
  }
};

console.log(student.greet());       // Hello, Sara
console.log("grade" in student);    // true
console.log(Object.keys(student));  // ["name", "grade", "passed", "greet"]
*/
