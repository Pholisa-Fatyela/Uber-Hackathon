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

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Uber app listening at http://%s:%s', host, port);

});
