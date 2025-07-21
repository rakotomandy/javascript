// ===============================
// 🎓 Lesson 3: Length and Looping
// ===============================

const pets = ["dog", "cat", "hamster"];

// Get the number of elements
console.log("🔢 Number of pets:", pets.length); // 3

// Loop through array using for loop
for (let i = 0; i < pets.length; i++) {
  console.log(`🐾 Pet ${i + 1}:`, pets[i]);
}

// Loop using for...of
for (const pet of pets) {
  console.log("💛 Pet:", pet);
}
