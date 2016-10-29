import {combineReducers} from 'redux';

import board from './board.reducer'
import player from './player.reducer'

const reducer = combineReducers({
  board, player
});

export default reducer;