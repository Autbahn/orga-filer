var fs = require('fs');


var loadCustomLibrariesFromDirectory = function(basePath) {

    var customFiles = fs.readdirSync(basePath);
    for (var i = 0; i < customFiles.length; i++) {

        if (!(customFiles[i] === "customFileLoader.js")) {
            require("./" + customFiles[i]).load();
        }

    }

};

module.exports = {
    loadCustomLibrariesFromDirectory: loadCustomLibrariesFromDirectory
}