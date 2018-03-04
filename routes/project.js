var express = require('express');
var router = express.Router();
var project = require('../models/project');
var operation = require('../models/operation');

// GET method route
router.get('/project/create', function (req, res) {
    // res.send('POST request to the homepage');
    operation.createProject(req.body.json(project));
});

router.get('/project/all', function (req, res) {

});

router.get('/project/:operator', function (req, res) {

});

router.get('/project/:region', function (req, res) {

});

router.get('/project/:sgmarket', function (req, res) {

});

router.get('/project/:scenario', function (req, res) {

});

// POST method route

