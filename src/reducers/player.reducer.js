import {MOVE_PLAYER, TAKE_ITEM} from '../actions/types';

const initialState = {
  id: '001',
  row: 0,
  col: 0,
  item: ''
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
    default:
      return prevState;
  }
};

export default players;