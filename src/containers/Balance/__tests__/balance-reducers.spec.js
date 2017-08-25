import {
  fetchingBalance,
  selectedWallet,
  wallets,
} from '../reducers/';
import * as actions from '../balance-actions';
describe('Login Reducers behave with passed actions', () => {

  describe('wallets', () => {
    it('initial state is an empty array', () => {
      const outcome = wallets();
      expect(outcome).toEqual([]);
    });
    it('returns current state for invalid actions', () => {
      const outcome = wallets(undefined, {});
      expect(outcome).toEqual([]);
    });
    it(`returns passed in object for ${actions.updateWallets().type}`, () => {
      const testWallet = [{ id: 'abc1234' }];
      const outcome = wallets(undefined, actions.updateWallets(testWallet));
      expect(outcome).toEqual(testWallet);
    });
  });

  describe('selectedWallet', () => {
    it('initial state is an empty string', () => {
      const outcome = selectedWallet();
      expect(outcome).toBe('');
    });
    it('returns current state for invalid actions', () => {
      const outcome = selectedWallet(undefined, '');
      expect(outcome).toEqual('');
    });
    it(`returns passed in object for ${actions.selectWallet().type}`, () => {
      const testWallet = 'test-wallet-id'
      const outcome = selectedWallet(undefined, actions.selectWallet(testWallet));
      expect(outcome).toEqual(testWallet);
    });
  });

  describe('selectedWallet', () => {
    it('initial state is false', () => {
      const outcome = fetchingBalance();
      expect(outcome).toBe(false);
    });
    it('returns current state for invalid actions', () => {
      const outcome = fetchingBalance(undefined, {});
      expect(outcome).toEqual(false);
    });
    it(`returns true for ${actions.fetchingBalanceStart().type}`, () => {
      const outcome = fetchingBalance(undefined, actions.fetchingBalanceStart());
      expect(outcome).toBe(true);
    });
    it(`returns true for ${actions.fetchingBalanceSuccess().type}`, () => {
      const outcome = fetchingBalance(undefined, actions.fetchingBalanceSuccess());
      expect(outcome).toBe(false);
    });
    it(`returns true for ${actions.fetchingBalanceFail().type}`, () => {
      const outcome = fetchingBalance(undefined, actions.fetchingBalanceFail());
      expect(outcome).toBe(false);
    });
  });
});

