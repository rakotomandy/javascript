// ===============================
// 🎓 Lesson 6: slice() vs splice()
// ===============================

const letters = ["a", "b", "c", "d", "e"];

// slice() - returns a portion (non-destructive)
const sliced = letters.slice(1, 4); // from index 1 to 3
console.log("✂️ Sliced:", sliced); // ["b", "c", "d"]

// splice() - changes the original array
letters.splice(2, 1, "z"); // remove 1 item at index 2, insert "z"
console.log("🧩 Spliced:", letters); // ["a", "b", "z", "d", "e"]
