var __cov_Xlxy68Bn8JGHshuW683QIQ = (Function('return this'))();
if (!__cov_Xlxy68Bn8JGHshuW683QIQ.__coverage__) {
    __cov_Xlxy68Bn8JGHshuW683QIQ.__coverage__ = {};
}
__cov_Xlxy68Bn8JGHshuW683QIQ = __cov_Xlxy68Bn8JGHshuW683QIQ.__coverage__;
if (!(__cov_Xlxy68Bn8JGHshuW683QIQ['lib/custom/jsonRenderer.js'])) {
    __cov_Xlxy68Bn8JGHshuW683QIQ['lib/custom/jsonRenderer.js'] = {
        "path": "lib/custom/jsonRenderer.js",
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
        "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0]},
        "f": {"1": 0, "2": 0, "3": 0},
        "fnMap": {
            "1": {
                "name": "renderJsonIfAllowed",
                "line": 6,
                "loc": {"start": {"line": 6, "column": 26}, "end": {"line": 6, "column": 57}}
            },
            "2": {
                "name": "checkJsonIsAllowed",
                "line": 15,
                "loc": {"start": {"line": 15, "column": 25}, "end": {"line": 15, "column": 58}}
            },
            "3": {
                "name": "(anonymous_3)",
                "line": 25,
                "loc": {"start": {"line": 25, "column": 11}, "end": {"line": 25, "column": 22}}
            }
        },
        "statementMap": {
            "1": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 33}},
            "2": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 31}},
            "3": {"start": {"line": 4, "column": 0}, "end": {"line": 4, "column": 37}},
            "4": {"start": {"line": 6, "column": 0}, "end": {"line": 13, "column": 2}},
            "5": {"start": {"line": 8, "column": 4}, "end": {"line": 12, "column": 5}},
            "6": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 39}},
            "7": {"start": {"line": 11, "column": 8}, "end": {"line": 11, "column": 45}},
            "8": {"start": {"line": 15, "column": 0}, "end": {"line": 23, "column": 2}},
            "9": {"start": {"line": 16, "column": 4}, "end": {"line": 16, "column": 26}},
            "10": {"start": {"line": 17, "column": 4}, "end": {"line": 21, "column": 5}},
            "11": {"start": {"line": 18, "column": 8}, "end": {"line": 20, "column": 9}},
            "12": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 29}},
            "13": {"start": {"line": 22, "column": 4}, "end": {"line": 22, "column": 21}},
            "14": {"start": {"line": 25, "column": 0}, "end": {"line": 27, "column": 2}},
            "15": {"start": {"line": 26, "column": 4}, "end": {"line": 26, "column": 50}},
            "16": {"start": {"line": 29, "column": 0}, "end": {"line": 32, "column": 2}}
        },
        "branchMap": {
            "1": {
                "line": 8,
                "type": "if",
                "locations": [{
                    "start": {"line": 8, "column": 4},
                    "end": {"line": 8, "column": 4}
                }, {"start": {"line": 8, "column": 4}, "end": {"line": 8, "column": 4}}]
            },
            "2": {
                "line": 17,
                "type": "if",
                "locations": [{
                    "start": {"line": 17, "column": 4},
                    "end": {"line": 17, "column": 4}
                }, {"start": {"line": 17, "column": 4}, "end": {"line": 17, "column": 4}}]
            },
            "3": {
                "line": 18,
                "type": "if",
                "locations": [{
                    "start": {"line": 18, "column": 8},
                    "end": {"line": 18, "column": 8}
                }, {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 8}}]
            }
        }
    };
}
__cov_Xlxy68Bn8JGHshuW683QIQ = __cov_Xlxy68Bn8JGHshuW683QIQ['lib/custom/jsonRenderer.js'];
__cov_Xlxy68Bn8JGHshuW683QIQ.s['1']++;
var express = require('express');
__cov_Xlxy68Bn8JGHshuW683QIQ.s['2']++;
var Config = require('config');
__cov_Xlxy68Bn8JGHshuW683QIQ.s['3']++;
var render = express.response.render;
__cov_Xlxy68Bn8JGHshuW683QIQ.s['4']++;
var renderJsonIfAllowed = function renderJsonIfAllowed() {
    __cov_Xlxy68Bn8JGHshuW683QIQ.f['1']++;
    __cov_Xlxy68Bn8JGHshuW683QIQ.s['5']++;
    if (checkJsonIsAllowed(this.req)) {
        __cov_Xlxy68Bn8JGHshuW683QIQ.b['1'][0]++;
        __cov_Xlxy68Bn8JGHshuW683QIQ.s['6']++;
        return this.json(arguments[1]);
    } else {
        __cov_Xlxy68Bn8JGHshuW683QIQ.b['1'][1]++;
        __cov_Xlxy68Bn8JGHshuW683QIQ.s['7']++;
        return render.apply(this, arguments);
    }
};
__cov_Xlxy68Bn8JGHshuW683QIQ.s['8']++;
var checkJsonIsAllowed = function checkJsonIsAllowed(req) {
    __cov_Xlxy68Bn8JGHshuW683QIQ.f['2']++;
    __cov_Xlxy68Bn8JGHshuW683QIQ.s['9']++;
    var isAllowed = false;
    __cov_Xlxy68Bn8JGHshuW683QIQ.s['10']++;
    if (Config.application.jsonAllowed) {
        __cov_Xlxy68Bn8JGHshuW683QIQ.b['2'][0]++;
        __cov_Xlxy68Bn8JGHshuW683QIQ.s['11']++;
        if (req.param('output') == 'json') {
            __cov_Xlxy68Bn8JGHshuW683QIQ.b['3'][0]++;
            __cov_Xlxy68Bn8JGHshuW683QIQ.s['12']++;
            isAllowed = true;
        } else {
            __cov_Xlxy68Bn8JGHshuW683QIQ.b['3'][1]++;
        }
    } else {
        __cov_Xlxy68Bn8JGHshuW683QIQ.b['2'][1]++;
    }
    __cov_Xlxy68Bn8JGHshuW683QIQ.s['13']++;
    return isAllowed;
};
__cov_Xlxy68Bn8JGHshuW683QIQ.s['14']++;
var load = function () {
    __cov_Xlxy68Bn8JGHshuW683QIQ.f['3']++;
    __cov_Xlxy68Bn8JGHshuW683QIQ.s['15']++;
    express.response.render = renderJsonIfAllowed;
};
__cov_Xlxy68Bn8JGHshuW683QIQ.s['16']++;
module.exports = {load: load, renderJsonIfAllowed: renderJsonIfAllowed};
