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

router.post('/unlock', function(req, res) {
  const { otp } = req.body || {};
  bitgo.unlock({ otp }, function(err, response) {
    if (err) {
      console.log('Unlock Failed!', err);
      res.status(400).send({err});
      return;
    }
    console.log('Unlock Success!');
    res.send({});
  });
});

router.get('/wallets', function(req, res) {
  const wallets = bitgo.wallets();
  wallets.list({}, function callback(err, wallets) {
    if (err) {
      console.log('Fetch Wallets Failed'. err);
      res.status(400).send({err});
      return;
    }
    res.send(wallets.wallets);
  });
});

router.post('/walletBalances', function(req, res) {
  const walletIds = req.body;
  console.log('walletIds', walletIds);
  const wallets = bitgo.wallets();
  const balanceRequests = walletIds.map(id => wallets.get(id));
  Promise.all(balanceRequests)
    .then((walletBalances) => {
      res.send(walletBalances);
    })
    .catch(err => {
      console.log('Fetch Wallet Data Failed'. err);
      res.status(400).send({err});
      return;
    });
});

router.post('/sendCoins', function(req, res) {
  const {
    otp,
    walletId,
    password,
    destinationAddress,
    amount,
  } = req.body;
  console.log('req.body', req.body);
  bitgo.unlock({ otp })
    .then(() => {
      return bitgo.wallets().get({id: walletId})
    })
    .then((wallet) => {
      return wallet.sendCoins({ address: destinationAddress, amount: Number.parseInt(amount), walletPassphrase: password })
    })
    .then((success) => {
      console.log('send coins success!', success);
      res.send({});
    })
    .catch(err => {
      console.log('Error fetching wallet!', err);
      return process.exit(-1);
    });
});

module.exports = router;

