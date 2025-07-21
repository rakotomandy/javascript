document.getElementById("imageInput").addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the image file selected by the user
  
    if (file) {
      const reader = new FileReader(); // Create FileReader to read the file
  
      // When file reading is complete
      reader.onload = function () {
        alert("uploaded successfully")
        // Set the image src to the base64 data URL from the reader
        let result=reader.result;
        document.getElementById("previewImage").src = result;
        localStorage.setItem("image",result);
      };
  
      // Read the file as a Data URL (base64 encoded string)
      reader.readAsDataURL(file);
    }
  });
  
  if(localStorage.getItem("image")){
    let result=localStorage.getItem("image");
    document.getElementById("previewImage").src = result;
  }

  /* Explanation:
readAsDataURL(file): Converts the file into a base64-encoded string that can be used as a source for <img>, <audio>, or <video>.

This is useful for previewing images before uploading them to a server. */