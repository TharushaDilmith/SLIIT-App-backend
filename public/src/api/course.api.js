//add dependies
const express = require("express");
const router = express.Router();
const controller = require("../controllers/course.controller");

//create controllers route
module.exports = function () {
  router.post("/add", controller.addCourse);
  router.get("/", controller.getAllCourse);
  router.get("/:id", controller.getSubjectForCourse);
  router.get("/amount/:id", controller.calculateTotalAmount);
  return router;
};
