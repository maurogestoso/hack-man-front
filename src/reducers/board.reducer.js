import initialBoard from './boardData';

import {MOVE_PLAYER} from '../actions/types';

const board = (prevBoard = initialBoard, action) => {
  switch (action.type) {
    case (MOVE_PLAYER): {
      const newBoard = prevBoard.map((rowData) => {
        return rowData.map((squareData) => {
          return Object.assign({}, squareData, {
            active: false,
            content: squareData.content === 'playerA' ? 'empty' : squareData.content
          });
        });
      });
      [
        {row: -1, col: 0},
        {row: 1, col: 0},
        {row: 0, col: -1},
        {row: 0, col: 1}
      ].forEach(mod => {
        const currRow = action.payload.row + mod.row;
        const currCol = action.payload.col + mod.col;
        if((currRow >= 0 && currRow < prevBoard.length) &&
          (currCol >= 0 && currCol < prevBoard.length)) {
          newBoard[currRow][currCol].active = newBoard[currRow][currCol].content !== 'playerB';
        }
      });
      newBoard[action.payload.row][action.payload.col].content = 'playerA';
      return newBoard;
    }
    default:
      return prevBoard;
  }

};

export default board;