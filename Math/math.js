/**
 * ✅ MATH OBJECT IN JAVASCRIPT
 * -----------------------------
 * The Math object is a built-in object in JavaScript that has properties and methods 
 * for mathematical constants and functions.
 * 
 * ⚠️ It is not a constructor, so we do not use `new Math()`.
 */

// 👉 1. Math Properties (Constants)
console.log("Math Constants:");
console.log(Math.PI);            // 3.141592653589793 - Value of π
console.log(Math.E);             // 2.718281828459045 - Euler's number (base of natural logarithm)
console.log(Math.LN2);           // 0.6931471805599453 - Natural log of 2
console.log(Math.LN10);          // 2.302585092994046 - Natural log of 10
console.log(Math.LOG2E);         // 1.4426950408889634 - Log base 2 of e
console.log(Math.LOG10E);        // 0.4342944819032518 - Log base 10 of e
console.log(Math.SQRT1_2);       // 0.7071067811865476 - Square root of 1/2
console.log(Math.SQRT2);         // 1.4142135623730951 - Square root of 2

console.log("\nMath Methods:");

// 👉 2. Rounding Methods
console.log(Math.round(4.6));    // 5 - Rounds to nearest integer
console.log(Math.ceil(4.2));     // 5 - Always rounds UP to next integer
console.log(Math.floor(4.8));    // 4 - Always rounds DOWN to previous integer
console.log(Math.trunc(4.9));    // 4 - Removes decimal part (no rounding)

// 👉 3. Min / Max
console.log(Math.max(3, 7, 1));  // 7 - Returns highest number
console.log(Math.min(3, 7, 1));  // 1 - Returns lowest number

// 👉 4. Random number
console.log(Math.random());      // Random number between 0 (inclusive) and 1 (exclusive)

// 👉 5. Exponentiation
console.log(Math.pow(2, 3));     // 8 - 2 raised to the power of 3
console.log(2 ** 3);             // 8 - Same as above using ** operator

// 👉 6. Square root
console.log(Math.sqrt(9));       // 3 - Square root of 9

// 👉 7. Absolute value
console.log(Math.abs(-7));       // 7 - Returns positive value

// 👉 8. Trigonometric functions (angles in radians)
console.log(Math.sin(Math.PI / 2));  // 1 - sine of 90 degrees
console.log(Math.cos(0));           // 1 - cosine of 0 degrees
console.log(Math.tan(Math.PI / 4)); // ≈1 - tangent of 45 degrees

// 👉 9. Inverse Trigonometric
console.log(Math.asin(1));          // π/2 in radians
console.log(Math.acos(0));          // π/2 in radians
console.log(Math.atan(1));          // π/4 in radians

// 👉 10. atan2(y, x) - returns angle between x-axis and point (x, y)
console.log(Math.atan2(1, 1));      // 0.785... = π/4 = 45°

/**
 * 👉 11. Logarithmic Functions
 * -----------------------------
 */
console.log(Math.log(10));          // Natural log (base e) of 10
console.log(Math.log10(100));       // 2 - log base 10 of 100
console.log(Math.log2(8));          // 3 - log base 2 of 8

/**
 * 👉 12. Exponential Functions
 * -----------------------------
 */
console.log(Math.exp(1));           // e^1 = 2.718...

/**
 * 👉 13. Sign and Clamping
 * -----------------------------
 */
console.log(Math.sign(-5));         // -1 - Negative number
console.log(Math.sign(0));          // 0 - Zero
console.log(Math.sign(10));         // 1 - Positive number

/**
 * 👉 14. Hypotenuse (Pythagoras)
 * -----------------------------
 * Math.hypot(a, b, ...) = √(a² + b² + ...)
 */
console.log(Math.hypot(3, 4));      // 5 - Hypotenuse of right triangle (3² + 4² = 5²)

/**
 * 👉 BONUS: Generating a random integer in a range
 * ------------------------------------------------
 * Example: Random number between 1 and 10 inclusive
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 10: " + randomInt(1, 10));
