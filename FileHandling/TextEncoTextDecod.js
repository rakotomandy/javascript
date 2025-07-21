// =========================================
// 🧠 What are TextEncoder and TextDecoder?
// =========================================
// These are built-in JavaScript classes that convert between strings and binary data (Uint8Array).
// Useful for handling text in typed arrays, working with streams, files, blobs, etc.

// -----------------------------------------
// 1. TextEncoder: Convert String → Uint8Array
// -----------------------------------------

// Create a TextEncoder instance (UTF-8 by default)
const encoder = new TextEncoder();

// Convert a string to binary (Uint8Array)
const encoded = encoder.encode("Hello 👋");

// Show the Uint8Array result
console.log("🔢 Encoded Uint8Array:", encoded);
// Output might look like: Uint8Array(11) [72, 101, 108, 108, 111, 32, 240, 159, 145, 139]

// Explanation:
// "Hello " = ASCII characters
// "👋" is a 4-byte emoji in UTF-8: [240, 159, 145, 139]

// -----------------------------------------
// 2. TextDecoder: Convert Uint8Array → String
// -----------------------------------------

// Create a TextDecoder instance (UTF-8 decoding)
const decoder = new TextDecoder();

// Decode the binary back into string
const decoded = decoder.decode(encoded);
console.log("🔤 Decoded string:", decoded); // "Hello 👋"

// -----------------------------------------
// 3. Encoding Non-English Characters
// -----------------------------------------

const french = "Café à la crème";

// Encode it to binary
const encodedFrench = encoder.encode(french);
console.log("🇫🇷 Encoded French:", encodedFrench);
// It includes bytes for é and à, which are multi-byte UTF-8 characters

// Decode it back
console.log("🗣️ Decoded French:", decoder.decode(encodedFrench)); // "Café à la crème"

// -----------------------------------------
// 4. Partial Decode with Error Handling
// -----------------------------------------

// Create a broken Uint8Array (cutting emoji in half)
const broken = encoded.slice(0, 8); // Halfway through the emoji

// Decode using a fatal decoder (will throw if invalid sequence)
try {
  const badDecoder = new TextDecoder("utf-8", { fatal: true });
  console.log("🚫 Broken decode:", badDecoder.decode(broken));
} catch (error) {
  console.error("❗ Unicode decode error:", error.message);
}

// Decode using a forgiving decoder (replace invalid chars with �)
const forgivingDecoder = new TextDecoder("utf-8", { fatal: false });
console.log("💡 Forgiving decode:", forgivingDecoder.decode(broken));
// Output: "Hello �"

// -----------------------------------------
// 5. Use Case: Store Text in ArrayBuffer
// -----------------------------------------

// Step 1: Encode string
const message = "Binary text 📦";
const encodedMessage = encoder.encode(message);

// Step 2: Copy into ArrayBuffer
const buffer = new ArrayBuffer(encodedMessage.length);
const view = new Uint8Array(buffer);
view.set(encodedMessage);

// Step 3: Decode from buffer
const decodedAgain = decoder.decode(view);
console.log("🔁 Encoded & decoded from buffer:", decodedAgain); // "Binary text 📦"
/* 
TextEncoder	Converts string → Uint8Array (UTF-8)
TextDecoder	Converts Uint8Array → string
fatal: true	Throws error on invalid sequences
fatal: false	Replaces invalid chars with �
*/