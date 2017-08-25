import * as types from '../login-action-types';

// This piece of state corresponds to the username field on the login page form.
// Used to login User and access their wallets
// Username takes the form of an email address
const username = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_USERNAME:
      return action.username;
    default:
      return state;
  }
};

export default username;

