var __cov_u1A$PZBHvNSlcwVZ8eFlYA = (Function('return this'))();
if (!__cov_u1A$PZBHvNSlcwVZ8eFlYA.__coverage__) {
    __cov_u1A$PZBHvNSlcwVZ8eFlYA.__coverage__ = {};
}
__cov_u1A$PZBHvNSlcwVZ8eFlYA = __cov_u1A$PZBHvNSlcwVZ8eFlYA.__coverage__;
if (!(__cov_u1A$PZBHvNSlcwVZ8eFlYA['routes/index.js'])) {
    __cov_u1A$PZBHvNSlcwVZ8eFlYA['routes/index.js'] = {
        "path": "routes/index.js",
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
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0
        },
        "b": {"1": [0, 0]},
        "f": {"1": 0, "2": 0, "3": 0},
        "fnMap": {
            "1": {
                "name": "(anonymous_1)",
                "line": 10,
                "loc": {"start": {"line": 10, "column": 17}, "end": {"line": 10, "column": 34}}
            },
            "2": {
                "name": "(anonymous_2)",
                "line": 11,
                "loc": {"start": {"line": 11, "column": 20}, "end": {"line": 11, "column": 40}}
            },
            "3": {
                "name": "(anonymous_3)",
                "line": 19,
                "loc": {"start": {"line": 19, "column": 16}, "end": {"line": 19, "column": 35}}
            }
        },
        "statementMap": {
            "1": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 33}},
            "2": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 30}},
            "3": {"start": {"line": 3, "column": 0}, "end": {"line": 3, "column": 46}},
            "4": {"start": {"line": 4, "column": 0}, "end": {"line": 4, "column": 31}},
            "5": {"start": {"line": 5, "column": 0}, "end": {"line": 5, "column": 21}},
            "6": {"start": {"line": 7, "column": 0}, "end": {"line": 7, "column": 10}},
            "7": {"start": {"line": 8, "column": 0}, "end": {"line": 8, "column": 20}},
            "8": {"start": {"line": 10, "column": 0}, "end": {"line": 30, "column": 2}},
            "9": {"start": {"line": 11, "column": 4}, "end": {"line": 29, "column": 7}},
            "10": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 47}},
            "11": {"start": {"line": 15, "column": 8}, "end": {"line": 15, "column": 27}},
            "12": {"start": {"line": 17, "column": 8}, "end": {"line": 26, "column": 11}},
            "13": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 36}},
            "14": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 77}},
            "15": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 51}},
            "16": {"start": {"line": 25, "column": 12}, "end": {"line": 25, "column": 39}}
        },
        "branchMap": {
            "1": {
                "line": 8,
                "type": "binary-expr",
                "locations": [{
                    "start": {"line": 8, "column": 8},
                    "end": {"line": 8, "column": 13}
                }, {"start": {"line": 8, "column": 17}, "end": {"line": 8, "column": 19}}]
            }
        }
    };
}
__cov_u1A$PZBHvNSlcwVZ8eFlYA = __cov_u1A$PZBHvNSlcwVZ8eFlYA['routes/index.js'];
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['1']++;
var express = require('express');
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['2']++;
var router = express.Router();
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['3']++;
var fileLoader = require('../lib/fileLoader');
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['4']++;
var Config = require('config');
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['5']++;
var q = require('q');
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['6']++;
var model;
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['7']++;
model = (__cov_u1A$PZBHvNSlcwVZ8eFlYA.b['1'][0]++, model) || (__cov_u1A$PZBHvNSlcwVZ8eFlYA.b['1'][1]++, {});
__cov_u1A$PZBHvNSlcwVZ8eFlYA.s['8']++;
module.exports = function (router) {
    __cov_u1A$PZBHvNSlcwVZ8eFlYA.f['1']++;
    __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['9']++;
    router.get('/', function (req, res) {
        __cov_u1A$PZBHvNSlcwVZ8eFlYA.f['2']++;
        __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['10']++;
        model.title = Config.application.title;
        __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['11']++;
        var styleList = [];
        __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['12']++;
        q.all([fileLoader.loadFilesAsList('public/' + Config.application.custom.css, 'css', styleList)]).then(function (results) {
            __cov_u1A$PZBHvNSlcwVZ8eFlYA.f['3']++;
            __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['13']++;
            model.customStyles = {};
            __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['14']++;
            model.customStyles.baseDirectory = Config.application.custom.css;
            __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['15']++;
            model.customStyles.styles = results[0];
            __cov_u1A$PZBHvNSlcwVZ8eFlYA.s['16']++;
            res.render('index', model);
        });
    });
};
