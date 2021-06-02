//get dependies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const courseAPI = require("./public/src/api/course.api");
const subjectAPI = require("./public/src/api/subject.api");

//create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

//set port number
const PORT = process.env.PORT || 8000;
//set mongodb url
const MONGODB_URL = process.env.MONGODB_URL;

//connect to the mongoDB
mongoose.connect(MONGODB_URL, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  (error) => {
    if (error) {
      console.log("Database error: ", error.message);
    }
  };

//add api 
app.use('/course',courseAPI());
app.use('/subject',subjectAPI());

//check mongoDB connection
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

//start listening to the port
app.listen(PORT, () => {
  console.log("You are listening to PORT " + 8000);
});
