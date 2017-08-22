var express    = require('express');
var router     = express.Router();
var BitGoJS    = require('bitgo');
var bodyParser = require('body-parser');

const bitgo =
  new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN }); 

router.use(bodyParser.json());

router.post('/login', function(req, res) {
  console.log('login credentials:', req.body);
  const {
    username,
    password,
    otp,
  } = req.body || {};

  bitgo.authenticate(
    { username, password, otp },
    function callback(err, response) {
      if (err) {
        // handle error
        console.log('error!!!', err);
      }
      var token = response.token;
      var user = response.user;
      res.send({token, user});
    });
});

router.get('/fetchBalance', function(req, res) {
});

module.exports = router;

