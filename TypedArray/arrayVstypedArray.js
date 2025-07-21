// ========================================================
// ✅ TypedArrays vs Normal Arrays
// ========================================================

// TypedArrays have:
// - Fixed length
// - Specific data types
// - Fast performance for binary data
// - Cannot store mixed types or non-numbers

const normal = [1, "hello", true];
const typed = new Uint8Array([1, 2, 3]);

console.log("🆗 Normal:", normal); // mixed types
console.log("🚫 Typed (Uint8):", typed); // only numbers
