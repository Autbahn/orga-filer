var __cov_VdOARzml5$BjzTq$uMlftQ = (Function('return this'))();
if (!__cov_VdOARzml5$BjzTq$uMlftQ.__coverage__) {
    __cov_VdOARzml5$BjzTq$uMlftQ.__coverage__ = {};
}
__cov_VdOARzml5$BjzTq$uMlftQ = __cov_VdOARzml5$BjzTq$uMlftQ.__coverage__;
if (!(__cov_VdOARzml5$BjzTq$uMlftQ['routes/jsonRoutes/fileRoutes.js'])) {
    __cov_VdOARzml5$BjzTq$uMlftQ['routes/jsonRoutes/fileRoutes.js'] = {
        "path": "routes/jsonRoutes/fileRoutes.js",
        "s": {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0
        },
        "b": {"1": [0, 0], "2": [0, 0]},
        "f": {"1": 0, "2": 0, "3": 0},
        "fnMap": {
            "1": {
                "name": "(anonymous_1)",
                "line": 5,
                "loc": {"start": {"line": 5, "column": 17}, "end": {"line": 5, "column": 34}}
            },
            "2": {
                "name": "(anonymous_2)",
                "line": 7,
                "loc": {"start": {"line": 7, "column": 32}, "end": {"line": 7, "column": 52}}
            },
            "3": {
                "name": "(anonymous_3)",
                "line": 15,
                "loc": {"start": {"line": 15, "column": 76}, "end": {"line": 15, "column": 92}}
            }
        },
        "statementMap": {
            "1": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 49}},
            "2": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 31}},
            "3": {"start": {"line": 3, "column": 0}, "end": {"line": 3, "column": 30}},
            "4": {"start": {"line": 5, "column": 0}, "end": {"line": 20, "column": 2}},
            "5": {"start": {"line": 6, "column": 4}, "end": {"line": 6, "column": 28}},
            "6": {"start": {"line": 7, "column": 4}, "end": {"line": 19, "column": 7}},
            "7": {"start": {"line": 8, "column": 8}, "end": {"line": 8, "column": 23}},
            "8": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 24}},
            "9": {"start": {"line": 11, "column": 8}, "end": {"line": 13, "column": 9}},
            "10": {"start": {"line": 12, "column": 12}, "end": {"line": 12, "column": 38}},
            "11": {"start": {"line": 15, "column": 8}, "end": {"line": 18, "column": 11}},
            "12": {"start": {"line": 16, "column": 12}, "end": {"line": 16, "column": 32}},
            "13": {"start": {"line": 17, "column": 12}, "end": {"line": 17, "column": 28}}
        },
        "branchMap": {
            "1": {
                "line": 6,
                "type": "binary-expr",
                "locations": [{
                    "start": {"line": 6, "column": 16},
                    "end": {"line": 6, "column": 21}
                }, {"start": {"line": 6, "column": 25}, "end": {"line": 6, "column": 27}}]
            },
            "2": {
                "line": 11,
                "type": "if",
                "locations": [{
                    "start": {"line": 11, "column": 8},
                    "end": {"line": 11, "column": 8}
                }, {"start": {"line": 11, "column": 8}, "end": {"line": 11, "column": 8}}]
            }
        }
    };
}
__cov_VdOARzml5$BjzTq$uMlftQ = __cov_VdOARzml5$BjzTq$uMlftQ['routes/jsonRoutes/fileRoutes.js'];
__cov_VdOARzml5$BjzTq$uMlftQ.s['1']++;
var fileLoader = require('../../lib/fileLoader');
__cov_VdOARzml5$BjzTq$uMlftQ.s['2']++;
var Config = require('config');
__cov_VdOARzml5$BjzTq$uMlftQ.s['3']++;
var _ = require('underscore');
__cov_VdOARzml5$BjzTq$uMlftQ.s['4']++;
module.exports = function (router) {
    __cov_VdOARzml5$BjzTq$uMlftQ.f['1']++;
    __cov_VdOARzml5$BjzTq$uMlftQ.s['5']++;
    var model = (__cov_VdOARzml5$BjzTq$uMlftQ.b['1'][0]++, model) || (__cov_VdOARzml5$BjzTq$uMlftQ.b['1'][1]++, {});
    __cov_VdOARzml5$BjzTq$uMlftQ.s['6']++;
    router.get('/api/getFiles', function (req, res) {
        __cov_VdOARzml5$BjzTq$uMlftQ.f['2']++;
        __cov_VdOARzml5$BjzTq$uMlftQ.s['7']++;
        var files = [];
        __cov_VdOARzml5$BjzTq$uMlftQ.s['8']++;
        var suffix = '';
        __cov_VdOARzml5$BjzTq$uMlftQ.s['9']++;
        if (_.indexOf(Config.files.suffix.acceptedSuffixes, req.query.suffix) != -1) {
            __cov_VdOARzml5$BjzTq$uMlftQ.b['2'][0]++;
            __cov_VdOARzml5$BjzTq$uMlftQ.s['10']++;
            suffix = req.query.suffix;
        } else {
            __cov_VdOARzml5$BjzTq$uMlftQ.b['2'][1]++;
        }
        __cov_VdOARzml5$BjzTq$uMlftQ.s['11']++;
        fileLoader.loadFilesAsList(Config.baseDir.path, suffix, files).then(function (data) {
            __cov_VdOARzml5$BjzTq$uMlftQ.f['3']++;
            __cov_VdOARzml5$BjzTq$uMlftQ.s['12']++;
            model.files = files;
            __cov_VdOARzml5$BjzTq$uMlftQ.s['13']++;
            res.json(model);
        });
    });
};
