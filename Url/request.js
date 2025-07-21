// ===============================================
// 🧠 What is the Request class?
// ===============================================
// The Request object defines a resource request, such as:
// - The URL
// - The HTTP method (GET, POST, etc.)
// - Headers
// - Body content
// It is useful when you want more control over how you fetch data.

// ===============================================
// 🧾 Create a basic GET request
// ===============================================

const req1 = new Request("https://jsonplaceholder.typicode.com/posts/1");

console.log("🔗 URL:", req1.url);           // https://jsonplaceholder.typicode.com/posts/1
console.log("📮 Method:", req1.method);     // GET (default)
console.log("🗂️ Credentials:", req1.credentials); // same-origin (default)

// ===============================================
// 🧾 Create a POST request with custom headers
// ===============================================

const req2 = new Request("https://api.example.com/data", {
  method: "POST",                         // Set HTTP method
  headers: {
    "Content-Type": "application/json",   // Tell server data format
    "Authorization": "Bearer abc123"
  },
  body: JSON.stringify({ name: "Janet", age: 70 }) // Convert JS object to JSON
});

// ===============================================
// 🔍 Read request properties
// ===============================================
console.log("🔗 URL:", req2.url);               // https://api.example.com/data
console.log("📮 Method:", req2.method);         // POST
console.log("🗃️ Body Used:", req2.bodyUsed);     // false (has not been read yet)

// ===============================================
// 🧾 Headers can be accessed too
// ===============================================
req2.headers.forEach((value, key) => {
  console.log(`📌 Header - ${key}: ${value}`);
});
// Output:
// 📌 Header - content-type: application/json
// 📌 Header - authorization: Bearer abc123

/* 
Property	     Description
url	             Request target URL
method	         HTTP method (GET, POST, etc.)
headers	         Headers object
bodyUsed	     Boolean: has the body been read?
credentials	     'same-origin', 'include', or 'omit'
*/