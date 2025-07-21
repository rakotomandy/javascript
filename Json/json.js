// ===================================================
// ✅ JavaScript JSON – Full Lesson with Comments
// ===================================================


// ===================================================
// ✅ 1. What is JSON?
// ===================================================
/*
🔹 JSON = JavaScript Object Notation
🔹 It is a lightweight format to store and exchange data
🔹 Syntax is similar to JavaScript object, but:
   - All keys must be in double quotes
   - Strings must use double quotes
   - No functions allowed
*/


// ===================================================
// ✅ 2. JSON Example (as string)
// ===================================================

const jsonString = '{"name": "Alice", "age": 25, "isStudent": false}'; // JSON as a string
console.log("Raw JSON string:", jsonString);


// ===================================================
// ✅ 3. Convert JSON string ➡️ JS Object
// ===================================================

const jsObject = JSON.parse(jsonString); // Parse JSON string into a JavaScript object
console.log("Converted to JS object:", jsObject);
console.log("Access property:", jsObject.name); // Access property like a normal object


// ===================================================
// ✅ 4. Convert JS Object ➡️ JSON string
// ===================================================

const newObject = {
  title: "JavaScript",
  difficulty: "Intermediate",
  chapters: 10
};

const convertedJSON = JSON.stringify(newObject); // Convert JS object to JSON string
console.log("Converted to JSON string:", convertedJSON);


// ===================================================
// ✅ 5. Pretty Format JSON (indentation)
// ===================================================

const prettyJSON = JSON.stringify(newObject, null, 2); // Indent with 2 spaces
console.log("Pretty JSON:", prettyJSON);


// ===================================================
// ✅ 6. JSON in Arrays
// ===================================================

const jsonArray = '[{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]'; // JSON array of objects
const parsedArray = JSON.parse(jsonArray); // Convert to JS array

console.log("Loop through array:");
parsedArray.forEach(item => {
  console.log("ID:", item.id, "Name:", item.name);
});


// ===================================================
// ✅ 7. Common Mistakes in JSON
// ===================================================
/*
❌ Keys must use double quotes
❌ Cannot contain comments
❌ Cannot include functions
❌ Trailing commas not allowed

✅ Good:
{"name": "Bob"}

❌ Bad:
{name: "Bob"}     ← missing quotes
{"name": "Bob",}  ← trailing comma
*/


// ===================================================
// ✅ 8. Practical Example – Save Form Data as JSON
// ===================================================

const user = {
  username: "coder123",
  email: "coder@example.com",
  subscribed: true
};

const jsonSaved = JSON.stringify(user); // Ready to send to API or save in file/storage
console.log("📦 JSON for saving:", jsonSaved);


// ===================================================
// ✅ 9. Summary – JSON Methods
// ===================================================
/*
🔹 JSON.parse(str)       → Convert JSON string to JS object
🔹 JSON.stringify(obj)   → Convert JS object to JSON string
🔹 2nd/3rd stringify args → Used to pretty-print (null, spaces)
*/
