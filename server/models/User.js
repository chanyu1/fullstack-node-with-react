const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const saltRounds = 10;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
