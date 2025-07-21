// ===================================================
// ✅ JavaScript Storage – localStorage & sessionStorage
// ===================================================


// ===================================================
// ✅ 1. What is Web Storage?
// ===================================================
/*
🔸 Two main types:
   - localStorage: Data persists even after browser is closed
   - sessionStorage: Data cleared when tab/window is closed
🔸 Both use key-value pairs stored as strings
*/


// ===================================================
// ✅ 2. Save Data to localStorage
// ===================================================

// Save a simple string value
localStorage.setItem("username", "Alice");

// Save a JavaScript object (must convert to JSON string)
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

localStorage.setItem("userInfo", JSON.stringify(user)); // Convert object to JSON string


// ===================================================
// ✅ 3. Get Data from localStorage
// ===================================================

const storedName = localStorage.getItem("username"); // Get string value
console.log("Name from localStorage:", storedName);

const storedUser = JSON.parse(localStorage.getItem("userInfo")); // Parse JSON back to object
console.log("User object:", storedUser);


// ===================================================
// ✅ 4. Remove Data from localStorage
// ===================================================

localStorage.removeItem("username"); // Delete specific item


// ===================================================
// ✅ 5. Clear All localStorage
// ===================================================

localStorage.clear(); // Remove everything


// ===================================================
// ✅ 6. Use sessionStorage (same methods)
// ===================================================

sessionStorage.setItem("token", "ABC123"); // Save
console.log("Session token:", sessionStorage.getItem("token")); // Retrieve
sessionStorage.removeItem("token"); // Delete one
sessionStorage.clear(); // Clear all


// ===================================================
// ✅ 7. Practical Example – Save form input
// ===================================================

function saveFormData() {
  const email = document.getElementById("emailInput").value;
  localStorage.setItem("savedEmail", email);
  alert("Email saved!");
}

function loadFormData() {
  const saved = localStorage.getItem("savedEmail");
  if (saved) {
    document.getElementById("emailInput").value = saved;
  }
}

// Example HTML:
/*
<input type="email" id="emailInput" placeholder="Enter email">
<button onclick="saveFormData()">Save</button>
<body onload="loadFormData()">
*/


// ===================================================
// ✅ 8. Summary – Storage Methods
// ===================================================
/*
localStorage.setItem(key, value)     → Save
localStorage.getItem(key)           → Get
localStorage.removeItem(key)        → Remove one
localStorage.clear()                → Clear all

sessionStorage → same API, shorter life (tab)

Use JSON.stringify() to store objects
Use JSON.parse() to retrieve them
*/
