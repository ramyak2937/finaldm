const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  college: String,
  department: String,
  year: String,
  skills: String,
  course: String,
});

module.exports = mongoose.model(
  "Registration",
  registrationSchema
);