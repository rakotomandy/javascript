// -------------------------------------------------------------
// 🧠 COMPLETE JAVASCRIPT LESSON ON TYPED ARRAYS AND BUFFERS
// -------------------------------------------------------------
// ----------------------------------------
// 📘 ArrayBuffer Definition
// ----------------------------------------
/**
 * 🔶 What is an ArrayBuffer?
 * An ArrayBuffer is a low-level binary data buffer used to store raw memory.
 * It represents a fixed-length sequence of bytes (not directly readable).
 *
 * ➕ It is often used with **typed arrays** (like Uint8Array, Float32Array) to read or write
 *     binary data in a structured way.
 *
 * ➕ It is useful for:
 *   - Reading binary files (images, videos, PDFs)
 *   - Working with WebSockets, WebRTC, or other binary streams
 *   - Creating or manipulating binary formats like WAV, PNG, etc.
 *
 * 🔧 Syntax:
 *   const buffer = new ArrayBuffer(byteLength);
 *   - `byteLength`: number of bytes to allocate (fixed size).
 *
 * 🔒 Note:
 *   You cannot read/write directly to an ArrayBuffer.
 *   Instead, you use typed array views (e.g. `new Uint8Array(buffer)`) to work with it.
 */

// 🔹 1. ArrayBuffer: A raw binary data buffer that holds a fixed-length sequence of bytes
// It cannot be read or written directly; we need a view to interact with it
const buffer = new ArrayBuffer(16); // creates a buffer of 16 bytes
console.log('ArrayBuffer length:', buffer.byteLength); // Output: 16

// 🔹 Definition:
// ArrayBuffer is a generic, fixed-length binary data buffer.
// It's a container for bytes, which must be accessed using a TypedArray or DataView.

// 🔹 Use case:
// Used when dealing with binary data, such as file manipulation, network streams, or WebGL buffers.


// 🔹 2. TypedArray: Views that interpret the buffer as an array of typed values
// Here are the TypedArray types with explanation and range

// Uint8Array (unsigned 8-bit integer)
const uint8 = new Uint8Array(buffer); // view for 8-bit unsigned integers
uint8[0] = 255; // Max value
console.log('Uint8Array:', uint8); // Output: [255, 0, 0, ..., 0]

// Definition:
// Uint8Array treats each byte as a number from 0 to 255
// Usage: Often used for raw binary formats, image data, etc.

// Int8Array (signed 8-bit integer)
const int8 = new Int8Array(4);
int8[0] = -128; // Min value
int8[1] = 127;  // Max value
console.log('Int8Array:', int8); // Output: [-128, 127, 0, 0]

// Uint16Array (unsigned 16-bit integer)
const uint16 = new Uint16Array(2);
uint16[0] = 65535; // Max value
console.log('Uint16Array:', uint16); // Output: [65535, 0]

// Int16Array (signed 16-bit integer)
const int16 = new Int16Array(2);
int16[0] = -32768;
int16[1] = 32767;
console.log('Int16Array:', int16); // Output: [-32768, 32767]

// Uint32Array (unsigned 32-bit integer)
const uint32 = new Uint32Array(1);
uint32[0] = 4294967295;
console.log('Uint32Array:', uint32); // Output: [4294967295]

// Int32Array (signed 32-bit integer)
const int32 = new Int32Array(1);
int32[0] = -2147483648;
console.log('Int32Array:', int32); // Output: [-2147483648]

// Float32Array (32-bit float, ~7 digits precision)
const float32 = new Float32Array(1);
float32[0] = 3.14159;
console.log('Float32Array:', float32); // Output: [3.14159]

// Float64Array (64-bit float, ~16 digits precision)
const float64 = new Float64Array(1);
float64[0] = 3.141592653589793;
console.log('Float64Array:', float64); // Output: [3.141592653589793]


// 🔹 Summary of Typed Arrays:
/*
| Type           | Size     | Signed | Range / Precision                       |
|----------------|----------|--------|-----------------------------------------|
| Uint8Array     | 1 byte   | No     | 0 to 255                                 |
| Int8Array      | 1 byte   | Yes    | -128 to 127                              |
| Uint16Array    | 2 bytes  | No     | 0 to 65,535                              |
| Int16Array     | 2 bytes  | Yes    | -32,768 to 32,767                        |
| Uint32Array    | 4 bytes  | No     | 0 to 4,294,967,295                       |
| Int32Array     | 4 bytes  | Yes    | -2,147,483,648 to 2,147,483,647          |
| Float32Array   | 4 bytes  | —      | ~7 decimal digits precision              |
| Float64Array   | 8 bytes  | —      | ~16 decimal digits precision             |
*/


// 🔹 3. Views (Definition):
// A view is an object that provides a way to read and write to an ArrayBuffer
// All TypedArrays and DataView are examples of views

// Usage of view: accessing and modifying buffer data in a specific format
let raw = new ArrayBuffer(4); // 4 bytes = 32 bits
let view = new Uint32Array(raw); // view buffer as unsigned 32-bit int
view[0] = 123456;
console.log('View (Uint32Array):', view); // Output: [123456]


// 🔹 4. DataView: A flexible view to read/write values at byte-level
// Lets you control endianness and use various data types
let dv = new DataView(raw);
dv.setUint8(0, 0xFF);   // Set first byte to 255
dv.setInt16(1, -1234);  // Set 2 bytes starting at byte 1
console.log('DataView getUint8:', dv.getUint8(0)); // Output: 255
console.log('DataView getInt16:', dv.getInt16(1)); // Output: -1234

// 🔹 Definition:
// DataView lets you read/write at any byte offset with fine-grained control
// It's ideal for network protocols, file formats, etc.


// 🔹 5. Advanced Usage: Sharing memory between views
let sharedBuffer = new ArrayBuffer(8);
let int32View = new Int32Array(sharedBuffer);
let float64View = new Float64Array(sharedBuffer);

int32View[0] = 42;
console.log('Shared as Int32:', int32View[0]); // Output: 42
console.log('Shared as Float64:', float64View[0]); // Raw binary reinterpreted


// 🔹 6. Real-world usage: Simulating binary file read
let fileBuffer = new ArrayBuffer(10);
let fileView = new Uint8Array(fileBuffer);

for (let i = 0; i < fileView.length; i++) {
  fileView[i] = i * 2; // Fill with dummy binary data
}
console.log('Binary file data:', fileView);


// 🔹 7. Utility functions for buffer handling
function createBufferFromNumbers(numbers) {
  const buf = new ArrayBuffer(numbers.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < numbers.length; i++) {
    view[i] = numbers[i];
  }
  return view;
}

console.log('Custom buffer from array:', createBufferFromNumbers([10, 20, 30]));


// 🔹 8. Performance: Typed arrays are faster than regular arrays for numerical processing
let sum = 0;
const bigArray = new Float64Array(1000);
for (let i = 0; i < bigArray.length; i++) {
  bigArray[i] = i * 0.1;
  sum += bigArray[i];
}
console.log('Sum of Float64Array:', sum);


// 🔹 9. Copying between buffers using set and subarray
let a = new Uint8Array([1, 2, 3]);
let b = new Uint8Array(3);
b.set(a);
console.log('Copied buffer:', b); // Output: [1, 2, 3]


// 🔹 10. Endianness: Check system byte order
function isLittleEndian() {
  let buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // Write with little-endian
  return new Int16Array(buf)[0] === 256;
}
console.log('System is little-endian?', isLittleEndian());


// ----------------------------------------------
// 🏁 END OF TYPED ARRAY & BUFFER FULL LESSON
// ----------------------------------------------
// More can be added including buffer slicing, streaming use, and interop with Web APIs
