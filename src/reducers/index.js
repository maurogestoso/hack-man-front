import {combineReducers} from 'redux';

import board from './board.reducer'
import player from './player.reducer'
import auth from './auth.reducer';
import game from './game.reducer';
import games from './games.reducer';

const reducer = combineReducers({
  board, player, auth, game, games
});

export default reducer;
