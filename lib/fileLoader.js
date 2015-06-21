var fs = require('fs');
var path = require('path');
var q = require('q');

var loadFilesAsList = function (directory, suffix, target) {

    var defer = q.defer();
    fs.readdir(directory, function (error, files) {

        if (error) {
            defer.reject(error);
        }

        if (files) {

            if (target === undefined) {
                target = [];
            }

            if (!Array.isArray(target)) {
                var code = 'ENOENT';
                var message = 'Target variable is not of type Array';
                var e = new Error(code + ': ' + message);
                e.code = code;
                e.message = message;

                defer.reject(e);
            } else {

                for (var i = 0; i < files.length; i++) {

                    if (suffix === undefined || suffix === null || suffix === "" ||
                        path.extname(files[i]) == "." + suffix) {

                        target.push(files[i]);
                    }
                }
                defer.resolve(target);
            }
        }

    });

    return defer.promise;

};

module.exports = {
    loadFilesAsList: loadFilesAsList
};