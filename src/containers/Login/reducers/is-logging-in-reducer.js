import * as types from '../login-action-types';

// This will be true if User is logging in
// (i.e. waiting for login api call  response)
// Used to control a loading spinner
const isLoggingIn = (state = false, action = {}) => {
  switch (action.type) {
    case types.LOGGING_IN_TRUE:
      return true;
    case types.LOGGING_IN_FALSE:
      return false;
    default:
      return state;
  }
};

export default isLoggingIn;

