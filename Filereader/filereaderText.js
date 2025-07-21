/* 
The FileReader class in JavaScript is used to read file contents stored on the user's computer, typically obtained via a <input type="file"> element or drag-and-drop. It can read files as:

1-Text (readAsText)

2-Data URL (readAsDataURL)

3-Binary string (readAsBinaryString)

4-Array buffer (readAsArrayBuffer) 


*/
document.getElementById("textFileInput").addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the first file the user selected
  
    if (file) {
      const reader = new FileReader(); // Create a new FileReader instance
  
      // This function runs when the file is successfully read
      reader.onload = function () {
        // Display the file content inside the <pre> tag
        document.getElementById("textOutput").textContent = reader.result;
      };
  
      // This function runs if there is an error reading the file
      reader.onerror = function () {
        console.error("Error reading file", reader.error);
      };
  
      // Begin reading the file as text (UTF-8 by default)
      reader.readAsText(file);
    }
  });
  


  /* Explanation:
event.target.files[0]: Gets the first selected file.

reader.onload: Called when file has been read successfully.

reader.result: Contains the file content.

reader.readAsText(file): Reads the file as plain text (UTF-8 by default). */