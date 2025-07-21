document
  .getElementById("binaryInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get selected file

    if (file) {
      const reader = new FileReader(); // Create new FileReader

      // Called when reading is complete
      reader.onload = function () {
        const arrayBuffer = reader.result; // The file content as raw binary data

        // Convert ArrayBuffer to a typed byte array (Uint8Array)
        const byteArray = new Uint8Array(arrayBuffer);

        // Convert each byte to hex and join them into a string
        const hexOutput = Array.from(byteArray)
          .map((b) => b.toString(16).padStart(2, "0")) // Convert to 2-digit hex
          .join(" ");

        // Display the hex values
        document.getElementById("image").src = hexOutput;
      };

      // Read the file as an ArrayBuffer (binary format)
      reader.readAsArrayBuffer(file);
    }
  });
/* 
🧠 What is a Buffer?
A buffer is a temporary memory space used to store data while it is being moved or processed. In JavaScript (especially in browser environments), buffers are often used when dealing with binary data like images, PDFs, or files uploaded by users.

The ArrayBuffer is the most basic way to represent raw binary data in memory in JavaScript. Think of it like a plain container of bytes.

🔧 How Does It Process the Data?
Let’s look at your code step-by-step to see how it works and how the buffer is used:

✅ Real Example Breakdown

document.getElementById("binaryInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
👆 When the user selects a file, you grab the first file from the <input type="file">.


const reader = new FileReader();
👆 You create a FileReader, which is a browser tool that reads file contents.


reader.onload = function () {
  const arrayBuffer = reader.result;
👆 Once the file is read, the result contains the data in an ArrayBuffer, which is a binary buffer holding raw bytes.


const byteArray = new Uint8Array(arrayBuffer);
👆 You convert the ArrayBuffer into a Uint8Array. This is a typed array that lets you read each byte (0–255) in a way you can work with easily.

For example:

If your file contains 3 bytes: 0xAB, 0xCD, 0xEF

Then Uint8Array will give you: [171, 205, 239]


const hexOutput = Array.from(byteArray)
  .map(b => b.toString(16).padStart(2, "0"))
  .join(" ");
👆 Each byte is converted to a hexadecimal string (toString(16)), padded to 2 digits, then joined with spaces.

Example:

[171, 205, 239] → ["ab", "cd", "ef"] → "ab cd ef"


document.getElementById("binaryOutput").textContent = hexOutput;
👆 The final string is displayed in the browser.

📦 Summary: How the Buffer Works Here
You read a file from the user.

FileReader.readAsArrayBuffer(file) stores the raw file data in a buffer.

The buffer (ArrayBuffer) holds binary bytes.

Uint8Array gives access to individual bytes.

You process those bytes (convert to hex, display them).
*/
/*   readAsArrayBuffer(file): Reads the file as raw binary.

Uint8Array: Lets you view the buffer as an array of bytes.

This is useful when working with custom file formats or binary protocols. */
