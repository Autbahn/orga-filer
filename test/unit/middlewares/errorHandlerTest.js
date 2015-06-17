var request = require('supertest');
var app = require('express')();
var errorHandler = require('../../..//middlewares/errorHandler');
var should = require('should');

app.use(errorHandler.err404);
describe("errorHandlerTest", function() {

    describe("When response is 404", function() {

        it("it should add the custom error message", function(done) {
                request(app).get('/').end(function (err, res) {
                    res.error.text.should.startWith("Error: Not Found<br> &nbsp; &nbsp;at");
                    done();
                });
        });

    });

});
