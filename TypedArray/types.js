// ========================================================
// ✅ Available TypedArray Types (Examples Only)
// ========================================================

// Int8Array     – 8-bit signed integer
// Uint8Array    – 8-bit unsigned integer
// Uint8ClampedArray – like Uint8 but clamps values between 0-255
// Int16Array    – 16-bit signed integer
// Uint16Array   – 16-bit unsigned integer
// Int32Array    – 32-bit signed integer
// Uint32Array   – 32-bit unsigned integer
// Float32Array  – 32-bit float
// Float64Array  – 64-bit float

const float32 = new Float32Array(4); // 4 elements, 16 bytes (4 bytes per float)
float32[0] = Math.PI;

console.log("📐 float32[0]:", float32[0]); // ≈ 3.1415927
