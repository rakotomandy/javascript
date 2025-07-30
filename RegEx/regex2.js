// ================================================
// JAVASCRIPT REGULAR EXPRESSIONS (RegExp) COMPLETE LESSON
// ================================================

// 1. CREATING A REGULAR EXPRESSION
// You can create RegExp using two ways:

// a) Using literal notation
let pattern1 = /hello/;

// b) Using the RegExp constructor
let pattern2 = new RegExp("hello");

// These patterns will match the exact word "hello" in a string.


// 2. TESTING A STRING: .test()
// Returns true if the pattern is found, otherwise false
let str = "hello world";
console.log(/hello/.test(str)); // true


// 3. MATCHING A STRING: .match()
// Returns an array of matches, or null if no match
let result = str.match(/hello/);
console.log(result); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]


// 4. SEARCHING A STRING: .search()
// Returns the index of the first match, or -1 if not found
console.log(str.search(/world/)); // 6


// 5. REPLACING IN A STRING: .replace()
// Replaces matched text with something else
let newStr = str.replace(/world/, "there");
console.log(newStr); // "hello there"


// 6. SPLITTING A STRING: .split()
// Splits a string by the matched pattern
let csv = "apple,banana,mango";
console.log(csv.split(/,/)); // ["apple", "banana", "mango"]


// 7. FLAGS IN REGEX
// i: case-insensitive, g: global (find all matches), m: multiline

let text = "Hello HELLO hello";

// Using 'i' to ignore case
console.log(/hello/i.test(text)); // true

// Using 'g' to get all matches
console.log(text.match(/hello/gi)); // ["Hello", "HELLO", "hello"]


// 8. METACHARACTERS AND SYMBOLS

// ^  - Start of string
// $  - End of string
// .  - Any character except newline
// *  - 0 or more times
// +  - 1 or more times
// ?  - 0 or 1 time (optional)
// \d - Digit (0-9)
// \D - Non-digit
// \w - Word character (a-zA-Z0-9_)
// \W - Non-word character
// \s - Whitespace
// \S - Non-whitespace
// {n}     - Exactly n times
// {n,}    - At least n times
// {n,m}   - Between n and m times
// [abc]   - Match 'a' or 'b' or 'c'
// [^abc]  - Not 'a', 'b', or 'c'
// (x)     - Grouping
// |       - OR operator

console.log(/^h.*/.test("hello")); // true - starts with h, any chars after
console.log(/\d+/.test("abc123")); // true - at least one digit


// 9. ESCAPING CHARACTERS
// Use \ to escape special characters

let dollarTest = "Price is $100";
console.log(/\$100/.test(dollarTest)); // true


// 10. EXAMPLE: EMAIL VALIDATION

let email = "john.doe@example.com";
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i;
console.log(emailRegex.test(email)); // true


// 11. CAPTURING GROUPS

let nameStr = "My name is John Doe";
let nameMatch = nameStr.match(/My name is (\w+) (\w+)/);
console.log(nameMatch[1]); // "John"
console.log(nameMatch[2]); // "Doe"


// 12. NON-CAPTURING GROUPS

let color = "gray or grey";
let colorRegex = /gr(a|e)y/;
console.log(colorRegex.test(color)); // true


// 13. LOOKAHEAD AND LOOKBEHIND

// Positive lookahead: x(?=y)
console.log("abc123".match(/\d+(?=3)/)); // Matches digits followed by 3 -> ['12']

// Negative lookahead: x(?!y)
console.log("abc124".match(/\d+(?!3)/)); // Matches digits not followed by 3 -> ['124']

// ⚠ Note: JavaScript does not support lookbehind in older engines


// 14. REPLACING WITH GROUPS

let phone = "Phone: 123-456-7890";
let masked = phone.replace(/(\\d{3})-(\\d{3})-(\\d{4})/, "***-***-$3");
console.log(masked); // Phone: ***-***-7890


// 15. DYNAMIC REGEX

let word = "test";
let dynamicRegex = new RegExp("^" + word + "$");
console.log(dynamicRegex.test("test")); // true

