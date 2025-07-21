// ==========================================================
// ✅ What is a WeakMap?
// ==========================================================

// A WeakMap is a special kind of Map where:
// - Keys must be OBJECTS (not strings, numbers, etc.)
// - Values can be anything (primitive or object)
// - Keys are weakly held: if no other reference to the key exists, it can be garbage-collected
// - Not iterable (you cannot loop over it)
// - No size property

const weakMap = new WeakMap();

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// ✅ Set data in WeakMap using an object as the key
weakMap.set(user1, "Admin");
weakMap.set(user2, "Guest");

// ✅ Retrieve value using the object as key
console.log("🔐 user1 role:", weakMap.get(user1)); // "Admin"

// ✅ Check if an object is a key
console.log("❓ Has user2?", weakMap.has(user2)); // true

// ✅ Delete entry
weakMap.delete(user2);
console.log("🗑️ Has user2 after delete?", weakMap.has(user2)); // false
