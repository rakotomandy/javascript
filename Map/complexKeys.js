// ================================================
// ✅ LESSON 5: Keys Can Be Objects, Arrays, Functions
// ================================================

const map = new Map();

// Use object as key
const user1 = { id: 1 };
const user2 = { id: 2 };

map.set(user1, "Admin");
map.set(user2, "Editor");

console.log("👤 Role of user1:", map.get(user1)); // "Admin"
console.log("👤 Role of user2:", map.get(user2)); // "Editor"

// Each object is a separate reference, even if they look identical
