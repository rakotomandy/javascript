document.getElementById("textFileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      console.log("File Name:", file.name);
      console.log("File Type:", file.type);
      console.log("File Size:", file.size, "bytes");
    }
  });
  