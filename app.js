
var express = require('express');
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/dream');

var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.use(express.static('public'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require('./routes')(app);
require('./database/news_repository')(app);
require('./database/expense_repository')(app)

app.listen(8004);
console.log('server is running');

