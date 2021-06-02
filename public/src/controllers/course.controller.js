//add dependies
const Course = require("../models/course.model");
const subject = require("../models/subject.model");

//add a course
const addCourse = async (req, res) => {
  if (req.body) {
    const course = new Course(req.body);
    await course
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//get the all courses
const getAllCourse = async (req, res) => {
  await Course.find({})
    .populate("subjects", "name description amount")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

//get all subjects belongs to a course
const getSubjectForCourse = async (req, res) => {
  if (req.params && req.params.id) {
    await Course.findById(req.params.id)
      .populate("subjects", "name description amount")
      .then((data) => {
        res.status(200).send({ subjects: data.subjects });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//calculate the total amount for a course
const calculateTotalAmount = async (req, res) => {
  if (req.params && req.params.id) {
    const course = await Course.findById(req.params.id).populate(
      "subjects",
      "amount"
    );
    let totalAmount = 0;

    if (course.subjects.length > 0) {
      course.subjects.map((subject) => {
        totalAmount += subject.amount;
      });
    }
    res.status(200).send({totalAmount:totalAmount});
  }
};

//module export
module.exports = {
  addCourse,
  getAllCourse,
  getSubjectForCourse,
  calculateTotalAmount,
};
