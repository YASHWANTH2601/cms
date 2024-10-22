const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required."],
  },
  email: {
    type: String,
    require: [true, "email is required."],
  },
  password: {
    type: String,
    require: [true, "password is required."],
  },
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;
