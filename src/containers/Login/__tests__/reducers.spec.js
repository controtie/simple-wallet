import {
  isLoggedIn,
  isLoggingIn,
  otp,
  password,
  username,
} from '../reducers/';
import * as actions from '../login-actions';

describe('Login Reducers behave with passed actions', () => {
  describe('is-logged-in-reducer', () => {
    it('initial state is false', () => {
      const outcome = isLoggedIn();
      expect(outcome).toEqual.true;
    });
    it('returns current state for invalid actions', () => {
      const outcome = isLoggedIn(undefined, {});
      expect(outcome).toEqual.true;
    });
    it(`returns true for ${actions.isLoggedIn()}`, () => {
      const outcome = isLoggedIn(undefined, actions.isLoggedIn());
      expect(outcome).toEqual.true;
    });
    it(`returns false for ${actions.isNotLoggedIn()}`, () => {
      const outcome = isLoggedIn(undefined, actions.isNotLoggedIn());
      expect(outcome).toEqual.false;
    });
  });

  describe('logging-in-reducer', () => {
    it('initial state is false', () => {
      const outcome = isLoggingIn();
      expect(outcome).toEqual.true;
    });
    it('returns current state for invalid actions', () => {
      const outcome = isLoggingIn(undefined, {});
      expect(outcome).toEqual.true;
    });
    it(`returns true for ${actions.isLoggedIn()}`, () => {
      const outcome = isLoggingIn(undefined, actions.loggingIn());
      expect(outcome).toEqual.true;
    });
    it(`returns false for ${actions.isNotLoggedIn()}`, () => {
      const outcome = isLoggingIn(undefined, actions.notLoggingIn());
      expect(outcome).toEqual.false;
    });
  });

  describe('username', () => {
    it('initial state is an empty string', () => {
      const outcome = username();
      expect(outcome).toBe('');
    });
    it('returns current state for invalid actions', () => {
      const outcome = username(undefined, {});
      expect(outcome).toBe('');
    });
    it(`returns true for ${actions.isLoggedIn()}`, () => {
      const outcome = username(undefined, actions.updateUsernameField('test name'));
      expect(outcome).toBe('test name');
    });
  });

  describe('password', () => {
    it('initial state is an empty string', () => {
      const outcome = password();
      expect(outcome).toBe('');
    });
    it('returns current state for invalid actions', () => {
      const outcome = password(undefined, {});
      expect(outcome).toBe('');
    });
    it(`returns true for ${actions.isLoggedIn()}`, () => {
      const outcome = password(undefined, actions.updatePasswordField('test pass'));
      expect(outcome).toBe('test pass');
    });
  });

  describe('otp', () => {
    it('initial state is \'0000000\'', () => {
      const outcome = otp();
      expect(outcome).toBe('0000000');
    });
    it('returns current state for invalid actions', () => {
      const outcome = otp(undefined, {});
      expect(outcome).toBe('0000000');
    });
    it(`returns true for ${actions.isLoggedIn()}`, () => {
      const outcome = otp(undefined, actions.updateOTPField('1234567'));
      expect(outcome).toBe('1234567');
    });
  });
});





