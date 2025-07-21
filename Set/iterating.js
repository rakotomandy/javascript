// ===============================
// 🎓 Lesson 3: Looping Through Sets
// ===============================

const colors = new Set(["red", "green", "blue"]);

for (const color of colors) {
  console.log("🎨 Color:", color);
}

// Convert Set to Array
const colorArray = [...colors];
console.log("📋 As Array:", colorArray); // ["red", "green", "blue"]
