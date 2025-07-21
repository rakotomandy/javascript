// ===================================================
// ✅ 1. String Creation
// ===================================================
/*
String is a sequence of characters. Can be created using:
- Single quotes ''
- Double quotes ""
- Backticks `` for template literals
- String constructor: String()
*/

let str1 = 'Hello';         // Single quotes
let str2 = "World";         // Double quotes
let str3 = `Template`;      // Template literal
let str4 = String(12345);   // Converts number to string
console.log(str4); // "12345"


// ===================================================
// ✅ 2. length
// ===================================================
/*
Returns the number of characters in a string.
*/
console.log(str1.length); // 5


// ===================================================
// ✅ 3. charAt(index)
/*
Returns the character at the given index.
*/
console.log(str1.charAt(1)); // 'e'


// ===================================================
// ✅ 4. charCodeAt(index)
/*
Returns the ASCII/Unicode code of the character at the index.
*/
console.log(str1.charCodeAt(0)); // 72 (for 'H')


// ===================================================
// ✅ 5. codePointAt(index)
/*
Returns the full Unicode code point of a character.
Useful for emojis and special characters.
*/
console.log("💙".codePointAt(0)); // 128153


// ===================================================
// ✅ 6. indexOf(searchValue)
/*
Returns the first index where substring is found, or -1 if not found.
*/
let phrase = "JavaScript is great";
console.log(phrase.indexOf("Script")); // 4


// ===================================================
// ✅ 7. lastIndexOf(searchValue)
/*
Returns the last occurrence index of the substring.
*/
let repeatPhrase = "red green red";
console.log(repeatPhrase.lastIndexOf("red")); // 10


// ===================================================
// ✅ 8. includes(searchValue)
/*
Returns true if substring exists in string, otherwise false.
*/
console.log(phrase.includes("great")); // true


// ===================================================
// ✅ 9. startsWith(prefix)
/*
Checks if the string begins with the given prefix.
*/
console.log(phrase.startsWith("Java")); // true


// ===================================================
// ✅ 10. endsWith(suffix)
/*
Checks if the string ends with the given suffix.
*/
console.log(phrase.endsWith("great")); // true


// ===================================================
// ✅ 11. slice(start, end)
/*
Returns a substring from start index up to (not including) end index.
*/
console.log(phrase.slice(0, 10)); // "JavaScript"


// ===================================================
// ✅ 12. substring(start, end)
/*
Similar to slice, but does not accept negative indexes.
*/
console.log(phrase.substring(0, 10)); // "JavaScript"


// ===================================================
// ✅ 13. substr(start, length)
/*
Returns substring starting from index, of given length.
Deprecated but still supported.
*/
console.log(phrase.substr(0, 10)); // "JavaScript"


// ===================================================
// ✅ 14. toUpperCase() / toLowerCase()
/*
Converts string to all uppercase or all lowercase letters.
*/
console.log("Hello".toUpperCase()); // HELLO
console.log("Hello".toLowerCase()); // hello


// ===================================================
// ✅ 15. replace(searchValue, newValue)
/*
Replaces first match of searchValue with newValue.
*/
console.log("I like JS".replace("JS", "JavaScript")); // I like JavaScript


// ===================================================
// ✅ 16. replaceAll(searchValue, newValue)
/*
Replaces all occurrences of searchValue.
(Requires ES2021 or later)
*/
console.log("red red red".replaceAll("red", "blue")); // blue blue blue


// ===================================================
// ✅ 17. repeat(count)
/*
Repeats the string 'count' times.
*/
console.log("ha".repeat(3)); // hahaha


// ===================================================
// ✅ 18. trim(), trimStart(), trimEnd()
/*
Removes whitespace from both ends, start, or end of string.
*/
let messy = "   clean me   ";
console.log(messy.trim());      // "clean me"
console.log(messy.trimStart()); // "clean me   "
console.log(messy.trimEnd());   // "   clean me"


// ===================================================
// ✅ 19. padStart(length, padString)
/*
Pads string from the start until it reaches specified length.
*/
console.log("5".padStart(3, "0")); // "005"


// ===================================================
// ✅ 20. padEnd(length, padString)
/*
Pads string at the end to reach specified length.
*/
console.log("5".padEnd(3, "*")); // "5**"


// ===================================================
// ✅ 21. split(separator)
/*
Splits string into an array based on separator.
*/
let fruits = "apple,banana,grape";
console.log(fruits.split(",")); // ["apple", "banana", "grape"]


// ===================================================
// ✅ 22. concat(...strings)
/*
Joins multiple strings into one.
*/
let hello = "Hello";
let world = "World";
console.log(hello.concat(" ", world)); // "Hello World"


// ===================================================
// ✅ 23. localeCompare(str2)
/*
Compares two strings lexicographically.
Returns -1 if before, 0 if equal, 1 if after.
*/
console.log("apple".localeCompare("banana")); // -1


// ===================================================
// ✅ 24. match(regex)
/*
Returns matches found based on regex pattern.
*/
let text = "a1 b2 c3";
console.log(text.match(/\d/g)); // ["1", "2", "3"]


// ===================================================
// ✅ 25. search(regex)
/*
Returns index of first match using regex.
*/
console.log(text.search(/\d/)); // 1


// ===================================================
// ✅ 26. reverse (custom implementation)
/*
Reverses a string using split, reverse, join.
*/
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello")); // "olleh"


// ===================================================
// ✅ 27. insert (custom implementation)
/*
Inserts a substring into a string at a given position.
*/
function insert(str, toInsert, index) {
  return str.slice(0, index) + toInsert + str.slice(index);
}
console.log(insert("Heo", "ll", 2)); // "Hello"


// ===================================================
// ✅ 28. valueOf()
/*
Returns the primitive string value of a String object.
*/
let strObj = new String("abc");
console.log(strObj.valueOf()); // "abc"


// ===================================================
// ✅ 29. toString()
/*
Converts value to string.
*/
let n = 100;
console.log(n.toString()); // "100"


// ===================================================
// ✅ 30. String.raw (tagged template)
/*
Preserves raw escape sequences in template literals.
*/
let raw = String.raw`Line1\nLine2`;
console.log(raw); // Line1\nLine2 (not interpreted)


// ===================================================
// ✅ 31. fromCodePoint(code)
/*
Converts Unicode code to character.
*/
console.log(String.fromCodePoint(128153)); // 💙


// ===================================================
// ✅ 32. Exercise: Capitalize Each Word
/*
Makes the first letter of every word uppercase.
*/
function capitalize(str) {
  return str.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(" ");
}
console.log(capitalize("hello world from javascript"));
// Hello World From Javascript


// ===================================================
// ✅ 33. isBlank()
/*
Checks if string is empty or only spaces.
*/
function isBlank(str) {
  return str.trim().length === 0;
}
console.log(isBlank("   ")); // true
console.log(isBlank("abc")); // false
