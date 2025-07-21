// ===============================
// 🎓 Lesson 4: has(), delete(), clear()
// ===============================

const roles = new Map([
    ["admin", "Full Access"],
    ["editor", "Edit Content"],
    ["viewer", "Read Only"]
  ]);
  
  // Check if a key exists
  console.log("🕵️ Has editor?", roles.has("editor")); // true
  
  // Delete a key
  roles.delete("viewer");
  
  // Clear all entries
  roles.clear();
  
  console.log("🧼 After clear:", roles); // Map(0) {}
  