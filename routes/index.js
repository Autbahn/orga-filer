var express = require('express');
var router = express.Router();
var fileLoader = require('../lib/fileLoader');
var Config = require('config');
var q = require('q');

var model;
model = model || {};

router.get('/', function (req, res) {

    if(req.session)

    model.title = 'eCommFree';

    var styleList = [];
    var filesInDir = [];

    q.all([fileLoader.loadFilesAsList(
        "public/" + Config.application.custom.css, "css", styleList)
    ,
    fileLoader.loadFilesAsList("/home/jan/", "", filesInDir), ]).then(function (results) {

        model.customStyles = {};
        model.customStyles.baseDirectory = Config.application.custom.css;
        model.customStyles.styles = results[0];

        model.products = results[1];

        res.render('index', model);
    });


});

module.exports = router;
