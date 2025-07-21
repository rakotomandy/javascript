// ===============================
// 🎓 Lesson 5: Scientific and Compact Notation
// ===============================

const bigNum = 1234567;

// Scientific notation
const sci = new Intl.NumberFormat('en-US', {
  notation: "scientific"
});
console.log("🔬 Scientific:", sci.format(bigNum)); // "1.234567E6"

// Compact notation: shortens large numbers
const compact = new Intl.NumberFormat('en-US', {
  notation: "compact",
  compactDisplay: "short"
});
console.log("📦 Compact:", compact.format(bigNum)); // "1.2M"


/* 
Feature	             Option Used	                  Example Output

Locale formatting	'en-US', 'fr-FR'	              1,000,000 / 1 000 000
Currency	         style: 'currency'	              $5.00, 5,00 €
Percent	             style: 'percent'	              25%
Decimal  control	 minimumFractionDigits	          3.10, 3.1000
Notation	         notation: 'scientific'	          1.23E6
Compact	             notation: 'compact'	          1.2M, 1K
*/