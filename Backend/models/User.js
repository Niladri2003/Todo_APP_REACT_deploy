//import mongoose libary
const mongoose = require("mongoose");

//define the user schmea using the mongoose schema constructor
const userSchmea = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    token: {
      type: String,
    },

    // Add timestamps for when the document is created and last modified
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchmea);
