const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  mail: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("User", userSchema);
