const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  username: { 
    type: String, 
    required: true, 
    index: { unique: true } 
  },
  password: { 
    type: String, 
    required: true 
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;