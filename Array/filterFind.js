// =============================================
// ✅ filter() vs find() — All matches vs First match
// =============================================
const users = [
    { id: 1, name: "Alice", active: false },
    { id: 2, name: "Bob", active: true },
    { id: 3, name: "Charlie", active: true }
  ];
const activeUsers = users.filter(user => user.active === true);
console.log("🧾 All active users:", activeUsers);
// Output: Array of Bob and Charlie

const firstActive = users.find(user => user.active === true);
console.log("🎯 First active user:", firstActive);
// Output: Bob (only the first match)
