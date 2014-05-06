var express = require('express');
var app = express();
var moment = require('moment');

// app.get('/', function(req, res) {
// 	res.send('<h1>Hello Boulder</h1>');
// });

// app.get('/date', function(req, res) {
// 	res.send(new Date());
// });

console.log('outside');

app.get('/', function(req, res) {
	res.send( moment().format('MMMM Do YYYY, h:mm:ss a') );
	console.log('inside');
});

var server = app.listen(6678, function() {
	console.log('Express server listening on port ' + server.address().port);
});
