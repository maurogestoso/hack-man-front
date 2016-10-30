import React from 'react';
import {connect} from 'react-redux';
import {createGame, joinGame} from '../actions';

const Join = React.createClass({
  createGame () {
    this.props.createGame(this.props.player);
  },
  renderJoinGame () {
    return (<div>
      <h3>There are no games available to join.</h3>
      <h3 onClick={this.createGame}>Click to create a new one!</h3>
    </div>)
  },
  joinGame (gameIndex) {
    this.props.joinGame(this.props.player, this.props.games[gameIndex]._id);
  },
  renderAvailable () {
    return (
      <div>
        <h2>You aren't currently in a game. Play with co-op members:</h2>
        {this.props.games.map((game, i) => {
          return (
            <div key={i}>
              <p onClick={this.joinGame.bind(null, i)}>Play with {game.playerA}</p>
            </div>
          );
        })}
      </div>
    );
  },
  render () {
    return (
      <div>
        {this.props.games.length === 0 && this.renderJoinGame()}
        {this.props.games.length && this.renderAvailable()}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
    player: state.auth.user.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (player) => {
      dispatch(createGame(player));
    },
    joinGame: (player, id) => {
      dispatch(joinGame(player, id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Join);
