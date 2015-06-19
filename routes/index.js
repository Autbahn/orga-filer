var express = require('express');
var router = express.Router();
var fileLoader = require('../lib/fileLoader');
var Config = require('config');
var q = require('q');

var model;
model = model || {};

module.exports = function(router) {
    router.get('/', function (req, res) {

        model.title = Config.application.title;

        var styleList = [];

        q.all([fileLoader.loadFilesAsList(
            "public/" + Config.application.custom.css, "css", styleList)
        ]).then(function (results) {

            model.customStyles = {};
            model.customStyles.baseDirectory = Config.application.custom.css;
            model.customStyles.styles = results[0];

            res.render('index', model);
        });


    });
}
