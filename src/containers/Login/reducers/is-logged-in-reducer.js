import * as types from '../login-action-types';

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return true;
    case types.NOT_LOGGED_IN:
      return false;
    default:
      return state;
  }
};

export default isLoggedIn;

