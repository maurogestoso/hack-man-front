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

export const addGameToUser = (gameId) => {
  return {
    type: types.ADD_GAME_TO_USER,
    gameId
  }
}

export const joinGame = (player, gameId) => {
  return (dispatch) => {
    return axios.post(`${LOCAL_API}/api/games/join`, {playerB: player, gameId})
      .then(req => {
        dispatch(receiveGame(req.data));
        dispatch(addGameToUser(gameId));
        browserHistory.push('/play');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const createGame = (player) => {
  return (dispatch) => {
    return axios.post(`${LOCAL_API}/api/games/new`, {player})
      .then(req => {
        dispatch(receiveGame(req.data));
        browserHistory.push('/play');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    return axios.post(`${LOCAL_API}/api/users/${user.username}`, user)
      .then(req => {
        dispatch(receiveUser(req.data));
        dispatch(fetchAvailableGames());
        dispatch({type: types.RESET_PLAYER});
        browserHistory.push('/join');
      })
      .catch(err => {
        console.log(err);
      });
  }
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
        dispatch({type: types.RESET_PLAYER});
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

export const endGame = (gameId, username) => {
  return (dispatch) => {
    dispatch({type: types.DELETE_GAME_REQUEST});
    return axios.delete(`${LOCAL_API}/api/games/${gameId}`)
      .then(({data}) => {
        dispatch({type: types.DELETE_GAME_SUCCESS, payload: data});
        dispatch(fetchUserProfile(username));
      })
      .catch(({err}) => {
        dispatch({type: types.DELETE_GAME_ERROR, payload: err});
      });
  }
};

export const forceEndGame = () => {
  return {type: types.FORCE_END_GAME};
};

export const fetchUserProfile = (username) => {
  return (dispatch) => {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&', username);
    return axios.get(`${LOCAL_API}/api/users/${username}`)
      .then(({data}) => {
        console.log(data);
        dispatch(receiveUser(data));
      })
      .catch(({error}) => {
        console.log(error);
      });
  }
}
