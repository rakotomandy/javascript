// ===============================
// 🎓 Lesson 4: Format Date with Intl.DateTimeFormat
// ===============================

const date = new Date("2025-04-25T15:30:00");

// Format date in US English
const usFormat = new Intl.DateTimeFormat("en-US").format(date);
console.log("🇺🇸 US Format:", usFormat); // e.g., 4/25/2025

// Format date in French
const frFormat = new Intl.DateTimeFormat("fr-FR").format(date);
console.log("🇫🇷 French Format:", frFormat); // e.g., 25/04/2025

// Format with custom options in UK English
const customFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",   // Full day name: Monday, Tuesday, etc.
  year: "numeric",   // 2025
  month: "long",     // Full month: April
  day: "numeric",    // Day number: 25
  hour: "2-digit",   // Hour in 2-digit format
  minute: "2-digit", // Minute in 2-digit format
}).format(date);

console.log("🛠️ Custom Format:", customFormat); 
// Output: e.g., "Friday, 25 April 2025 at 15:30"
