const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  console.log(`Server starting at http://localhost:${PORT}`);
});
