var express = require('express'),
    exphbs  = require('express3-handlebars'),
exphbs  = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    partners = require('./routes/partners');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'linokuhlekamva',
      port: 3306,
      database: 'UberHackathon'
};

app.use(express.static(__dirname + '/public'));

app.use(myConnection(mysql, dbOptions, 'single'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 3600000 }, resave: true, saveUninitialized: true})); -
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/appointment', function (req, res){
  res.render('appointment', {layout: false});
});
app.get('/buttons', function (req, res){
	res.render('buttons', {layout: false});
});
app.listen(3000);

//setup the handlers
app.get('/partners', partners.show);
app.get('/partners/edit/:id', partners.get);
app.post('/partners/update/:id', partners.update);
app.post('/partners/add', partners.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/partners/delete/:id', partners.delete);

app.listen(3000);
