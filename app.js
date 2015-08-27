var express = require('express'),

exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/appointment', function (req, res){
	res.render('appointment', {layout: false});
});

 
app.listen(3000);
