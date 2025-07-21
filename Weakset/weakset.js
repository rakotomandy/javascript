// ==========================================================
// ✅ What is a WeakSet?
// ==========================================================

// A WeakSet is a special kind of Set that ONLY stores objects (not primitives).
// The objects are held "weakly" — if there are no other references to an object,
// it can be garbage-collected even if it is in the WeakSet.

// ✅ Main features:
// - Stores only OBJECTS (not strings, numbers, etc.)
// - No duplicates allowed
// - Not iterable (you cannot loop through it)
// - No size property
// - Supports add(), has(), and delete()

const weakSet = new WeakSet();

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

weakSet.add(user1); // Add object
weakSet.add(user2); // Add another object

console.log("✅ Contains user1?", weakSet.has(user1)); // true

// Remove an object
weakSet.delete(user1);
console.log("🗑️ Contains user1 after deletion?", weakSet.has(user1)); // false


// ==========================================================
// ❌ WeakSet only accepts objects – NOT primitives
// ==========================================================

const invalidSet = new WeakSet();

try {
  invalidSet.add("hello"); // ❌ Error: Invalid value used in weak set
} catch (error) {
  console.log("⚠️ Error when adding primitive:", error.message);
}
