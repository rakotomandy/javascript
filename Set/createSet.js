// ===============================
// 🎓 Lesson 1: Creating a Set
// ===============================

// Create a Set from an array (duplicates will be removed)
const numbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("🔢 Unique Numbers:", numbers); // Set(5) {1, 2, 3, 4, 5}

// Create an empty Set and add items later
const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate ignored
console.log("🍎 Fruits Set:", fruits); // Set(2) {"apple", "banana"}
