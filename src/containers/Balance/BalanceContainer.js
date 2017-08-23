import React from 'react';
import { connect } from 'react-redux';
import Balance from './Balance';
import * as actions from './balance-actions';

class BalanceContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {
      onFetchWallets,
    } = this.props;

    onFetchWallets();
  }
  render() {
    const {
      wallets,
      onFetchWallets,
      onFetchBalance,
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
      dispatch(actions.fetchWallets());
    },
    onFetchBalance: () => {
      dispatch(actions.fetchBalance());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);

