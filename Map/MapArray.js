// ===============================
// 🎓 Lesson 6: Conversions
// ===============================

const entries = new Map([
    ["x", 10],
    ["y", 20]
  ]);
  
  // Map to array
  const arrFromMap = [...entries];
  console.log("🔁 Map to Array:", arrFromMap); // [["x", 10], ["y", 20]]
  
  // Array to map
  const mapFromArr = new Map(arrFromMap);
  
  // Map to object (manually)
  const obj = {};
  for (const [key, value] of entries) {
    obj[key] = value;
  }
  console.log("📦 Map to Object:", obj); // {x: 10, y: 20}
  