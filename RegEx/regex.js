// ===================================================
// ✅ 1. What is RegExp in JavaScript?
// ===================================================
/*
A Regular Expression (RegExp) is a sequence of characters that defines a search pattern.

Usage:
✔ Test if a string matches a pattern
✔ Extract parts of a string
✔ Replace matched text
*/

// Two syntaxes:
const regex1 = /abc/;                  // literal
const regex2 = new RegExp("abc");      // constructor form


// ===================================================
// ✅ 2. Flags Overview
// ===================================================
/*
Flags modify how a pattern behaves:

g → global (match all, not just the first)
i → case-insensitive
m → multiline (^ and $ match line start/end)
u → Unicode support
*/

const ex = /hello/i;
console.log(ex.test("HELLO")); // true


// ===================================================
// ✅ 3. .test(string)
// ===================================================
/*
Returns true if the string matches the pattern.
*/
console.log(/dog/.test("my dog"));  // true
console.log(/cat/.test("no animals")); // false


// ===================================================
// ✅ 4. .exec(string)
// ===================================================
/*
Returns detailed match result (array with info) or null.
Good for extracting captured groups.
*/
let result = /c(.)t/.exec("I met a cat");
console.log(result); // ["cat", "a"]


// ===================================================
// ✅ 5. String.match(regex)
// ===================================================
/*
Returns array of matches if global flag is used,
or detailed result like .exec() if not.
*/
let numbers = "a1 b2 c3";
console.log(numbers.match(/\d/g)); // ["1", "2", "3"]


// ===================================================
// ✅ 6. String.search(regex)
// ===================================================
/*
Returns the index of the first match.
*/
console.log("abc123".search(/\d/)); // 3


// ===================================================
// ✅ 7. String.replace(regex, replacement)
// ===================================================
/*
Replaces matched string with the provided replacement.
*/
let email = "my email is abc@example.com";
let censored = email.replace(/\S+@\S+\.\S+/, "[hidden]");
console.log(censored); // my email is [hidden]


// ===================================================
// ✅ 8. Character Classes and Anchors
// ===================================================

// . → any character except newline
// ^ → start of string
// $ → end of string
// \d → digit [0-9]
// \w → word character [a-zA-Z0-9_]
// \s → whitespace (space, tab, etc.)
// \b → word boundary

console.log(/^abc/.test("abcdef")); // true
console.log(/\d/.test("year 2025")); // true
console.log(/\bcat\b/.test("cat")); // true
console.log(/\bcat\b/.test("catalog")); // false


// ===================================================
// ✅ 9. Quantifiers
// ===================================================
/*
*    → 0 or more times
+    → 1 or more times
?    → 0 or 1 time
{n}  → exactly n times
{n,} → n or more times
{n,m} → between n and m times
*/
console.log(/a{3}/.test("caaa"));     // true
console.log(/lo*/.test("looong"));    // true
console.log(/lo+/.test("log"));       // true
console.log(/a{2,4}/.test("aaaaa"));  // true


// ===================================================
// ✅ 10. Alternation ( | )
// ===================================================
/*
Matches either the pattern on the left or the right.
*/
console.log(/cat|dog/.test("I love my cat")); // true


// ===================================================
// ✅ 11. Grouping and Capturing ( 🔥 Important 🔥 )
// ===================================================

/*
() → Capturing Group

- Groups a part of the pattern as a unit
- Can extract matched sub-parts
- Numbered by order of opening parenthesis: $1, $2...

Syntax: /(group1)-(group2)/

Use Case: Extract year, month, day from "2025-07-10"
*/

let date = "2025-07-10";
let regex = /^(\d{4})-(\d{2})-(\d{2})$/;
let match = regex.exec(date);

console.log(match[0]); // full match: 2025-07-10
console.log(match[1]); // year: 2025
console.log(match[2]); // month: 07
console.log(match[3]); // day: 10


// ✅ Grouping with .replace()

let nameFormat = "Smith, John";
let rearranged = nameFormat.replace(/(\w+), (\w+)/, "$2 $1");
console.log(rearranged); // John Smith


// ===================================================
// ✅ 12. Non-Capturing Groups (?:...)
// ===================================================
/*
Used when you want to group parts but do not need to capture them.
*/

let title = "Mr. Eric";
console.log(title.replace(/(?:Mr|Mrs)\. /, "")); // Eric


// ===================================================
// ✅ 13. Named Capturing Groups (ES2018+)
// ===================================================
/*
Use (?<name>...) to name a group for clarity.

Benefits:
✔ More readable than numbered groups
✔ Access with match.groups.<name>
*/

let fullDate = "2025-07-10";
let namedRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let namedMatch = fullDate.match(namedRegex);

console.log(namedMatch.groups.year);  // 2025
console.log(namedMatch.groups.month); // 07
console.log(namedMatch.groups.day);   // 10


// ===================================================
// ✅ 14. Backreferences ( \1, \2... )
// ===================================================
/*
Allows you to reuse captured groups.

Example: Match repeated word:
*/
let doubleWord = /(\b\w+\b)\s+\1/;
console.log(doubleWord.test("hello hello")); // true


// ===================================================
// ✅ 15. Lookahead and Lookbehind (ES2018+)
// ===================================================
/*
Lookahead: (?=...) or (?!...)
Lookbehind: (?<=...) or (?<!...)

They match patterns that come before/after another pattern
WITHOUT including it in the match result.
*/

console.log(/foo(?=bar)/.test("foobar")); // true → 'foo' followed by 'bar'
console.log(/foo(?!bar)/.test("foobaz")); // true → 'foo' not followed by 'bar'

console.log(/(?<=\$)\d+/.exec("$99.99")); // ["99"] — only match digits after $


// ===================================================
// ✅ 16. Escaping Special Characters
// ===================================================
/*
Use \ to match literal symbols like . * + ? [ ] ( )
*/
let price = "Total is $20.00";
console.log(price.match(/\$\d+\.\d{2}/)); // ["$20.00"]


// ===================================================
// ✅ 17. Practice: Clean Extra Spaces
// ===================================================
let messySentence = "This   sentence  has   extra   spaces.";
let cleanSentence = messySentence.replace(/\s+/g, " ");
console.log(cleanSentence); // "This sentence has extra spaces."


// ===================================================
// ✅ 18. Practice: Validate Email
// ===================================================
function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
}
console.log(isValidEmail("abc@example.com")); // true
console.log(isValidEmail("abc.com")); // false

