// =============================================
// ✅ find() — Get the FIRST element that matches
// =============================================

const users = [
    { id: 1, name: "Alice", active: false },
    { id: 2, name: "Bob", active: true },
    { id: 3, name: "Charlie", active: true }
  ];
  
  // find() returns the FIRST element that satisfies the condition
  const activeUser = users.find(user => user.active === true);
  
  console.log("🔍 First active user:", activeUser);
  // Output: { id: 2, name: "Bob", active: true }

  
  // =============================================
// ✅ findIndex() — Get the index of the first match
// =============================================

const index = users.findIndex(user => user.active === true);

console.log("📍 Index of first active user:", index);
// Output: 1 (Bob is at index 1)
