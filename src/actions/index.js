import {MOVE_PLAYER, TAKE_ITEM, DROP_ITEM} from './types';

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

export const dropItem = (item) => {
  return {
    type: DROP_ITEM,
    payload: item
  };
};