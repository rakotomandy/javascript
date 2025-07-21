// ========================================================
// ✅ What is a TypedArray?
// ========================================================

// A TypedArray is an array-like view of binary data stored in an ArrayBuffer.
// Each element is of a specific numeric type (e.g., Int8, Uint8, Float32, etc).

// For example, Int8Array stores 8-bit signed integers.
const buffer = new ArrayBuffer(4); // Create 4 bytes (32 bits) of memory
const int8 = new Int8Array(buffer); // Create a view to interpret it as 8-bit integers

console.log("🧠 Length:", int8.length); // 4 (because 4 bytes total / 1 byte per Int8)
console.log("📦 Initial values:", int8); // [0, 0, 0, 0]
