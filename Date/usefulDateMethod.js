// ===============================
// 🎓 Lesson 2: Get and Set Date Parts
// ===============================

const exampleDate = new Date("2023-10-20T08:45:00");

// Get individual components of the date
console.log("📆 Year:", exampleDate.getFullYear());   // 2023
console.log("🗓️ Month (0-11):", exampleDate.getMonth()); // 9 (October)
console.log("📅 Day of Month:", exampleDate.getDate()); // 20
console.log("🕒 Hours:", exampleDate.getHours());     // 8
console.log("🕑 Minutes:", exampleDate.getMinutes()); // 45
console.log("⏱️ Seconds:", exampleDate.getSeconds()); // 0

// Modify parts of the date
exampleDate.setFullYear(2024);  // Set year to 2024
exampleDate.setMonth(0);        // Set to January
console.log("🔧 Modified Date:", exampleDate); // New date with changes
