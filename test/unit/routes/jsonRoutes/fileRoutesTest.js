var sandbox = require('sandboxed-module');
var q = require('q');

var fileRoutes = sandbox.require('../../../../routes/jsonRoutes/fileRoutes', {
    requires: {
        '../../lib/fileLoader': {

            loadFilesAsList: function loadFilesAsList(path, suffix, files) {
                var defer = q.defer();

                defer.resolve(files);
                return defer.promise;
            }
        }
    }

});
var request = require('supertest');
var express = require('express');
var app = express();
var router = express.Router();


before(function () {
    fileRoutes(router);
    app.use("/", router);
});


describe("FileRoute Test", function () {

    describe("When no GET parameter is given", function () {

        it("it should return the file list without hidden files", function () {

            request(app).get("/api/getFiles").end(function (err, res) {

                // TODO

            })

        });

    });

});