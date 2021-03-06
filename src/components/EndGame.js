import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {endGame} from '../actions/index';
import './EndGame.css'

const EndGame = React.createClass({
  componentWillMount () {
    this.props.endGame(this.props.gameId, this.props.username);
  },
  render () {
    return (
      <div>
        <h1>End Game</h1>
        <h2>People you've met so far:</h2>
        <div className='friends-list'>
          {this.props.friends.map((friend) => {
            return (
              <div className='friend'>
                <h4>{friend.name}</h4>
                <p>Age: {friend.age}</p>
                <p>Interests: {friend.interests}</p>
              </div>
            )
          })}
        </div>
        <Link to='/'>Back</Link>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    gameId: state.auth.user.gameId,
    username: state.auth.user.username,
    friends: state.auth.user.friends
  };
}

function mapDispatchToProps (dispatch) {
  return {
    endGame (gameId, username) {
      dispatch(endGame(gameId, username));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
