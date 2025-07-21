// ===============================
// 🎓 Lesson 7: Advanced Methods
// ===============================

const nums = [1, 2, 3, 4, 5];

// map() - transform each element
const squares = nums.map(n => n * n);
console.log("🔢 Squares:", squares); // [1, 4, 9, 16, 25]

// filter() - keep only even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log("⚖️ Evens:", evens); // [2, 4]

// reduce() - sum all values
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("➕ Sum:", sum); // 15
