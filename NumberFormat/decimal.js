// ===============================
// 🎓 Lesson 4: Format with Custom Decimal Places
// ===============================

const pi = 3.1415926535;

// Limit to 2 decimal places
const twoDecimals = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log("🎯 PI (2 decimals):", twoDecimals.format(pi)); // "3.14"

// Force at least 4 decimal places
const fourDecimals = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 4
});
console.log("🎯 PI (4 decimals):", fourDecimals.format(pi)); // "3.1416"
