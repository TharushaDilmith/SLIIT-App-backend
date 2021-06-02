//add dependies
const subject = require("../models/subject.model");
const Subject = require("../models/subject.model");

//add a subject
const addSubject = async (req, res) => {
  if (req.body) {
    const subject = new Subject(req.body);
    subject
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//get all subjects
const getAllSubjects = async (req, res) => {
  await Subject.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

//export modules
module.exports = {
  addSubject,
  getAllSubjects,
};
