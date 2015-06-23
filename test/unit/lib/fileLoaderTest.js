var should = require('should');
var mockFs = require('mock-fs');
var fileLoader = require('../../../lib/fileLoader');


before(function() {
    mockFs({
            'test/path' : {
                'file1.js' : 'Test file content',
                'file2.coffee': 'Coffee content'
            },
            'test/emptypath': {
            },
            'test/path2': {
                'file1.js' : 'Test file content'
            },
            'test/path3': {
                'file1.coffee' : 'Test file content',
                'file2.coffee' : 'Coffee content'
            }
        }
    );
});

describe("fileLoader Test", function() {

    describe("When called with an directory with " +
        "many files and one of the searched type", function () {

        it("it should return an array with the file", function (done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/path", "js", fileList).then(function (data) {

                fileList.should.length(1);
                fileList[0].should.equal("file1.js");

                done();
            });
        });
    });

    describe("When called with an empty directory", function() {
        it("it should return an empty list", function (done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/emptypath", "js", fileList).then(
                function (data) {
                    fileList.should.length(0);
                    done();
                }
            );
        });
    });

    describe("When called with an empty directory but not empty target array", function () {
        it("it should return an array with the same input elements", function (done) {
            var fileList = ['file.js'];
            fileLoader.loadFilesAsList("test/emptypath", "js", fileList).then(
                function (data) {
                    fileList.should.length(1);
                    fileList[0].should.equal("file.js");
                    done();
                }
            );
        });
    });

    describe("When called with an directory with just one file", function() {

        it("it should return this file", function (done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/path2", "js", fileList).then(function (data) {
                fileList.should.length(1);
                fileList[0].should.equal("file1.js");
                done();
            });

        });
    });

    describe("When called with an directory with more than one files " +
        "but no of files of the type", function () {
        it("it should return an empty list", function (done) {
            var fileList = [];
            fileLoader.loadFilesAsList("test/path3", "js", fileList).then(function (data) {
                fileList.should.length(0);
                done();
            });
        });
    });

    describe("When the given directoryname is not a directory but a file", function() {
        it("it should return an empty array", function (done) {
            var fileList = [];
            fileLoader.loadFilesAsList("test/path/file.js", "js", fileList).then(function (data) {

                done();
            }, function (error) {
                error.code.should.equal("ENOENT");
                done();
            });
        });
    });

    describe("When target variable is not an array", function () {
        it("it should throw an error", function (done) {

            var fileList = {};
            fileLoader.loadFilesAsList("test/path2", "js", fileList).then(null, function (error) {
                error.code.should.equal('ENOENT');
                done();
            });
        });
    });

    describe("When suffix is an empty string", function() {
        it("it should include all files", function(done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/path", "", fileList).then(
                function(data) {
                    fileList.length.should.equal(2);
                    done();
                }
            );

        });
    });

    describe("When suffix is null", function() {
        it("it should include all files", function(done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/path", null, fileList).then(
                function(data) {
                    fileList.length.should.equal(2);
                    done();
                }
            );

        });
    });

    describe("When suffix is undefined", function() {
        it("it should include all files", function(done) {

            var fileList = [];
            fileLoader.loadFilesAsList("test/path", undefined, fileList).then(
                function(data) {
                    fileList.length.should.equal(2);
                    done();
                }
            );

        });
    });

});

after(function() {
    mockFs.restore();
});
