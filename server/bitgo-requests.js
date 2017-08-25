const express    = require('express');
const router     = express.Router();
const BitGoJS    = require('bitgo');
const bodyParser = require('body-parser');

// Initialize bitgo sdk with local accessToken
const bitgo =
  new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN }); 

// Automatically parse JSON on any inbound requests
router.use(bodyParser.json());

// Login to User BitGo account
router.post('/login', (req, res) => {
  const {
    username,
    password,
    otp,
  } = req.body || {};

  // Check if session is already valid
  bitgo.session({})
  .then(response => {
    console.log('User was already logged in!');
    res.send({user: response});
  })
  .catch(error => {
    
    // If session is invalid, attempt login
    bitgo.authenticate({ username, password, otp })
      .then(response => {
        var token = response.token;
        var user = response.user;
        console.log('Login Success!');
        res.send({token, user});
      })
      .catch(err => {
        console.log('Login Failed!', error);
        res.status(400).send({err: error});
      });
  })
});

// Logout of BitGo account
router.get('/logout', (req, res) => {
  bitgo.logout({},(err, response) => {
    if (err) {
      console.log('Logout Failed!', err);
      res.status(400).send({err});
      return;
    }
    console.log('Logout Success!');
    res.send({});
  });
});

// Fetch wallets for current logged in user
router.get('/wallets', (req, res) => {
  const wallets = bitgo.wallets();
  wallets.list({}, (err, wallets) => {
    if (err) {
      console.log('Fetch Wallets Failed'. err);
      res.status(400).send({err});
      return;
    }
    res.send(wallets.wallets);
  });
});

// Fetch balances for current logged in user
router.post('/walletBalances', (req, res) => {
  const walletIds = req.body;
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

// Send coins from provided 'walletId' to 'destinationAddress'
router.post('/sendCoins', (req, res) => {
  const {
    otp,
    walletId,
    password,
    destinationAddress,
    amount,
  } = req.body;

  // First unlock BitGo account to allow spending
  bitgo.unlock({ otp })
    .then(() => {
      // Fetch wallet of provided walletId
      return bitgo.wallets().get({id: walletId})
    })
    .then((wallet) => {
       // Initiate send transaction of 'amount' to 'destinationAddress'
      return wallet.sendCoins({ address: destinationAddress, amount: Number.parseInt(amount), walletPassphrase: password })
    })
    .then((success) => {
      console.log('send coins success!', success);
      res.send({});
    })
    .catch(err => {
      console.log('Error Sending Coins!', err);
      res.status(400).send({ err });
    });
});

module.exports = router;

