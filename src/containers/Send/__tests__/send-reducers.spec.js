import {
  sendCoins,
  amount,
  destinationAddress,
  otp,
  password,
} from '../reducers/';
import * as actions from '../send-actions';

describe('Login Reducers behave with passed actions', () => {

  describe('sendCoins', () => {
    it('initial state is { sending: false, success: false }', () => {
      const outcome = sendCoins();
      expect(outcome).toEqual({sending: false, success: false});
    });
    it('returns current state for invalid actions', () => {
      const outcome = sendCoins(undefined, {});
      expect(outcome).toEqual({sending: false, success: false});
    });
    it(`returns passed in object for ${actions.sendCoinsStart().type}`, () => {
      const outcome = sendCoins(undefined, actions.sendCoinsStart());
      expect(outcome).toEqual({sending: true, success: false});
    });
    it(`returns passed in object for ${actions.sendCoinsSuccess().type}`, () => {
      const outcome = sendCoins(undefined, actions.sendCoinsSuccess());
      expect(outcome).toEqual({sending: false, success: true});
    });
    it(`returns passed in object for ${actions.sendCoinsFail().type}`, () => {
      const outcome = sendCoins(undefined, actions.sendCoinsFail());
      expect(outcome).toEqual({sending: false, success: false});
    });
  });

  describe('password', () => {
    it('initial state is { sending: false, success: false }', () => {
      const outcome = password();
      expect(outcome).toEqual('');
    });
    it('returns current state for invalid actions', () => {
      const outcome = password(undefined, {});
      expect(outcome).toEqual('');
    });
    it(`returns passed in object for ${actions.updatePasswordField().type}`, () => {
      const outcome = password(undefined, actions.updatePasswordField('test-password'));
      expect(outcome).toEqual('test-password');
    });
  });

  describe('otp', () => {
    it('initial state is 0000000', () => {
      const outcome = otp();
      expect(outcome).toEqual('0000000');
    });
    it('returns current state for invalid actions', () => {
      const outcome = otp(undefined, {});
      expect(outcome).toEqual('0000000');
    });
    it(`returns passed in object for ${actions.updateOTPField().type}`, () => {
      const outcome = otp(undefined, actions.updateOTPField('test-otp'));
      expect(outcome).toEqual('test-otp');
    });
  });

  describe('destinationAddress', () => {
    it('initial state is an empty string', () => {
      const outcome = destinationAddress();
      expect(outcome).toEqual('');
    });
    it('returns current state for invalid actions', () => {
      const outcome = destinationAddress(undefined, {});
      expect(outcome).toEqual('');
    });
    it(`returns passed in object for ${actions.updateDestinationAddressField().type}`,
    () => {
      const outcome =
        destinationAddress(undefined,
        actions.updateDestinationAddressField('test-destinationAddress'));
      expect(outcome).toEqual('test-destinationAddress');
    });
  });

  describe('amount', () => {
    it('initial state is 0', () => {
      const outcome = amount();
      expect(outcome).toEqual(0);
    });
    it('returns current state for invalid actions', () => {
      const outcome = amount(undefined, {});
      expect(outcome).toEqual(0);
    });
    it(`returns passed in object for ${actions.updateAmountField().type}`, () => {
      const outcome = amount(undefined, actions.updateAmountField(10000));
      expect(outcome).toEqual(10000);
    });
  });
});

