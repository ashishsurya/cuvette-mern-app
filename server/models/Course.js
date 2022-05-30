const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    required : true,
    type: String,
  },
  instructorName: {
    required: true,
    type: String,
  },
  description: {
    
  }


})