const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    token: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
