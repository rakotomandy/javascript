// ===============================
// 🎓 Lesson 2: Format as Currency
// ===============================

const price = 599.99;

// Format as USD currency
const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
console.log("💵 USD:", usd.format(price)); // "$599.99"

// Format as Euro (France)
const euro = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR'
});
console.log("💶 EUR:", euro.format(price)); // "599,99 €"

// Format as Indian Rupees
const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR'
});
console.log("🇮🇳 INR:", inr.format(price)); // "₹599.99"
