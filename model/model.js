const mongoose = require("mongoose");


const dataSchama = new mongoose.Schema({
  FirstName: {
    type: String,

    trim: true
  },
  LastName: {
    type: String,

    trim: true
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  Password: {
    type: String,
    required: true,
    trim: true
  },


});

const user = mongoose.model("Data", dataSchama)
module.exports = user;