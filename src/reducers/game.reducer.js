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
    newState.turn = action.game.turn;
  } else if (action.type === types.DROP_ITEM) {
    const newOrders = prevState.orders;
    for (var i = 0; i < prevState.orders.length; i++) {
      const order = prevState.orders[i].slice(0);
      const targetIndex = order.indexOf(action.payload);
      if (targetIndex !== -1) {
        order.splice(targetIndex, 1);
        newOrders[i] = order;
        break;
      }
    }
    newState.orders = newOrders;
  } else if (action.type === types.FORCE_END_GAME) {
    newState.orders = [];
  }
  return newState;
}

export default reducer;
