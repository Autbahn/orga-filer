var __cov_OuwH2I8pFRKZN_tojK7nqg = (Function('return this'))();
if (!__cov_OuwH2I8pFRKZN_tojK7nqg.__coverage__) {
    __cov_OuwH2I8pFRKZN_tojK7nqg.__coverage__ = {};
}
__cov_OuwH2I8pFRKZN_tojK7nqg = __cov_OuwH2I8pFRKZN_tojK7nqg.__coverage__;
if (!(__cov_OuwH2I8pFRKZN_tojK7nqg['lib/custom/customFileLoader.js'])) {
    __cov_OuwH2I8pFRKZN_tojK7nqg['lib/custom/customFileLoader.js'] = {
        "path": "lib/custom/customFileLoader.js",
        "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0},
        "b": {"1": [0, 0]},
        "f": {"1": 0},
        "fnMap": {
            "1": {
                "name": "(anonymous_1)",
                "line": 4,
                "loc": {"start": {"line": 4, "column": 39}, "end": {"line": 4, "column": 58}}
            }
        },
        "statementMap": {
            "1": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 23}},
            "2": {"start": {"line": 4, "column": 0}, "end": {"line": 15, "column": 2}},
            "3": {"start": {"line": 6, "column": 4}, "end": {"line": 6, "column": 47}},
            "4": {"start": {"line": 7, "column": 4}, "end": {"line": 13, "column": 5}},
            "5": {"start": {"line": 9, "column": 8}, "end": {"line": 11, "column": 9}},
            "6": {"start": {"line": 10, "column": 12}, "end": {"line": 10, "column": 50}},
            "7": {"start": {"line": 17, "column": 0}, "end": {"line": 19, "column": 2}}
        },
        "branchMap": {
            "1": {
                "line": 9,
                "type": "if",
                "locations": [{
                    "start": {"line": 9, "column": 8},
                    "end": {"line": 9, "column": 8}
                }, {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 8}}]
            }
        }
    };
}
__cov_OuwH2I8pFRKZN_tojK7nqg = __cov_OuwH2I8pFRKZN_tojK7nqg['lib/custom/customFileLoader.js'];
__cov_OuwH2I8pFRKZN_tojK7nqg.s['1']++;
var fs = require('fs');
__cov_OuwH2I8pFRKZN_tojK7nqg.s['2']++;
var loadCustomLibrariesFromDirectory = function (basePath) {
    __cov_OuwH2I8pFRKZN_tojK7nqg.f['1']++;
    __cov_OuwH2I8pFRKZN_tojK7nqg.s['3']++;
    var customFiles = fs.readdirSync(basePath);
    __cov_OuwH2I8pFRKZN_tojK7nqg.s['4']++;
    for (var i = 0; i < customFiles.length; i++) {
        __cov_OuwH2I8pFRKZN_tojK7nqg.s['5']++;
        if (customFiles[i] != 'customFileLoader.js') {
            __cov_OuwH2I8pFRKZN_tojK7nqg.b['1'][0]++;
            __cov_OuwH2I8pFRKZN_tojK7nqg.s['6']++;
            require('./' + customFiles[i]).load();
        } else {
            __cov_OuwH2I8pFRKZN_tojK7nqg.b['1'][1]++;
        }
    }
};
__cov_OuwH2I8pFRKZN_tojK7nqg.s['7']++;
module.exports = {loadCustomLibrariesFromDirectory: loadCustomLibrariesFromDirectory};
