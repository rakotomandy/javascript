// ========================================================
// ✅ Different Views on Same Buffer
// ========================================================

// The same buffer can be viewed using different types
const uint16 = new Uint16Array(buffer); // 16-bit unsigned integers

console.log("🔁 Uint16 view:", uint16);
// May show different values depending on byte order and what was written
