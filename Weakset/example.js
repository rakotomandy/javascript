// ==========================================================
// ✅ Real-world Use Case: Track Active Elements
// ==========================================================

// Example: You want to track which DOM elements (or objects) are "active"
// without preventing them from being garbage collected.

const activeElements = new WeakSet();

function activate(element) {
  activeElements.add(element);
}

function deactivate(element) {
  activeElements.delete(element);
}

function isActive(element) {
  return activeElements.has(element);
}

// Simulate DOM elements using objects
let div1 = { id: "header" };
let div2 = { id: "footer" };

activate(div1);
console.log("🔵 div1 is active?", isActive(div1)); // true
console.log("🔵 div2 is active?", isActive(div2)); // false

// Remove all other references to div1
div1 = null; // Now the object is eligible for garbage collection
// WeakSet will no longer retain it in memory
