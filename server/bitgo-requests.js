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
        console.log('Login Failed!', err);
        res.status(400).send({err});
        return;
      }
      var token = response.token;
      var user = response.user;
      console.log('Login Success!');
      res.send({token, user});
    });
});

router.get('/logout', function(req, res) {
  bitgo.logout({}, function(err, response) {
    if (err) {
      console.log('Logout Failed!', err);
      res.status(400).send({err});
      return;
    }
    console.log('Logout Success!');
    res.send({});
  });
});

router.get('/fetchBalance', function(req, res) {
});

module.exports = router;

