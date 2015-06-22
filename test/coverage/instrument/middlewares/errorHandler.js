var __cov_5aiF$NdFE7Z_jGWyKuEpmA = (Function('return this'))();
if (!__cov_5aiF$NdFE7Z_jGWyKuEpmA.__coverage__) {
    __cov_5aiF$NdFE7Z_jGWyKuEpmA.__coverage__ = {};
}
__cov_5aiF$NdFE7Z_jGWyKuEpmA = __cov_5aiF$NdFE7Z_jGWyKuEpmA.__coverage__;
if (!(__cov_5aiF$NdFE7Z_jGWyKuEpmA['middlewares/errorHandler.js'])) {
    __cov_5aiF$NdFE7Z_jGWyKuEpmA['middlewares/errorHandler.js'] = {
        "path": "middlewares/errorHandler.js",
        "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0},
        "b": {},
        "f": {"1": 0},
        "fnMap": {
            "1": {
                "name": "(anonymous_1)",
                "line": 1,
                "loc": {"start": {"line": 1, "column": 13}, "end": {"line": 1, "column": 38}}
            }
        },
        "statementMap": {
            "1": {"start": {"line": 1, "column": 0}, "end": {"line": 5, "column": 2}},
            "2": {"start": {"line": 2, "column": 4}, "end": {"line": 2, "column": 37}},
            "3": {"start": {"line": 3, "column": 4}, "end": {"line": 3, "column": 21}},
            "4": {"start": {"line": 4, "column": 4}, "end": {"line": 4, "column": 14}},
            "5": {"start": {"line": 7, "column": 0}, "end": {"line": 9, "column": 2}}
        },
        "branchMap": {}
    };
}
__cov_5aiF$NdFE7Z_jGWyKuEpmA = __cov_5aiF$NdFE7Z_jGWyKuEpmA['middlewares/errorHandler.js'];
__cov_5aiF$NdFE7Z_jGWyKuEpmA.s['1']++;
var err404 = function (req, res, next) {
    __cov_5aiF$NdFE7Z_jGWyKuEpmA.f['1']++;
    __cov_5aiF$NdFE7Z_jGWyKuEpmA.s['2']++;
    var err = new Error('Not Found');
    __cov_5aiF$NdFE7Z_jGWyKuEpmA.s['3']++;
    err.status = 404;
    __cov_5aiF$NdFE7Z_jGWyKuEpmA.s['4']++;
    next(err);
};
__cov_5aiF$NdFE7Z_jGWyKuEpmA.s['5']++;
module.exports = {err404: err404};
