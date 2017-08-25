Simple Wallet
============

Simple Wallet is a basic interface to BitGo's wallet API
You can view your wallet balances, and send your coins to any bitcoin address.

<img src="https://media.giphy.com/media/l1J9ym1tXM9JKl18Q/giphy.gif" width="300px"/>

Technologies:
- React
- Redux
- Node.js
- Express

Design decisions
----------------
With the ```reselect``` npm package, all derivations of state only have to be computed once; they are then memoized.

Therefore:
- The full state of the application at any given time should be a pure function of its store being processed by its components.
- State should be minimal in that it should contain the minimal amount of data duplication.
- Any data returned from api calls should be stored as the raw response.
- Any intermediary manipulations that make handling of data simpler can be done and shared in composable, memoized selectors

- All components are either presentational (dealing with styling/layout) or are logical (handling api calls, life-cycle methods).
This is the distiction between Components and their Containers.
- Whenever possible, reuse components for stylistic consistency.

Getting Started
---------------
To run this client:
0. Ensure you have node and npm installed
1. clone this repo to a local directory ```git clone https://github.com/controtie/simple-wallet.git```
2. install all node dependencies ```npm install```
3. ```npm start```
4. run tests with ```npm run test```

In order to use this application you will need a BitGo account.
You can get one [here](https://www.bitgo.com)

This application by default runs on the testnet, [using BitGo testnet accounts.](https://test.bitgo.com)
For testnet account, you can always supply 0000000 as your Google Auth password

To access your production wallets set the local env variable:
```export REACT_APP_PRODUCTION=true```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

