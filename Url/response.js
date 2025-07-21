// ===============================================
// 🧠 What is the Response class?
// ===============================================
// The Response object contains:
// - Status code (e.g. 200, 404)
// - Headers
// - Body (e.g. JSON, text, blob, etc.)
// You typically use it after a fetch request.

// ===============================================
// 📡 Make a fetch request and handle the response
// ===============================================

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    // 📦 Check status and headers
    console.log("📬 Status:", response.status);         // 200
    console.log("📦 OK?", response.ok);                 // true (status in range 200–299)
    console.log("📄 Status Text:", response.statusText); // "OK"

    // 🔎 Access headers
    for (let [key, value] of response.headers) {
      console.log(`🧾 Header: ${key} = ${value}`);
    }

    // 🧠 Use one of the body-reading methods
    return response.json(); // or response.text(), response.blob(), etc.
  })
  .then(data => {
    console.log("📥 Parsed JSON:", data);
    // Output: JS object of post with id=1
  })
  .catch(error => {
    console.error("❌ Network error:", error);
  });


  /* 
  Property / Method	           Description
status	                       HTTP status code (e.g. 200, 404)
ok	                           Boolean true if status is 200–299
statusText	                   Text description (e.g. "OK", "Not Found")
headers	                       Headers object (use like response.headers.get())
.json()	                       Parse body as JSON
.text()	                       Parse body as plain text
.blob()	                       Parse body as Blob
.formData()	                   Parse body as FormData
.arrayBuffer()	               Parse body as binary ArrayBuffer
  */