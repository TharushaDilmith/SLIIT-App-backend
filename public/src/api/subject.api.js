//add dependies
const controller = require('../controllers/subject.controller');
const express = require('express');
const router = express.Router();

module.exports = function () {
    router.get('/',controller.getAllSubjects);
    router.post('/add',controller.addSubject);
    return router;
}