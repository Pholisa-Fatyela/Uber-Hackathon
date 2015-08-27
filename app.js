var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
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

app.get('/register', function (req, res){
	res.render('register', {layout: false});
});

app.get('/page', function (req, res){
	res.render('page', {layout: false});
});

app.listen(3000);
