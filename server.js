var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('./config/orm.js');


var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

//set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes and give server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
