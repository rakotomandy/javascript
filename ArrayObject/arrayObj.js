// ===============================================
// ARRAY FUNCTIONS USING ARRAY OF OBJECTS IN JS
// ===============================================

// Define an array of student objects
const students = [
  { id: 1, name: "Alice", grade: 15 },
  { id: 2, name: "Bob", grade: 10 },
  { id: 3, name: "Charlie", grade: 18 },
  { id: 4, name: "Diana", grade: 8 },
  { id: 5, name: "Eva", grade: 14 },
];

// ===================================================
// 1. forEach() → Iterate over each element
// ===================================================

students.forEach(function (student, index) {
  // Print each student's name and grade with their index
  console.log(`Index ${index}: ${student.name} has grade ${student.grade}`);
});

/*
Output:
Index 0: Alice has grade 15
Index 1: Bob has grade 10
Index 2: Charlie has grade 18
Index 3: Diana has grade 8
Index 4: Eva has grade 14
*/

// Definition:
// forEach() executes a provided function once for each array element.

// ===================================================
// 2. map() → Create a new array from existing one
// ===================================================

// We want only the student names in a new array
const names = students.map(function (student) {
  return student.name;
});

console.log("Names only:", names); // Output: ["Alice", "Bob", "Charlie", "Diana", "Eva"]

// Definition:
// map() creates a new array by applying a function to each element.

// ===================================================
// 3. filter() → Get all students who passed (grade >= 10)
// ===================================================

const passed = students.filter(function (student) {
  return student.grade >= 10;
});

console.log("Passed students:", passed);
/*
Output:
[
  { id: 1, name: "Alice", grade: 15 },
  { id: 2, name: "Bob", grade: 10 },
  { id: 3, name: "Charlie", grade: 18 },
  { id: 5, name: "Eva", grade: 14 }
]
*/

// Definition:
// filter() returns a new array with all elements that pass a test.

// ===================================================
// 4. find() → Search for a student by name
// ===================================================

const foundStudent = students.find(function (student) {
  return student.name === "Charlie";
});

console.log("Found student:", foundStudent); // Output: { id: 3, name: "Charlie", grade: 18 }

// Definition:
// find() returns the first element that satisfies a test.

// ===================================================
// 5. some() → Check if any student failed (grade < 10)
// ===================================================

const hasFailingStudent = students.some(function (student) {
  return student.grade < 10;
});

console.log("Any failing student?", hasFailingStudent); // Output: true

// Definition:
// some() returns true if at least one element satisfies the test.

// ===================================================
// 6. every() → Check if all students passed (grade >= 10)
// ===================================================

const allPassed = students.every(function (student) {
  return student.grade >= 10;
});

console.log("All passed?", allPassed); // Output: false

// Definition:
// every() returns true only if all elements pass the test.

// ===================================================
// 7. reduce() → Calculate the average grade
// ===================================================

const totalGrade = students.reduce(function (sum, student) {
  return sum + student.grade;
}, 0); // initial sum is 0

const averageGrade = totalGrade / students.length;

console.log("Average grade:", averageGrade); // Output: 13

// Definition:
// reduce() executes a reducer function on each element to reduce it to a single value.

// ===================================================
// 8. sort() → Sort students by grade ascending
// ===================================================

const sortedByGrade = [...students].sort(function (a, b) {
  return a.grade - b.grade; // ascending order
});

console.log("Sorted by grade (asc):", sortedByGrade);
/*
Output:
[
  { id: 4, name: "Diana", grade: 8 },
  { id: 2, name: "Bob", grade: 10 },
  { id: 5, name: "Eva", grade: 14 },
  { id: 1, name: "Alice", grade: 15 },
  { id: 3, name: "Charlie", grade: 18 }
]
*/

// Definition:
// sort() sorts the array in place based on comparator function.

// ===================================================
// 9. includes() → Search in primitive array
// ===================================================

const grades = students.map((s) => s.grade); // [15, 10, 18, 8, 14]

const hasGrade18 = grades.includes(18); // true

console.log("Includes grade 18?", hasGrade18); // Output: true

// Definition:
// includes() checks if an array contains a certain value (works on primitives)

// ===================================================
// 10. findIndex() → Find index of student with grade 10
// ===================================================

const indexBob = students.findIndex(function (student) {
  return student.grade === 10;
});

console.log("Index of Bob (grade 10):", indexBob); // Output: 1

// Definition:
// findIndex() returns the index of the first element that passes the test.
