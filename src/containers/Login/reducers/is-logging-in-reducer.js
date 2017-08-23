import * as types from '../login-action-types';

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

