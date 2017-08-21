var express = require('express');
var router  = express.Router();
var BitGoJS = require('bitgo');
var body    = require('body-parser');

const bitgo =
  new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN }); 

router.get('/fetchBalance', function(req, res) {
  const username = '';
  const password = '';
  bitgo.authenticate(
    { username, password, otp: '0000000' },
    function callback(err, response) {
    if (err) {
      // handle error
      console.log('error!!!', err);
    }
    var token = response.token;
    var user = response.user;
    console.log('token', token);
    console.log('user', user);
    res.send({data: 'good'});
  });
});

module.exports = router;

