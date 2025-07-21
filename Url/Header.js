// ============================================
// 🧠 What is the Headers class?
// ============================================
// Headers are key-value pairs that carry metadata in HTTP requests/responses.
// You can use it to set custom headers (like Authorization, Content-Type, etc.)

// ✅ Create a new Headers object
const headers = new Headers();

// ============================================
// ➕ Add headers
// ============================================

headers.append("Content-Type", "application/json");  // Sets body content type
headers.append("Authorization", "Bearer abc123");    // Set token for secure API
headers.append("X-Custom-Header", "MyValue");        // Add custom header

// ============================================
// 🧾 Read headers
// ============================================

console.log("🔍 Content-Type:", headers.get("Content-Type")); 
// Output: application/json

console.log("🔍 Authorization:", headers.get("Authorization")); 
// Output: Bearer abc123

// ============================================
// ✅ Check if header exists
// ============================================

console.log("❓ Has X-Custom-Header:", headers.has("X-Custom-Header")); 
// Output: true

console.log("❓ Has Accept:", headers.has("Accept")); 
// Output: false

// ============================================
// ❌ Remove a header
// ============================================

headers.delete("X-Custom-Header");

// Confirm removal
console.log("❌ Removed header exists?", headers.has("X-Custom-Header")); 
// Output: false

// ============================================
// 🔁 Loop through all headers
// ============================================

for (const [key, value] of headers) {
  console.log(`🧾 ${key}: ${value}`);
}
// Output:
// 🧾 content-type: application/json
// 🧾 authorization: Bearer abc123

/* 
Method	               Description
append(name, value)	   Adds a new header
get(name)	           Retrieves a header value
set(name, value)	   Overwrites or sets a header
has(name)	           Checks if a header exists
delete(name)	       Removes a header
for...of loop	       Iterates over all headers
*/