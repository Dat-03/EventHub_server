/** @format */

const Router = require("express");
const { register } = require("../controllers/auth.controller");
const authRouter = Router();

authRouter.post("/register", register);

module.exports = authRouter;
