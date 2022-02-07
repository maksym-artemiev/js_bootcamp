const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  fullName: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
