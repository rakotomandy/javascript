// ===================================================
// ✅ JavaScript MATH and NUMBER – Full Lesson
// ===================================================

// ===================================================
// ✅ 1. Numbers in JavaScript
// ===================================================
/*
JavaScript has only one number type: IEEE 754 double-precision floating point.
This means integers and decimals are both treated as Number type.

Example:
*/

let a = 42;          // integer
let b = 3.14;        // decimal (float)
let c = 1.5e3;       // exponential notation = 1500

console.log(a, b, c); // Output: 42 3.14 1500

// ===================================================
// ✅ 2. Math Object Overview
// ===================================================
/*
`Math` is a built-in object that has properties and methods for mathematical constants and functions.
You do NOT create a Math object; you use it directly.
*/

// Common Math constants:
console.log("PI:", Math.PI);         // 3.141592653589793
console.log("Euler's number e:", Math.E);  // 2.718281828459045

// ===================================================
// ✅ 3. Rounding Numbers
// ===================================================

let num = 3.7;

console.log("Math.round:", Math.round(num)); // rounds to nearest integer → 4
console.log("Math.floor:", Math.floor(num)); // rounds down → 3
console.log("Math.ceil:", Math.ceil(num));   // rounds up → 4
console.log("Math.trunc:", Math.trunc(num)); // removes decimals → 3


// ===================================================
// ✅ 4. Random Numbers
// ===================================================
/*
Generate random numbers between 0 (inclusive) and 1 (exclusive) using Math.random()
*/

// Random decimal between 0 and 1:
console.log("Random 0-1:", Math.random());

// Random integer between min and max (inclusive):
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random int 1-10:", randomInt(1, 10));

// ===================================================
// ✅ 5. Number Properties and Methods
// ===================================================

let val = 123.456;

// Convert number to string
console.log("toString:", val.toString());       // "123.456"

// Format to fixed decimals
console.log("toFixed(2):", val.toFixed(2));     // "123.46" rounds and converts to string

// Convert string to number
let str = "42.5";
console.log("parseInt:", parseInt(str));        // 42 (integer part)
console.log("parseFloat:", parseFloat(str));    // 42.5 (decimal number)

// Check if a value is NaN (Not a Number)
console.log("isNaN('abc'):", isNaN("abc"));     // true
console.log("isNaN(123):", isNaN(123));         // false

// Check if value is finite number
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isFinite(100):", isFinite(100));           // true


// ===================================================
// ✅ 6. Math.min and Math.max
// ===================================================
let nums = [5, 10, 2, 42, 7];

console.log("Math.min:", Math.min(...nums));  // 2
console.log("Math.max:", Math.max(...nums));  // 42


// ===================================================
// ✅ 7. Power and Square Root
// ===================================================
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8 = 2³
console.log("2 ** 3:", 2 ** 3);                   // ES6 exponentiation operator, same result: 8
console.log("Math.sqrt(16):", Math.sqrt(16));     // 4 square root


// ===================================================
// ✅ 8. Trigonometric Functions
// ===================================================
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0):", Math.cos(0));                     // 1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ~1


// ===================================================
// ✅ 9. Checking Integer with Number.isInteger
// ===================================================
console.log("Number.isInteger(5):", Number.isInteger(5));     // true
console.log("Number.isInteger(5.1):", Number.isInteger(5.1)); // false


// ===================================================
// ✅ 10. Converting Other Types to Number
// ===================================================

console.log("Number('123'):", Number("123"));      // 123 (number)
console.log("Number('123abc'):", Number("123abc")); // NaN (invalid number)
console.log("Number(true):", Number(true));        // 1
console.log("Number(false):", Number(false));      // 0


// ===================================================
// ✅ 11. Handling Floating Point Precision Issues
// ===================================================
console.log(0.1 + 0.2 === 0.3);   // false! Because of floating point precision

// Correct way: use toFixed or multiplication trick
let sum = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum === 0.3); // true


// ===================================================
// ✅ 12. Summary of Useful Number & Math Methods
// ===================================================
/*
Number methods:
- Number(value)          → Converts to number
- parseInt(string)       → Parses integer from string
- parseFloat(string)     → Parses decimal number from string
- Number.isInteger(value)→ Checks if integer

Math methods:
- Math.round(num)        → Round to nearest integer
- Math.floor(num)        → Round down
- Math.ceil(num)         → Round up
- Math.trunc(num)        → Remove decimal part
- Math.random()          → Random float 0 ≤ x < 1
- Math.min(...nums)      → Minimum in numbers
- Math.max(...nums)      → Maximum in numbers
- Math.pow(base, exp)    → Power function
- Math.sqrt(num)         → Square root
- Math.sin(x), Math.cos(x), Math.tan(x) → Trigonometry
*/


// ===================================================
// ✅ Example Usage
// ===================================================

console.log("Random number 1-100:", randomInt(1, 100));

