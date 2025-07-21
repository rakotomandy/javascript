// ================================
// FULL DOM LESSON WITH EXAMPLES
// ================================

// 1. Selecting DOM elements

// Select an element by ID
const title = document.getElementById("main-title"); // Finds element like <h1 id="main-title">
console.log(title);

// Select elements by class name (returns HTMLCollection)
const items = document.getElementsByClassName("item");
console.log(items);

// Select elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Modern selectors: querySelector & querySelectorAll

// Select first match
const firstItem = document.querySelector(".item"); // Only one element
console.log(firstItem);

// Select all matches (returns NodeList)
const allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log(item)); // Loop over NodeList

// ==========================
// 2. Traversing the DOM Tree
// ==========================

const parent = document.querySelector(".container");

// Accessing parent, children, siblings
console.log(parent.parentElement);      // Goes one level up
console.log(parent.children);           // HTMLCollection of all child elements
console.log(parent.firstElementChild);  // First element child
console.log(parent.lastElementChild);   // Last element child
console.log(parent.nextElementSibling); // Next sibling
console.log(parent.previousElementSibling); // Previous sibling

// ==========================
// 3. Modifying content
// ==========================

const headline = document.querySelector("h1");

// Change text content
headline.textContent = "New Title";

// Change HTML content
headline.innerHTML = "<span style='color:red'>Red Title</span>";

// Read HTML content
console.log(headline.innerHTML);

// ==========================
// 4. Attributes & Properties
// ==========================

const link = document.querySelector("a");

// Get attribute value
console.log(link.getAttribute("href")); // e.g. 'https://example.com'

// Set attribute
link.setAttribute("target", "_blank");

// Remove attribute
link.removeAttribute("href");

// Set property directly
link.href = "https://openai.com";

// ==========================
// 5. Styling elements
// ==========================

const box = document.querySelector(".box");

// Inline styling via JS
box.style.backgroundColor = "skyblue";
box.style.width = "200px";
box.style.height = "100px";

// ================
// 6. ClassList API
// ================

const card = document.querySelector(".card");

// Add class
card.classList.add("highlighted");

// Remove class
card.classList.remove("old-style");

// Toggle class
card.classList.toggle("active");

// Check if element has a class
console.log(card.classList.contains("active")); // true or false

// ===============================
// 7. Creating and manipulating DOM elements
// ===============================

// Create element
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";

// Append it to the body or another node
document.body.appendChild(newDiv);

// Insert before another element
const reference = document.querySelector("#reference");
document.body.insertBefore(newDiv, reference);

// Remove element
newDiv.remove();

// Replace element
const oldElem = document.querySelector(".old");
const replacement = document.createElement("p");
replacement.textContent = "Replacement paragraph";
oldElem.replaceWith(replacement);

// ====================
// 8. DOM Events
// ====================

// Add event listener
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Button clicked!");
});

// Event with parameters
button.addEventListener("mouseover", (e) => {
  console.log("Mouse entered:", e.target);
});

// Removing listener
function greet() {
  alert("Hello!");
}
button.addEventListener("dblclick", greet);
button.removeEventListener("dblclick", greet); // Removes listener

// ====================
// 9. Event delegation
// ====================

// Efficient way to handle many children using the parent
document.querySelector(".list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
    e.target.classList.toggle("clicked");
  }
});

// ====================
// 10. Forms and Input Handling
// ====================

const form = document.querySelector("form");
const input = document.querySelector("input[name='username']");

// Listen to form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default reload
  const value = input.value;
  console.log("Username:", value);
  input.value = ""; // Clear input
});

// Listen to input typing
input.addEventListener("input", function () {
  console.log("Typing:", input.value);
});

// ====================
// 11. Outputting to DOM
// ====================

const result = document.querySelector("#result");
result.textContent = "This is the result!";

// Or using innerHTML for complex content
result.innerHTML = `<strong>Bold Result</strong><br><em>Italic Result</em>`;

// ====================
// 12. Other useful DOM APIs
// ====================

// Scroll to top
window.scrollTo(0, 0);

// Get document dimensions
console.log(document.body.scrollHeight);

// Focus and blur input
input.focus(); // Put cursor inside input
input.blur();  // Remove focus

// ====================
// 13. Useful Node Properties
// ====================

const node = document.querySelector("h2");
console.log(node.nodeName); // Tag name
console.log(node.nodeType); // 1 = element
console.log(node.nodeValue); // null unless it is a text node

// ====================
// 14. Using dataset attributes (custom data-*)
// ====================

const box2 = document.querySelector(".info-box");

console.log(box2.dataset);           // All data-* attributes
console.log(box2.dataset.userId);    // Access data-user-id
console.log(box2.dataset.role);      // Access data-role
