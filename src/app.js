const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    index = require('./routes/index'),
    users = require('./routes/users'),
    api = require('./routes/api'),

    _404 = require('./lib/notfound'),
    err = require('./lib/err'),
    db = require('./lib/db'),
    services = require('./lib/services'),

    app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));
app.use('/doc', express.static(path.join(__dirname, '../doc')));

app.use(db(app));
app.use(services(app));

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(_404());

// error handlers

app.use(err());


module.exports = app;