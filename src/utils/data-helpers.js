export const toBTC = (satoshis = 0) => {
  return satoshis * 0.00000001;
};

export const trimBalance = (bitcoin = 0) => {
  return bitcoin.toString().slice(0, 10);
};

export const getSpendablePermission = (permissions) => {
  return permissions.indexOf('spend') !== -1;
};

