
var io = require('socket.io');
var http = require('http');
var express = require('express');


// Setup express to handle static routes
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});




// Start the server
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
	console.log('Listening on: ' + port);
});

// Tell socket.io to listen on our server
io.listen(server);



