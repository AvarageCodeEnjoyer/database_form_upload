const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phone: Number,
  address: String,
});

const students = mongoose.model('Student', formSchema);

module.exports = students;
