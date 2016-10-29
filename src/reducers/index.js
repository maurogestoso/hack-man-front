import {combineReducers} from 'redux';

import board from './board.reducer'

const reducer = combineReducers({
  board
});

export default reducer;