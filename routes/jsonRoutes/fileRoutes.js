var fileLoader = require('../../lib/fileLoader');
var Config = require('config');

module.exports = function(router) {
    var model = model || {};
    router.get("/api/getFiles", function (req, res) {
        var files = [];
        fileLoader.loadFilesAsList(Config.baseDir.path, '', files).then(function (data) {
            model.files = files;
            res.json(model);
        });
    });
}