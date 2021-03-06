import {MOVE_PLAYER, TAKE_ITEM, DROP_ITEM, DECREASE_ACTIONS, RESET_PLAYER} from '../actions/types';

const initialState = {
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
    case (RESET_PLAYER): {
      return Object.assign({}, prevState, {
        actions: 15
      });
    }
    default:
      return prevState;
  }
};

export default players;
