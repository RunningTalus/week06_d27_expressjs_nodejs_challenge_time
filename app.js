var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

app.get('/date', function(req, res) {
	res.send(new Date());
});

var server = app.listen(6678, function() {
	console.log('Express server listening on port ' + server.address().port);
});
