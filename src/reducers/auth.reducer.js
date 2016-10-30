import * as types from '../actions/types';

const initialState = {
  signedIn: false,
  user: null,
  signingIn: false,
  needsGame: undefined,
  signinError: null
};

const reducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  if (action.type === types.REQUEST_SIGN_IN) {
    newState.signingIn = true;
  }

  if (action.type === types.NEED_GAME) {
    newState.needsGame = true;
  }

  if (action.type === types.RECEIVE_USER) {
    newState.signingIn = false;
    newState.signedIn = true;
    newState.user = action.user;
  }

  if (action.type === types.SIGN_IN_ERROR) {
    newState.signingIn = false;
    newState.signinError = action.err;
  }

  return newState;
};

export default reducer;
