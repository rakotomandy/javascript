// ===============================
// 🎓 Lesson 1: Format Number with Locale
// ===============================

const number = 1234567.89;

// Format for US English
const us = new Intl.NumberFormat('en-US');
console.log("🇺🇸 US Format:", us.format(number)); // "1,234,567.89"

// Format for French (France)
const fr = new Intl.NumberFormat('fr-FR');
console.log("🇫🇷 French Format:", fr.format(number)); // "1 234 567,89"

// Format for India (Hindi)
const hi = new Intl.NumberFormat('hi-IN');
console.log("🇮🇳 Indian Format:", hi.format(number)); // "12,34,567.89"
