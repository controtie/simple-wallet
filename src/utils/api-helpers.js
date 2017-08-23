// Fetch Response util handlers
export const isValidStatusCode = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

export const toJSON = (response) => {
  return response.json();
};

// Payloads
export const makePostOptions = (options) => {
  const defaultOptions = {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  return Object.assign({}, defaultOptions, options);
};

// Data handling checks
export const isValidLogin = (login) => {
  return !!login.username && !!login.password && !!login.otp;
};


