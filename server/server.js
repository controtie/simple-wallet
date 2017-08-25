var portNumber = process.env.SERVER_PORT || 3001
var express = require('express');
var path = require('path');
var app = express();
var bitgoRequests = require('./bitgo-requests');

// using modules here makes it easier to integrate other SDK
// tools in the future, e.g. Blockchain.info SDK
app.use('/api/v1/bitgo', bitgoRequests);

app.listen(portNumber)
console.log('Server Up: listening on port', portNumber);

