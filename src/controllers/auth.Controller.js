const UserModel = require("../models/user.Model");
const bcrypt = require("bcrypt");
const asyncHandle = require("express-async-handler");
const jwt = require("jsonwebtoken");

const getJsonWebToken = async (email, id) => {
  const payload = {
    email,
    id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "7h",
  });

  return token;
};
const register = asyncHandle(async (req, res) => {
  const { email, username, password } = req.body;

  const exitstingUser = await UserModel.findOne({ email });
  if (exitstingUser) {
    res.status(401);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    email,
    username: username ?? "",
    password: hashedPassword,
  });

  await newUser.save();

  res.status(200).json({
    message: "Register successfully",
    data: {
      email: newUser.email,
      id: newUser.id,
      accesstoken: await getJsonWebToken(email, newUser.id),
    },
  });
});
module.exports = { register };
