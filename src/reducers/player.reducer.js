import {MOVE_PLAYER, TAKE_ITEM, DROP_ITEM, DECREASE_ACTIONS} from '../actions/types';

const initialState = {
  id: '001',
  row: 0,
  col: 0,
  item: '',
  actions: 15
};

const players = (prevState = initialState, action) => {
  switch (action.type) {
    case (MOVE_PLAYER): {
      const {row, col} = action.payload;
      return Object.assign({}, prevState, {
        row, col
      });
    }
    case (TAKE_ITEM): {
      return Object.assign({}, prevState, {
        item: action.payload
      });
    }
    case (DROP_ITEM): {
      return Object.assign({}, prevState, {
        item: undefined
      });
    }
    case (DECREASE_ACTIONS): {
      return Object.assign({}, prevState, {
        actions: prevState.actions - 1
      });
    }
    default:
      return prevState;
  }
};

export default players;
