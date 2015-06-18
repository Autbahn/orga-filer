var request = require('supertest');
var app = require('express')();
var errorHandler = require('../../..//middlewares/errorHandler');
var should = require('should');
var hasThrown = false;

beforeEach(function() {
    hasThrown = false; 
});
app.use('/successful', function(req, res) {
   res.send('Request successful!'); 
});

app.use(errorHandler.err404);
app.use(function(err, req, res, next) {
    hasThrown = true;
    next();
});

describe("errorHandlerTest", function() {

    describe("When the request is not successful", function() {

        it("it should throw the error", function(done) {
                request(app).get('/shouldfail').end(function (err, res) {
                    hasThrown.should.be.true;
                    done();
                });
        });
    });
    
    describe("When the request is successful", function() {
       it("it should not throw the error", function(done) {
           request(app).get('/successful').end(function (err, res) {
                hasThrown.should.be.false;
                done();
            });
       }) 
    });

});
