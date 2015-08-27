var express = require('express'),
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
      password: 'coder123',
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

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/login', function (req, res){
	res.render('login', {layout: false});
});

app.get('/appointment', function (req, res){
	res.render('appointment', {layout: false});
});

app.get('/buttons', function (req, res){
	res.render('buttons', {layout: false});
});

app.get('/guidelines', function (req, res){
  res.render('guidelines', {layout: false});
});

app.get('/problems', function (req, res){
  res.render('problems', {layout: false});
});

app.get('/thanks', function (req, res){
  res.render('thanks', {layout: false});
});

app.get('/register', function (req, res){
	res.render('register', {layout: false});
});

app.get('/page', function (req, res){
	res.render('page', {layout: false});
});
var port = process.env.BASADI_PORT || 5000
app.listen(5000);
