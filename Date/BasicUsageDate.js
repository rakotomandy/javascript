// ===============================
// 🎓 Lesson 1: Creating Date Objects
// ===============================

// Create a Date object for the current date and time
const now = new Date(); 
console.log("📅 Current Date & Time:", now); // Shows the current timestamp

// Create a date with specific values: year, month (0-11), day
const independenceDay = new Date(1776, 6, 4); // July 4, 1776
console.log("🎉 Independence Day:", independenceDay); // Month is zero-based (6 = July)

// Create a date from a valid date string (ISO format)
const isoDate = new Date("2025-12-25T10:00:00Z");
console.log("🎄 Christmas ISO:", isoDate); // UTC time used
