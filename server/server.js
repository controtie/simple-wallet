const portNumber = process.env.SERVER_PORT || 3001
const express = require('express');
const path = require('path');
const app = express();
const bitgoRequests = require('./bitgo-requests');

// using modules here makes it easier to integrate other SDK
// tools in the future, e.g. Blockchain.info SDK
app.use('/api/v1/bitgo', bitgoRequests);

app.listen(portNumber)
console.log('Server Up: listening on port', portNumber);

