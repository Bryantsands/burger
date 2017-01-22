var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var controller = require('./controllers/burgers_controller.js');

// var orm = require('./config/orm.js');

var app = express();
var port = 3000;

debugger;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

//set handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes and give server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port, function(){
    console.log('app is listening on port ', port);
});
