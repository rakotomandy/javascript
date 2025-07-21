// Step 1: Create an ArrayBuffer of 16 bytes
const buffer = new ArrayBuffer(16); 
// An ArrayBuffer is a fixed-length raw binary data buffer.
// Here, we create a buffer of 16 bytes (128 bits).

// Step 2: Create a view on the buffer using a typed array
const int32View = new Int32Array(buffer);
// Int32Array creates a view where each element is a 32-bit signed integer (4 bytes).
// Since the buffer is 16 bytes and each Int32 is 4 bytes, this view has 4 elements.

// Step 3: Set values in the view
int32View[0] = 42;
int32View[1] = 100;
int32View[2] = -7;
int32View[3] = 256;
// These numbers are stored as binary in the buffer via the view.

// Step 4: Read values from the buffer
console.log(int32View[0]); // 42
console.log(int32View[1]); // 100
console.log(int32View[2]); // -7
console.log(int32View[3]); // 256
// Reading from the view gives you the numbers you wrote.

// Step 5: Create a different view (e.g., Uint8Array) to inspect the bytes
const byteView = new Uint8Array(buffer);
// Uint8Array views the buffer as 8-bit unsigned integers (1 byte each).
// This view will have 16 elements (1 per byte in the buffer).

console.log(byteView);
// You will see how the 32-bit numbers were broken into 8-bit chunks.
// The byte values show how data is stored in memory.

// Extra Note:
// ArrayBuffers themselves don't know about data types or structure.
// You need a TypedArray or DataView to interpret the contents.

