import axios from 'axios';
import { browserHistory } from 'react-router';
import { LOCAL_API } from '../../config';
import * as types from './types';

export const movePlayer = (row, col) => {
  return {
    type: types.MOVE_PLAYER,
    payload: {
      row, col
    }
  }
};

export const takeItem = (item) => {
  return {
    type: types.TAKE_ITEM,
    payload: item
  };
};

export const dropItem = (item) => {
  return {
    type: types.DROP_ITEM,
    payload: item
  };
};

export const decreaseActions = () => {
  return {
    type: types.DECREASE_ACTIONS
  }
};

export const requestUser = () => {
  return {
    type: types.REQUEST_USER
  };
};

export const receiveUser = (user) => {
  return {
    type: types.RECEIVE_USER,
    user
  };
};

export const signInError = (err) => {
  return {
    type: types.SIGN_IN_ERROR,
    err
  };
};

export const receiveGame = (game) => {
  return {
    type: types.RECEIVE_GAME,
    game
  };
};

export const requestGame = () => {
  return {
    type: types.REQUEST_GAME
  }
};

export const fetchGameError = (err) => {
  return {
    type: types.FETCH_GAME_ERROR,
    err
  };
};

export const requestGames = () => {
  return {
    type: types.REQUEST_GAMES
  };
};

export const receiveGames = (games) => {
  return {
    type: types.RECEIVE_GAMES,
    games
  };
};

export const receiveGamesError = (err) => {
  return {
    type: types.RECEIVE_GAMES_ERROR,
    err
  };
};

export const fetchAvailableGames = () => {
  return (dispatch) => {
    dispatch(requestGames());
    return axios.get(`${LOCAL_API}/api/games/available`)
      .then(res => {
        dispatch(receiveGames(res.data));
        browserHistory.push('/join');
      })
      .catch(err => {
        dispatch(receiveGamesError(err));
      });
  };
};

export const fetchGame = (gameId, username) => {
  return (dispatch) => {
    dispatch(requestGame());
    return axios.get(`${LOCAL_API}/api/games/${gameId}`)
      .then(res => {
        dispatch(receiveGame(res.data));
        if (!res.data.playerB) {
          browserHistory.push('/waiting');
        } else if (res.data[res.data.turn] !== username) {
          browserHistory.push('/notyourturn');
        } else {
          const position = {};
          console.log(res.data.board);
          res.data.board.forEach((row, i) => {
            row.forEach((cell, j) => {
              if (res.data.board[i][j].content === 'currentPlayer') {
                position.row = i;
                position.col = j;
              }
            });
          });
          dispatch(movePlayer(position.row, position.col));
          browserHistory.push('/play');
        }
      })
      .catch(err => {
        dispatch(fetchGameError(err));
      });
  };
};

export const signIn = (username) => {
  return (dispatch) => {
    dispatch(requestUser());
    const url = `${LOCAL_API}/api/users/${username}`;
    return axios.get(url)
      .then(res => {
        dispatch(receiveUser(res.data));
        if (res.data.gameId) {
          dispatch(fetchGame(res.data.gameId, username));
        }
        else {
          dispatch(fetchAvailableGames());
        }
      })
      .catch(err => {
        dispatch(signInError(err));
      });
  }
};

export const endTurn = (game, gameId) => {
  return (dispatch) => {
    const url = `${LOCAL_API}/api/games/update`;
    return axios.post(url, {
      gameId,
      game
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
