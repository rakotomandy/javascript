// Full Lesson: ASCII in JavaScript with Commented Explanations

// ASCII stands for American Standard Code for Information Interchange.
// Each character (letter, number, symbol) is represented by a numeric code (0–127).
// JavaScript uses Unicode, but ASCII is the first 128 characters of Unicode.

// 1. Getting ASCII code of a character using charCodeAt()
let char = 'A';
let asciiCode = char.charCodeAt(0); // Get ASCII of character at index 0
console.log(`The ASCII code of '${char}' is:`, asciiCode); // Outputs: 65

// 2. Getting character from ASCII code using String.fromCharCode()
let code = 66;
let character = String.fromCharCode(code); // Converts ASCII to character
console.log(`The character for ASCII code ${code} is:`, character); // Outputs: 'B'

// 3. Looping over a string to get ASCII codes
let message = "Hello!";
console.log("ASCII codes for each character in 'Hello!':");
for (let i = 0; i < message.length; i++) {
  let code = message.charCodeAt(i);
  console.log(`'${message[i]}' =>`, code);
}

// 4. Creating a function to convert string to ASCII array
function stringToAsciiArray(str) {
  let asciiArray = [];
  for (let i = 0; i < str.length; i++) {
    asciiArray.push(str.charCodeAt(i));
  }
  return asciiArray;
}

console.log("ASCII array of 'OpenAI':", stringToAsciiArray("OpenAI"));

// 5. Creating a function to convert ASCII array back to string
function asciiArrayToString(arr) {
  return arr.map(code => String.fromCharCode(code)).join('');
}

let asciiArr = [72, 101, 108, 108, 111];
console.log("String from ASCII array:", asciiArrayToString(asciiArr)); // 'Hello'

// 6. ASCII table preview from 32 to 126 (printable characters)
console.log("Printable ASCII Characters (32 to 126):");
for (let i = 32; i <= 126; i++) {
  console.log(`${i} => '${String.fromCharCode(i)}'`);
}

// 7. ASCII-based Caesar Cipher Example (shift letters by a key)
function caesarEncrypt(text, shift) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    // Encrypt only uppercase letters (65–90) and lowercase (97–122)
    if (code >= 65 && code <= 90) {
      encrypted += String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      encrypted += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      encrypted += text[i]; // Non-letter characters remain unchanged
    }
  }
  return encrypted;
}

console.log("Caesar Cipher of 'Hello' with shift 3:", caesarEncrypt("Hello", 3)); // Khoor

// 8. Detect if a character is ASCII or not
function isAscii(char) {
  return char.charCodeAt(0) <= 127;
}

console.log("Is 'ç' an ASCII character?", isAscii('ç')); // false
console.log("Is 'C' an ASCII character?", isAscii('C')); // true

// 9. Convert all characters in a string to their hex ASCII representation
function asciiToHex(str) {
  return str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
}

console.log("Hexadecimal ASCII of 'Hi':", asciiToHex("Hi")); // 48 69

// 10. Convert hex back to characters
function hexToAscii(hexStr) {
  return hexStr.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

console.log("Hex to ASCII '48 69':", hexToAscii("48 69")); // Hi

// Summary:
// - charCodeAt(index) => ASCII code of character at given index
// - fromCharCode(code) => Character from ASCII code
// - ASCII codes range from 0–127 (standard) and 32–126 for printable characters
// - Useful for encryption, encoding, binary manipulation, and more
