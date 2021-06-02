//add dependies
const mongoose = require("mongoose");

//create course schema
const courseSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  code: { type: String, required: true, trim: true },
  passMark: { type: Number, required: true },
  lectureInCharge: { type: String, required: true, trim: true },
  subjects: [
    { type: mongoose.Schema.Types.ObjectId, ref: "subjects", required: false },
  ],
});

//create model
const course = mongoose.model("courses", courseSchema);

//export module
module.exports = course;
