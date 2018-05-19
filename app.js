var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var limit = require('raw-body');
//var morgan = require('morgan');
var fs = require('fs');
var nativelog = fs.createWriteStream(__dirname + '/data/logs/server.log', { flags: 'a' });
var _ = require('underscore');

var home = require('./routes/index');
var api = require('./routes/api');
var auth = require('./routes/auth');
var ds = require('./routes/dataservices');
var msg = require('./routes/messages');
var test = require('./routes/tests');
var user = require('./routes/users');
var tweet = require('./routes/twitter');
var logger = require('./routes/logger');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('env', 'development');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// middleware
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('lagtime'));
app.use(methodOverride());

// security
//app.use(session({ secret: 'lagtime' }));
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
//app.set('trust proxy', 1) // trust first proxy
app.use(session({ secret: 'lagtime', resave: false, saveUninitialized: true, cookie: { secure: false } }));

//app.use(limit('2000mb'));

// MAIN ROUTES
app.use('/', home);
app.use('/api/', api);
app.use('/auth/', auth);
app.use('/ds/', ds);
app.use('/msg/', msg);
app.use('/test/', test);
app.use('/user/', user);
app.use('/tweet/', tweet);
app.use('/logger/', logger);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: 'Error',
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
