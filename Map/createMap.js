// ================================================
// ✅ LESSON 1: What is a Map?
// ================================================

// A Map is a collection of key-value pairs.
// Keys can be any type: string, number, object, function, etc.
// It preserves the insertion order of items and avoids key collisions (unlike objects).

// Syntax: new Map([ [key1, value1], [key2, value2], ... ])
const countries = new Map([
    ["FR", "France"],
    ["DE", "Germany"],
    ["IT", "Italy"]
  ]);
  
  console.log("🌍 Initial Countries Map:", countries);
  // Output: Map(3) { "FR" => "France", "DE" => "Germany", "IT" => "Italy" }
  