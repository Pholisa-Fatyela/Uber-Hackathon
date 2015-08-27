var express = require('express'),
    exphbs  = require('express3-handlebars'),
<<<<<<< HEAD
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
=======
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
>>>>>>> dcb28d28829f6af0a9551650e80a29bd12b0325b
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
<<<<<<< HEAD
app.get('/buttons', function (req, res){
	res.render('buttons', {layout: false});
=======

app.get('/register', function (req, res){
	res.render('register', {layout: false});
});

app.get('/page', function (req, res){
	res.render('page', {layout: false});
>>>>>>> dcb28d28829f6af0a9551650e80a29bd12b0325b
});
app.listen(3000);

var port = process.env.BASADI_PORT || 5000;

<<<<<<< HEAD
app.listen(3000);
=======
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Uber app listening at http://%s:%s', host, port);

});
>>>>>>> dcb28d28829f6af0a9551650e80a29bd12b0325b
