// ===================================================
// ✅ 1. Selecting Text in Input or Textarea
// ===================================================
/*
Use `selectionStart` and `selectionEnd` to get the selected range.
Use `.setSelectionRange()` to select text programmatically.
*/

let textarea = document.querySelector("#myTextarea");

// Select characters from index 5 to 10
textarea.setSelectionRange(5, 10);

// Log selected text
let selectedText = textarea.value.substring(
  textarea.selectionStart,
  textarea.selectionEnd
);
console.log("Selected text:", selectedText);


// ===================================================
// ✅ 2. Selecting Text in ContentEditable / HTML
// ===================================================
/*
Use `window.getSelection()` to retrieve text from a div or any selectable text.
*/

let sel = window.getSelection();
console.log("Selected text:", sel.toString());


// ===================================================
// ✅ 3. Modifying Selection using Range Object
// ===================================================
/*
The Range object represents a portion of the DOM (not just plain text).
We can select, delete, or replace that content.
*/

let editableDiv = document.querySelector("#editable");

editableDiv.addEventListener("mouseup", function () {
  let sel = window.getSelection();

  if (sel.rangeCount > 0) {
    let range = sel.getRangeAt(0);

    // ✅ Clone the content of the range
    let contents = range.cloneContents();

    // ✅ Replace selected content with something new
    range.deleteContents(); // Clear original
    range.insertNode(document.createTextNode("✨MODIFIED✨"));
  }
});


// ===================================================
// ✅ 4. Programmatically Select and Highlight Text
// ===================================================
/*
Create a Range manually and apply it to select elements.
*/

function selectText(elementId) {
  let el = document.getElementById(elementId);
  let range = document.createRange();
  range.selectNodeContents(el);

  let sel = window.getSelection();
  sel.removeAllRanges();     // Clear previous selection
  sel.addRange(range);       // Select the new range
}

selectText("highlightMe");


// ===================================================
// ✅ 5. Replace Selected Text in Input/Textarea
// ===================================================
function replaceSelectedInInput(textarea, replacement) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  let before = textarea.value.substring(0, start);
  let after = textarea.value.substring(end);

  textarea.value = before + replacement + after;
  textarea.setSelectionRange(start, start + replacement.length);
}

// Usage:
replaceSelectedInInput(textarea, "🍓");


// ===================================================
// ✅ 6. Detect & Modify Selection in Real-Time
// ===================================================
/*
Capture selection as the user selects text.
*/
document.addEventListener("selectionchange", () => {
  let selection = window.getSelection();
  console.log("Now selected:", selection.toString());
});


// ===================================================
// ✅ 7. Apply Styling to Selected Text (ContentEditable)
// ===================================================
function boldSelectedText() {
  let sel = window.getSelection();
  if (sel.rangeCount > 0) {
    let range = sel.getRangeAt(0);

    let span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.textContent = range.toString();

    range.deleteContents();
    range.insertNode(span);
  }
}

// Call boldSelectedText() when needed


// ===================================================
// ✅ 8. Wrap Selected Word in a <mark> tag
// ===================================================
function highlightSelectedText() {
  let sel = window.getSelection();
  if (sel.rangeCount > 0) {
    let range = sel.getRangeAt(0);
    let mark = document.createElement("mark");

    mark.textContent = range.toString();
    range.deleteContents();
    range.insertNode(mark);
  }
}


// ===================================================
// ✅ 9. Clear Current Selection
// ===================================================
window.getSelection().removeAllRanges();


// ===================================================
// ✅ 10. Summary of Key APIs
// ===================================================

/*
📌 window.getSelection()
→ Gets the currently selected content from the document

📌 selection.toString()
→ Gets the plain string content selected

📌 selection.getRangeAt(index)
→ Returns a Range object that defines the selected content

📌 Range methods:
- deleteContents() → removes content
- insertNode(node) → inserts content
- cloneContents() → duplicates content
- selectNode(node) → select a whole element
- setStart(), setEnd() → modify start/end of range

📌 textarea.selectionStart / selectionEnd
→ Start and end indexes of selected text in input/textarea

📌 textarea.setSelectionRange(start, end)
→ Set selection programmatically
*/

