// =========================================
// 🧠 What is URLSearchParams?
// =========================================
// It's a built-in class to work with query strings (key=value pairs)
// Found in URLs after the `?`, like: ?name=janet&age=42

// Create a new URLSearchParams object from a query string
const params = new URLSearchParams("name=janet&age=42");

// =========================================
// 📦 Access individual values
// =========================================
console.log("🔍 name:", params.get("name")); // Output: janet
console.log("🔍 age:", params.get("age"));   // Output: 42

// =========================================
// ✏️ Modify or Add values
// =========================================
params.set("age", 60);                // Update existing value
params.append("hobby", "reading");    // Add a new value (can repeat keys!)
params.append("hobby", "coding");     // Add another hobby

console.log("🔁 Updated query string:", params.toString());
// Output: name=janet&age=60&hobby=reading&hobby=coding

// =========================================
// 🧹 Delete a parameter
// =========================================
params.delete("name");

console.log("🗑️ After deletion:", params.toString());
// Output: age=60&hobby=reading&hobby=coding

// =========================================
// 🔁 Loop through all keys and values
// =========================================

for (const [key, value] of params) {
  console.log(`🔑 ${key} = ${value}`);
}
// Output:
// 🔑 age = 60
// 🔑 hobby = reading
// 🔑 hobby = coding

// =========================================
// ✅ Check if a key exists
// =========================================
console.log("❓ Has 'age':", params.has("age"));     // true
console.log("❓ Has 'name':", params.has("name"));   // false

// =========================================
// 🔀 Convert object to query string
// =========================================

const user = {
  username: "paul",
  role: "admin",
  active: true
};

// Convert object to URLSearchParams
const userParams = new URLSearchParams(user);
console.log("🧬 Object to query string:", userParams.toString());
// Output: username=paul&role=admin&active=true


/* 
Method / Property	    Description
.get(name)	            Get value for a key
.set(name, value)	    Set (replace) value
.append(name, value)	Add a value (allows duplicates)
.delete(name)	        Remove key-value pair
.has(name)	            Check if key exists
.toString()	            Convert back to query string
for...of loop	        Iterate over all entries
*/