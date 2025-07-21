// ================================================
// ✅ LESSON 2: Create an Empty Map & Add Entries
// ================================================

const scores = new Map(); // Creates an empty map

// Use set() to add key-value pairs
scores.set("Alice", 95);       // Key = "Alice", Value = 95
scores.set("Bob", 88);         // Key = "Bob", Value = 88
scores.set("Charlie", 72);     // Key = "Charlie", Value = 72

console.log("🎯 Student Scores:", scores);
// Output: Map(3) { "Alice" => 95, "Bob" => 88, "Charlie" => 72 }


// ================================================
// ✅ LESSON 3: Get a Value Using get()
// ================================================

// Use get(key) to retrieve a value
console.log("📊 Bob's Score:", scores.get("Bob")); // 88
console.log("📊 Alice's Score:", scores.get("Alice")); // 95

// If the key does not exist, returns undefined
console.log("❓Unknown Score:", scores.get("Zoe")); // undefined
