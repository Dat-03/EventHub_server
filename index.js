const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  // hello
  app.get("/auth/hello", (req, res) => {
    res.send("Hello World!");
  });


  console.log(`Server starting at http://localhost:${PORT}`);
});
