/** @format **/
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routes/auth.Router");
const connectDB = require("./src/configs/connectDb");
const errorMiddleware = require("./src/middlewares/error.Middleware");
const app = express();
require("dotenv").config();
// CGm8BCVSaFJZI1fQ quocdatbp1112
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/auth", authRouter);
connectDB();
app.use(errorMiddleware);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server starting at http://localhost:${PORT}`);
});
