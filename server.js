var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('./config/orm.js');

var port = 3000;

var app = express();