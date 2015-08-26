var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Uber app listening at http://%s:%s', host, port);

});
