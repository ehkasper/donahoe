var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var routes = require('./routes');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var config = require('./config');

/**
 * Using CORS to reduce CROSS Origine.
 */
app.use(cors());


/**
 * Connecting to MongoDB using Mongoose.
 */
mongoose.connect(config.database, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to database");
  }
});

// Configuration
// app.use(express.logger({stream: expressLogFile}));
app.use('/', express.static(path.join(__dirname, 'public')));

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

console.log('Environment set: %s', app.get('env'));
if (app.get('env') === 'development') {
  // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
} else if (app.get('env') === 'production') {
  // app.use(express.errorHandler());
};

routes.setup(app);

module.exports = app;
