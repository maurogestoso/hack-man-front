import {MOVE_PLAYER, UPDATE_ACTIVE_SQUARES} from './types';

export const updateActiveSquares = (row, col) => {
  return {
    type: UPDATE_ACTIVE_SQUARES,
    payload: {
      row, col
    }
  };
};

export const movePlayer = (row, col) => {
  return {
    type: MOVE_PLAYER,
    payload: {
      row, col
    }
  }
};