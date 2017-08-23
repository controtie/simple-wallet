export default (state) => {
  const {
    login: {
      username,
      password,
      otp,
    } = {},
  } = state;

  return {
    username,
    password,
    otp,
  };
};

