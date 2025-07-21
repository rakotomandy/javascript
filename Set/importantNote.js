// ===============================
// 🧠 Notes:
// ===============================

// ✅ Set keeps insertion order
// ✅ Values must be unique
// ✅ Objects and arrays are compared by reference

const set = new Set();

set.add([1, 2]);
set.add([1, 2]); // Different object reference, so both are added

console.log("🧩 Arrays inside Set:", set); // Set(2) {[1,2], [1,2]}
