var portNumber = process.env.SERVER_PORT || 3001
var express = require('express');
var path = require('path');
var app = express();

app.use('/api/v1/fetchBalance', function(req, res) {
  console.log('fetching balance....');
  res.send({ data: 'fetching balance' });
});

app.post('/', function(req, res) {
  console.log('/ hit');
  res.send('home');
});

app.listen(portNumber)
console.log('Server Up: listening on port', portNumber);
