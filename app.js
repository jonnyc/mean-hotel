require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

// HTTP Request Logging function
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Set static path to the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules' ));

// Use the body parser middleware
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Set routes for the API
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('magic happens on port ' + port);
});
