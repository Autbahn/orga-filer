var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Config = require('config');
var errorHandler = require('./middlewares/errorHandler');
var customLibraryLoader = require('./lib/custom/customFileLoader');

var indexRoute = require('./routes/index');

var fileRoute = require('./routes/jsonRoutes/fileRoutes');
var app = express();

customLibraryLoader.loadCustomLibrariesFromDirectory(Config.application.custom.lib);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'ssssshhhhh'}));

var router = express.Router();

indexRoute(router);
fileRoute(router);
app.use("/", router);


app.use(errorHandler.err404);

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
