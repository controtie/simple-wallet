import {
  wallets,
} from '../reducers/';
import * as actions from '../balance-actions';
describe('Login Reducers behave with passed actions', () => {

  describe('wallets', () => {
    it('initial state is an empty object', () => {
      const outcome = wallets();
      expect(outcome).toEqual({});
    });
    it('returns current state for invalid actions', () => {
      const outcome = wallets(undefined, {});
      expect(outcome).toEqual({});
    });
    it(`returns passed in object for ${actions.fetchWallets().type}`, () => {
      const testWallet = { id: 'abc1234' };
      const outcome = wallets(undefined, actions.fetchWallets(testWallet));
      expect(outcome).toEqual(testWallet);
    });
  });
});

