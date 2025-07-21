// ===============================
// 🎓 Lesson 4: Use Set to Remove Duplicates
// ===============================

const mixed = ["a", "b", "a", "c", "b", "d"];

// Convert array to Set, then back to array
const unique = [...new Set(mixed)];
console.log("❌🔁 Unique values:", unique); // ["a", "b", "c", "d"]
