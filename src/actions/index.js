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

export const fetchGame = (gameId) => {
  return (dispatch) => {
    dispatch(requestGame());
    return axios.get(`${LOCAL_API}/api/games/${gameId}`)
      .then(res => {
        dispatch(receiveGame(res.data));
        if (!res.data.playerB) {
          browserHistory.push('/waiting');
        } else {
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
          dispatch(fetchGame(res.data.gameId));
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
