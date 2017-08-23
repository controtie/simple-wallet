import * as types from '../login-action-types';

const username = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_USERNAME:
      return action.username;
    default:
      return state;
  }
};

export default username;

