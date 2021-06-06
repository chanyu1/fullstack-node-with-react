const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const saltRounds = 10;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
