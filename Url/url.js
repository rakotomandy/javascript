// ===========================================
// 🧠 What is the URL class?
// ===========================================
// The URL class represents and parses a URL string into its components.
// It lets you access and manipulate parts of the URL easily.

// Create a new URL object
const url = new URL("https://example.com:8080/path/page.html?name=janet&age=42#contact");

// ===========================================
// 🧩 Basic Components of the URL
// ===========================================
console.log("🌐 href:", url.href);             // Full URL
console.log("🧷 protocol:", url.protocol);     // 'https:'
console.log("🧳 host:", url.host);             // 'example.com:8080'
console.log("🏠 hostname:", url.hostname);     // 'example.com'
console.log("🔢 port:", url.port);             // '8080'
console.log("🛣️ pathname:", url.pathname);     // '/path/page.html'
console.log("❓ search:", url.search);         // '?name=janet&age=42'
console.log("📦 hash:", url.hash);             // '#contact'

// ===========================================
// 🔁 Editing URL Parts (it updates the URL!)
// ===========================================

url.protocol = "http:";
url.pathname = "/new/path";
url.search = "?name=paul";
url.hash = "#top";

console.log("✏️ Updated URL:", url.href);
// Output: "http://example.com:8080/new/path?name=paul#top"

// ===========================================
// 🧱 Add or Update a Search Param
// ===========================================

url.searchParams.set("age", 99); // Add or update 'age' to 99
url.searchParams.append("country", "france"); // Add another param

console.log("🔗 Modified search params:", url.searchParams.toString());
// Output: "name=paul&age=99&country=france"

console.log("📌 Final URL:", url.href);
// Final full URL with updated params

/* 
Property	    Description
href	        Full URL string
protocol	    URL scheme like http: or https:
host	        Hostname + port
hostname	    Just the domain
port	        Port number
pathname	    Path part after the domain
search	        Query string (starts with ?)
hash	        Fragment identifier (after #)
searchParams	URLSearchParams object (see next lesson)
*/