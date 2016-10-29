import {MOVE_PLAYER} from './types';

export const movePlayer = (row, col) => {
  return {
    type: MOVE_PLAYER,
    payload: {
      row, col
    }
  }
};