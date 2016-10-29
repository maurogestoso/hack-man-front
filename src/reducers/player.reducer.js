import {MOVE_PLAYER} from '../actions/types';

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
    default:
      return prevState;
  }
};

export default players;