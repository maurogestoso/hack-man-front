import * as types from '../actions/types';

const initialState = {
  games: []
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.RECEIVE_GAMES) {
    newState.games = action.games;
  }
  return newState;
}

export default reducer;
