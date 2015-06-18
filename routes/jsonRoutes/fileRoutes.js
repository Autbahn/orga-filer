var fileLoader = require('../../lib/fileLoader');

module.exports = function(router) {
    var model = model || {};
    router.get("/getFiles", function(req, res) {
        var files = [];
        fileLoader.loadFilesAsList('/home/jan/', '', files).then(function(data) {
            model.files = files;
            res.json(model);
        });
    });
}