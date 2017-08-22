var portNumber = process.env.SERVER_PORT || 3001
var express = require('express');
var path = require('path');
var app = express();
var bitgoRequests = require('./bitgo-requests');

app.use('/api/v1/bitgo', bitgoRequests);

app.post('/', function(req, res) {
  res.send('home');
});

app.listen(portNumber)
console.log('Server Up: listening on port', portNumber);
