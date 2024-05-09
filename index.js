/** @format */
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routes/authRouter");
const connectDB = require("./src/configs/connectDb");
const errorMiddleHandle = require("./src/middlewares/errorMiddleware");
const userRouter = require("./src/routes/userRouter");

const verifyToken = require("./src/middlewares/verifyMiddleware");
const app = express();
exports.app = app;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/auth", authRouter);
app.use("/users", verifyToken, userRouter);
connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server starting at http://localhost:${PORT}`);
});
