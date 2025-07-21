// ===================================================
// ✅ JavaScript DOM Range – Full Lesson
// ===================================================

// What is Range?
// ---------------------------------------------------
/*
A `Range` is a built-in JavaScript object that represents a fragment of a webpage/document.
It allows you to select, modify, extract, or insert parts of the DOM (not just plain text).

Think of it like a pair of invisible markers (start and end) in the DOM tree.
You can do complex operations between those two points.
*/


// ===================================================
// ✅ 1. Create a Range
// ===================================================
let range = document.createRange(); // Creates an empty range


// ===================================================
// ✅ 2. Select a Full Element Node
// ===================================================
/*
Use `selectNode()` to select the whole HTML element (including tags).
Example: Selecting a <p> element
*/
let para = document.getElementById("myParagraph");
range.selectNode(para);


// ===================================================
// ✅ 3. Select Only the Content Inside an Element
// ===================================================
/*
Use `selectNodeContents()` to select only the inner content (not the tags).
*/
let div = document.getElementById("myDiv");
range.selectNodeContents(div);


// ===================================================
// ✅ 4. Inserting Text or Element into a Range
// ===================================================
/*
Use `insertNode()` to add a node at the start of the range.
This replaces nothing, it just inserts.
*/
let newNode = document.createTextNode("👉 Inserted Text");
range.insertNode(newNode);


// ===================================================
// ✅ 5. Deleting the Content of a Range
// ===================================================
/*
Use `deleteContents()` to remove everything between start and end of the range.
*/
range.deleteContents(); // Deletes the selected portion


// ===================================================
// ✅ 6. Replace Selected Text in ContentEditable
// ===================================================
/*
This example allows the user to select text and replaces it with bolded text.
*/

function replaceSelectedWithBold() {
  let selection = window.getSelection();
  if (selection.rangeCount > 0) {
    let range = selection.getRangeAt(0); // Get the selection's range

    let bold = document.createElement("strong");
    bold.textContent = range.toString(); // Use the selected text

    range.deleteContents();     // Remove the selected content
    range.insertNode(bold);     // Insert the bolded version
  }
}


// ===================================================
// ✅ 7. Programmatically Select a DOM Element
// ===================================================
/*
You can create a range, then tell the browser to highlight it as if selected.
*/

function programmaticallySelect(elementId) {
  let node = document.getElementById(elementId);
  let range = document.createRange();
  range.selectNodeContents(node);

  let selection = window.getSelection();
  selection.removeAllRanges(); // Clear existing selection
  selection.addRange(range);   // Apply our new range
}


// ===================================================
// ✅ 8. Range Boundaries – Manual Start and End
// ===================================================
/*
You can manually set the start and end of a range using:
  - setStart(node, offset)
  - setEnd(node, offset)

Offsets are character positions inside the node.
*/

let textNode = document.getElementById("manualText").firstChild;
let range2 = document.createRange();

range2.setStart(textNode, 5); // Start at 5th character
range2.setEnd(textNode, 10);  // End at 10th character

// Highlight it
let sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range2);


// ===================================================
// ✅ 9. Clone, Extract, and Wrap a Range
// ===================================================

// Clone contents (copy without removing)
let copy = range.cloneContents();

// Extract contents (cut)
let cut = range.extractContents();

// Wrap range inside <mark>
function markSelection() {
  let selection = window.getSelection();
  if (!selection.isCollapsed) {
    let range = selection.getRangeAt(0);

    let mark = document.createElement("mark");
    mark.appendChild(range.extractContents()); // take out selected part
    range.insertNode(mark);                    // insert wrapped version
  }
}


// ===================================================
// ✅ 10. Summary of Useful Range Methods
// ===================================================
/*
🔹 createRange()              → Creates a new range
🔹 selectNode(node)           → Selects entire node
🔹 selectNodeContents(node)   → Selects node’s inner content
🔹 setStart(node, offset)     → Sets range start point
🔹 setEnd(node, offset)       → Sets range end point
🔹 deleteContents()           → Deletes selected part
🔹 insertNode(node)           → Inserts a node at start
🔹 cloneContents()            → Returns a copy of selected part
🔹 extractContents()          → Removes and returns selected part
🔹 surroundContents(wrapper)  → Wraps selected part in a node
*/


// ===================================================
// ✅ HTML to Use with This File
// ===================================================
/*
<div id="myParagraph">Paragraph for node selection</div>
<div id="myDiv">Only this <strong>text</strong> gets selected</div>
<div id="manualText">This is some manual range text selection.</div>
<div contenteditable="true">Select this and try bold or mark</div>
*/

