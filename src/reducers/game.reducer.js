import * as types from '../actions/types';

const initialState = {
  orders: []
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState, {
    orders: [].concat(prevState.orders)
  });

  if (action.type === types.RECEIVE_GAME) {
    newState.orders = action.game.orders;
    newState.playerA = action.game.playerA;
    newState.playerB = action.game.playerB;
    newState.score = action.game.score;
    newState.turn = aciton.game.turn;  
  }

  return newState;
}

export default reducer;
