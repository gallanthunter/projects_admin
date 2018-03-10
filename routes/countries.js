var express = require('express');
var router = express.Router();
var curd = require('../models/curd');
var Country = require('../models/country');

router.get('/countries', function (res, req) {
    Country.find({})
        .sort({update_at: -1})
        .then(function (countries) {
            res.json(countries)
        })
        .catch(function (err) {
            res.json(err)
        })
})