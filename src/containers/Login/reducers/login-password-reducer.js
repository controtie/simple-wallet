import * as types from '../login-action-types';

const password = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_UPDATE_PASSWORD:
      return action.password;
    default:
      return state;
  }
};

export default password;

