// ========================================
// 🧠 What is a DataView?
// ========================================
// DataView lets you read and write raw binary data to an ArrayBuffer
// with precise control over byte offset, endianness, and data type.

// Step 1: Create an ArrayBuffer of 8 bytes
const buffer = new ArrayBuffer(8); // A raw memory space (8 bytes)
console.log("✅ ArrayBuffer created with byteLength:", buffer.byteLength);

// Step 2: Create a DataView on top of the buffer
const view = new DataView(buffer);

// Step 3: Write different types of data into the buffer

// Write a 32-bit integer at byte offset 0 (big endian by default)
view.setInt32(0, 123456789); // occupies byte 0-3
console.log("✍️ Wrote Int32 value 123456789 at offset 0");

// Write a 16-bit unsigned integer at byte offset 4
view.setUint16(4, 65535); // max value for unsigned 16-bit
console.log("✍️ Wrote Uint16 value 65535 at offset 4");

// Write an 8-bit signed integer at byte offset 6
view.setInt8(6, -128); // min value for Int8
console.log("✍️ Wrote Int8 value -128 at offset 6");

// Step 4: Read values back from buffer

// Read 32-bit integer from offset 0
const int32 = view.getInt32(0);
console.log("📥 Read Int32 at offset 0:", int32); // 123456789

// Read Uint16 from offset 4
const uint16 = view.getUint16(4);
console.log("📥 Read Uint16 at offset 4:", uint16); // 65535

// Read Int8 from offset 6
const int8 = view.getInt8(6);
console.log("📥 Read Int8 at offset 6:", int8); // -128

// Step 5: Demonstrating Little Endian

// Write 16-bit unsigned integer using little endian at byte offset 4
view.setUint16(4, 256, true); // Stores 0x00 0x01 (reversed)
console.log("✍️ Wrote Uint16 256 at offset 4 with little endian");

// Read back as little endian
const littleEndianRead = view.getUint16(4, true);
console.log("📥 Read Uint16 at offset 4 with little endian:", littleEndianRead); // 256

// Step 6: Showing raw byte-by-byte values
const byteArray = new Uint8Array(buffer); // Convert to typed array to see bytes
console.log("📦 Raw byte content of buffer:", byteArray);

// Example output:
// [
//   7, 91, 205, 21, // 123456789 in big endian (0x075BCD15)
//   0, 1,           // 256 in little endian
//   128,            // -128 interpreted unsigned (128)
//   0               // last byte unused
// ]
/* 
Method	Description
setInt8(offset, val)	Write 8-bit signed integer
setUint8(offset, val)	Write 8-bit unsigned integer
setInt16(offset, val)	Write 16-bit signed integer
setUint16(offset, val)	Write 16-bit unsigned integer
setInt32(offset, val)	Write 32-bit signed integer
setUint32(offset, val)	Write 32-bit unsigned integer
setFloat32(offset, val)	Write 32-bit float
setFloat64(offset, val)	Write 64-bit float
get<Type>(offset, littleEndian?)	Read value from buffer
*/