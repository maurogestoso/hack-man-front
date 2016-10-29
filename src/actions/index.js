import {MOVE_PLAYER, TAKE_ITEM} from './types';

export const movePlayer = (row, col) => {
  return {
    type: MOVE_PLAYER,
    payload: {
      row, col
    }
  }
};

export const takeItem = (item) => {
  return {
    type: TAKE_ITEM,
    payload: item
  };
};