var fileLoader = require('../../lib/fileLoader');
var Config = require('config');
var _ = require('underscore');

module.exports = function(router) {
    var model = model || {};
    router.get("/api/getFiles", function (req, res) {
        var files = [];
        var suffix = '';

        if (_.indexOf(Config.files.suffix.acceptedSuffixes, req.query.suffix) != -1) {
            suffix = req.query.suffix;
        }

        fileLoader.loadFilesAsList(Config.baseDir.path, suffix, files).then(function (data) {
            model.files = files;
            res.json(model);
        });
    });
};