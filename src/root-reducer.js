import { combineReducers } from 'redux';
import balance from './containers/Balance/balance-reducer';
import login from './containers/Login/login-reducer';
import send from './containers/Send/send-reducer';
import { routerReducer as router } from 'react-router-redux';

// This root reducer is the base of the application state tree:
// state: {
//   balance: {
//     fetchingBalance: (number)
//     wallets: wallets (array of objects)
//     selecetedWallet: wallet id (string)
//   },
//   login: {
//     isLoggedIn: (bool)
//     isLoggingIn: (bool)
//     username: (string)
//     password: (string)
//     otp: (string)
//   },
//   send: {
//     sendCoins: {
//       success: (bool)
//       sending: (bool)
//     },
//     amount: (number)
//     destinationAddress: (string)
//     otp: (string)
//     password: (string)
//   },
//   router: {
//     ...browserHistory
//   },
// }

export default combineReducers({
  balance,
  login,
  send,
  router,
});

