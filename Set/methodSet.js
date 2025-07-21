// ===============================
// 🎓 Lesson 2: Basic Set Methods
// ===============================

const animals = new Set();

// Add items
animals.add("dog");
animals.add("cat");
animals.add("hamster");

// Check if an item exists
console.log("🐱 Has cat?", animals.has("cat")); // true

// Delete an item
animals.delete("dog");

// Size of the Set
console.log("🐾 Set size:", animals.size); // 2

// Show all values
console.log("🐶 All animals:", animals); // Set(2) {"cat", "hamster"}
