// ===============================
// 🎓 Lesson 3: Convert Date to Strings
// ===============================

const d = new Date();

// Convert full date-time to string
console.log("📜 toString():", d.toString()); // Full local date and time string

// UTC string
console.log("🌍 toUTCString():", d.toUTCString()); // Date/time in UTC

// Date part only
console.log("📅 toDateString():", d.toDateString()); // e.g., "Fri Apr 25 2025"

// Time part only
console.log("⏰ toTimeString():", d.toTimeString()); // e.g., "14:32:45 GMT+..."

console.log("🔢 ISO format:", d.toISOString()); // e.g., 2025-04-25T12:30:00.000Z
