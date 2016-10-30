import {combineReducers} from 'redux';

import board from './board.reducer'
import player from './player.reducer'
import auth from './auth.reducer';
import game from './game.reducer';

const reducer = combineReducers({
  board, player, auth, game
});

export default reducer;
