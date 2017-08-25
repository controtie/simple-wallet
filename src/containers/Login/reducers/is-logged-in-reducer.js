import * as types from '../login-action-types';

// this reducer will be true if User is logged in
// this is specific to the client. The user may have a valid
// session but this could be false if the user refreshes the app
// while logged in.
// Used to display <RedirectToLogin /> components
const isLoggedIn = (state = false, action = {}) => {
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

