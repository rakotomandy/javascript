// ===============================
// 🎓 Lesson 3: Format Percentages
// ===============================

const discount = 0.25; // 25%

// Format as percentage
const percent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 0
});
console.log("🔢 Percent:", percent.format(discount)); // "25%"
