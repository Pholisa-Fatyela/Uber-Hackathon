var express = require('express'),
<<<<<<< HEAD
exphbs  = require('express3-handlebars'),

 
=======
    exphbs  = require('express3-handlebars'),

>>>>>>> 29152ac63a971288dc3e71e1f5ee87228c0a3889
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

<<<<<<< HEAD
app.get('/appointment', function (req, res){
	res.render('appointment', {layout: false});
});
 
app.listen(3000);
=======
var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Uber app listening at http://%s:%s', host, port);

});
>>>>>>> 29152ac63a971288dc3e71e1f5ee87228c0a3889
