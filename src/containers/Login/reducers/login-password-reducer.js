import * as types from '../login-action-types';

// This piece of state corresponds to the password field on the login page form.
// Used to login User and access their wallets
const password = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_PASSWORD:
      return action.password;
    default:
      return state;
  }
};

export default password;

