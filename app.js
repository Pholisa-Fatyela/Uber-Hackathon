var express = require('express'),
<<<<<<< HEAD
    exphbs  = require('express3-handlebars'),
=======
exphbs  = require('express3-handlebars'),

>>>>>>> e0821808556b23f3b4c2ded9632427accafc5740
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/appointment', function (req, res){
	res.render('appointment', {layout: false});
});
<<<<<<< HEAD


var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Uber app listening at http://%s:%s', host, port);

});
=======
 
app.listen(3000);

>>>>>>> e0821808556b23f3b4c2ded9632427accafc5740
