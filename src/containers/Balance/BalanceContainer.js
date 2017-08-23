import { connect } from 'react-redux';
import Balance from './Balance';
import * as actions from './balance-actions';

const mapStateToProps = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
    balance: {
      wallets,
    } = {},
  } = state;
  return {
    isLoggedIn,
    wallets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchWallets: () => {
      dispatch(actions.fetchWallets());
    },
    onFetchBalance: () => {
      dispatch(actions.fetchBalance());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);

