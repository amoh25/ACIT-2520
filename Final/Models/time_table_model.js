const mongoose = require("mongoose");
const {Schema} = mongoose;

const timeTableModel = new Schema({
    Day_Time: {type: String},
    Course_Number: {type: String},
    Location: {type: String},
    Instructor: {type: String},
  });
  
module.exports = mongoose.model("timeTable", timeTableModel);