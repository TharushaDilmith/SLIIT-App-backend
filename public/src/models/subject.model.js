//add dependies
const mongoose = require("mongoose");

//create subject schema
const subjectSchema = mongoose.Schema({
  name: { type: String, require: true, trim: true },
  description: { type: String, required: true, trim: true },
  amount: { type: Number, required: true },
  courses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "courses", required: false },
  ],
});

//create model
const subject = mongoose.model("subjects", subjectSchema);

//export module
module.exports = subject;
