// ===================================================
// ✅ JavaScript SELECTION – Full Lesson
// ===================================================

// ===================================================
// ✅ 1. What is Selection?
// ===================================================
/*
The `Selection` object represents the text selected by the user or selected using JavaScript.

It is accessed with:
→ window.getSelection()
This gives us access to what the user selected in the document.
*/


// ===================================================
// ✅ 2. Get the Current Selection
// ===================================================

document.addEventListener("mouseup", () => {
  let selection = window.getSelection();
  console.log("User selected:", selection.toString());
});

// 📝 Note: `.toString()` returns the selected text


// ===================================================
// ✅ 3. Check if Anything is Selected
// ===================================================

let sel = window.getSelection();
if (!sel.isCollapsed) {
  console.log("Something is selected:", sel.toString());
} else {
  console.log("Nothing is selected");
}


// ===================================================
// ✅ 4. Get Range from a Selection
// ===================================================
/*
A Selection can have one or more Range objects.
Use `.getRangeAt(0)` to get the first one.
*/

if (sel.rangeCount > 0) {
  let range = sel.getRangeAt(0);
  console.log("Range start container:", range.startContainer);
  console.log("Range end container:", range.endContainer);
}


// ===================================================
// ✅ 5. Programmatically Select Text in an Element
// ===================================================

function selectTextInElement(id) {
  let el = document.getElementById(id);

  let range = document.createRange();
  range.selectNodeContents(el); // select the entire inner content

  let sel = window.getSelection();
  sel.removeAllRanges(); // clear previous selection
  sel.addRange(range);   // apply our selection
}

// Example usage:
// selectTextInElement("myTextBlock");


// ===================================================
// ✅ 6. Select Part of a Text Node
// ===================================================
/*
Manually define start and end of selection using offsets.
*/

function selectPartOfText(id, start, end) {
  let node = document.getElementById(id).firstChild;

  let range = document.createRange();
  range.setStart(node, start); // start at character index
  range.setEnd(node, end);     // end at character index

  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// Example:
// selectPartOfText("myTextBlock", 5, 12);


// ===================================================
// ✅ 7. Clear Current Selection
// ===================================================

function clearSelection() {
  let sel = window.getSelection();
  sel.removeAllRanges(); // Unselect everything
}


// ===================================================
// ✅ 8. Replace Currently Selected Text with New Content
// ===================================================

function replaceSelectedText(newText) {
  let sel = window.getSelection();
  if (sel.rangeCount > 0) {
    let range = sel.getRangeAt(0);
    range.deleteContents(); // Remove old selection

    let textNode = document.createTextNode(newText);
    range.insertNode(textNode);

    // Re-select the new inserted text
    sel.removeAllRanges();
    let newRange = document.createRange();
    newRange.selectNode(textNode);
    sel.addRange(newRange);
  }
}

// Example:
// replaceSelectedText("🌟 updated");


// ===================================================
// ✅ 9. Real-Time Selection Tracking (Live Display)
// ===================================================

document.addEventListener("selectionchange", () => {
  let sel = window.getSelection();
  console.log("[LIVE] selected:", sel.toString());
});


// ===================================================
// ✅ 10. Summary of Selection Properties and Methods
// ===================================================

/*
🔹 window.getSelection()        → Gets current Selection object
🔹 selection.toString()         → Returns selected text
🔹 selection.isCollapsed        → true if no text is selected
🔹 selection.rangeCount         → How many ranges are in selection
🔹 selection.getRangeAt(index)  → Gets the Range object
🔹 selection.removeAllRanges()  → Clears selection
🔹 selection.addRange(range)    → Adds a new Range to the selection
*/


// ===================================================
// ✅ HTML to Use With This File
// ===================================================
/*
<div id="myTextBlock">This is a selectable text block.</div>
<button onclick="selectTextInElement('myTextBlock')">Select All</button>
<button onclick="clearSelection()">Clear</button>
<button onclick="replaceSelectedText('🧠 smart')">Replace</button>
*/

