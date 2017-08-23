import {
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
});

