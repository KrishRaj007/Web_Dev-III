// fileManager.js
// File manager using fs module - Create, Read, Update, Delete

const fs = require("fs");
const { log } = require("./modules/logger");

const filePath = "./test.txt";

// 1. CREATE FILE
console.log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  console.log("File Created");
  log("File created successfully");

  // 2. READ FILE
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    console.log("Reading File");
    console.log(data);

    // 3. UPDATE FILE (append)
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }
      console.log("File Updated");

      // Read again to show updated content
      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err.message);
          return;
        }
        console.log(updatedData);

        // 4. DELETE FILE
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }
          console.log("File Deleted");
          log("File deleted successfully");
        });
      });
    });
  });
});
