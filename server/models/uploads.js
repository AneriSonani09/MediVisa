const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const uploadSchema = new mongoose.Schema({
  User: { type: String, required: true },
  Attach: {
    type: String,
    required: true 
  },
});

const Uploads = mongoose.model("Uploads", uploadSchema);

module.exports = {Uploads};

