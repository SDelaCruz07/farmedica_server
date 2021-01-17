const config = require('config');
var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const { error404, generalErrorHandler } = require('./middleware');

var app = express();

app.use(logger(config.get('logger')));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(error404);
app.use(generalErrorHandler);

module.exports = app;
