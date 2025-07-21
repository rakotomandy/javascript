// =============================================
// ✅ some() — Returns true if ANY element matches
// =============================================
const users = [
    { id: 1, name: "Alice", active: false },
    { id: 2, name: "Bob", active: true },
    { id: 3, name: "Charlie", active: true }
  ];
  
const hasInactive = users.some(user => user.active === false);

console.log("❓ Are there any inactive users?", hasInactive);
// Output: true (Alice is inactive)


// =============================================
// ✅ every() — Returns true only if ALL match
// =============================================

const allActive = users.every(user => user.active === true);

console.log("✅ Are all users active?", allActive);
// Output: false (because Alice is not active)
