const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const uploadSchema = new mongoose.Schema({
  User: { type: String, required: true },
  Attach: {
    type: String,
    required: true 
  },
});

module.exports= mongoose.model("uploads", uploadSchema);

// module.exports = {uploads};

