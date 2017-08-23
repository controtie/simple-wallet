import React from 'react';
import { connect } from 'react-redux';
import Balance from './Balance';
import * as actions from './balance-actions';

class BalanceContainer extends React.Component {

  componentDidMount() {
    const {
      onFetchWallets,
      onFetchBalance,
    } = this.props;

    onFetchWallets()
    .then(() => {
      onFetchBalance();
    })
    .catch(() => {
      console.log('FetchWallets failed');
    });
  }
  render() {
    const {
      wallets,
    } = this.props;
    return (
      <Balance
        wallets={wallets} />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    balance: {
      wallets,
    } = {},
  } = state;
  return {
    wallets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchWallets: () => {
      return dispatch(actions.fetchWallets());
    },
    onFetchBalance: () => {
      return dispatch(actions.fetchBalance());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);

