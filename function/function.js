// ===================================================
// ✅ JavaScript FUNCTIONS – Full Lesson
// ===================================================

// ===================================================
// ✅ 1. What is a Function?
// ===================================================
/*
A function is a reusable block of code designed to perform a specific task.

It allows you to:
- Avoid repeating code
- Organize logic into blocks
- Accept inputs (parameters)
- Return outputs
*/


// ===================================================
// ✅ 2. Function Declaration (Named Function)
// ===================================================

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function
greet("Alice"); // Output: Hello, Alice!


// ===================================================
// ✅ 3. Function Expression (Assigned to a Variable)
// ===================================================

const sayBye = function(name) {
  console.log("Goodbye, " + name + "!");
};

sayBye("Bob"); // Output: Goodbye, Bob!


// ===================================================
// ✅ 4. Arrow Function (Shorter Syntax)
// ===================================================

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 4)); // Output: 12


// ===================================================
// ✅ 5. Function with Return Value
// ===================================================

function add(a, b) {
  return a + b; // returns the result to the caller
}

let result = add(5, 7);
console.log("Sum:", result); // Output: Sum: 12


// ===================================================
// ✅ 6. Function Without Parameters
// ===================================================

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log("Random:", randomNumber());


// ===================================================
// ✅ 7. Function with Default Parameters
// ===================================================

function welcome(user = "Guest") {
  console.log("Welcome, " + user + "!");
}

welcome();         // Output: Welcome, Guest!
welcome("Sophie"); // Output: Welcome, Sophie!


// ===================================================
// ✅ 8. Function with Rest Parameters (...)
// ===================================================

function sumAll(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


// ===================================================
// ✅ 9. Callback Functions (Passing a function as argument)
// ===================================================

function processUserInput(callback) {
  const name = "Eric";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello, " + name);
}); // Output: Hello, Eric


// ===================================================
// ✅ 10. Anonymous Function (No name)
// ===================================================

setTimeout(function() {
  console.log("Executed after 1 second");
}, 1000);


// ===================================================
// ✅ 11. Arrow Function Short Form
// ===================================================

const square = x => x * x;

console.log(square(6)); // Output: 36


// ===================================================
// ✅ 12. Named vs Anonymous
// ===================================================

function namedFunc() {
  console.log("I'm named");
}

const anonFunc = function() {
  console.log("I'm anonymous");
};


// ===================================================
// ✅ 13. Immediately Invoked Function Expression (IIFE)
// ===================================================

(function() {
  console.log("IIFE runs immediately");
})();


// ===================================================
// ✅ 14. Function Scope
// ===================================================

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // can access outerVar
  }

  inner();
}

outer(); // Output: I am outer


// ===================================================
// ✅ 15. Recursive Function (calls itself)
// ===================================================

function countDown(n) {
  if (n <= 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countDown(n - 1); // recursive call
  }
}

countDown(3); // Output: 3 2 1 Done!


// ===================================================
// ✅ 16. Function Hoisting (only for declarations)
// ===================================================

hoisted(); // ✅ works

function hoisted() {
  console.log("Function is hoisted");
}

// BUT:
// notHoisted(); ❌ Error
// const notHoisted = function () {}


// ===================================================
// ✅ 17. Arrow vs Regular – `this` Behavior
// ===================================================

const person = {
  name: "Eric",
  greetRegular: function () {
    console.log("Hello from", this.name); // this = person
  },
  greetArrow: () => {
    console.log("Hello from", this.name); // this = outer scope (not person)
  }
};

person.greetRegular(); // Hello from Eric
person.greetArrow();   // Hello from undefined (or global `this`)


// ===================================================
// ✅ 18. Summary of Function Types
// ===================================================

/*
🔹 Function Declaration         → function greet() {}
🔹 Function Expression          → const f = function() {}
🔹 Arrow Function               → const f = () => {}
🔹 Anonymous Function           → function() {}
🔹 Immediately Invoked (IIFE)  → (function(){})()
🔹 Callback Function            → fn(callback)
🔹 Recursive Function           → function calls itself
*/


// ===================================================
// ✅ Suggested HTML Test Snippet (Optional)
// ===================================================
/*
<button onclick="greet('Marie')">Greet</button>
<button onclick="console.log(add(10, 20))">Add</button>
*/

