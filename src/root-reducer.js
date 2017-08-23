import { combineReducers } from 'redux';
import balance from './containers/Balance/balance-reducer';
import login from './containers/Login/login-reducer';
import { routerReducer as router } from 'react-router-redux'; // allows us to track/modify browser history by updating redux state

// This root reducer is the base of the application state tree:
// SCHEMA GOES HERE

export default combineReducers({
  balance,
  login,
  router,
});

