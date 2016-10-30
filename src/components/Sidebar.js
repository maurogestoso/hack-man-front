import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {endTurn, forceEndGame, endGame} from '../actions';

import OrdersList from './OrdersList';

function swapPlayers (board) {
  return board.map(row => {
    return row.map(cell => {
      if (cell.content === 'currentPlayer') {
        return {content: 'otherPlayer', active: false};
      }
      if (cell.content === 'otherPlayer') {
        return {content: 'currentPlayer', active: false};
      }
      return cell;
    });
  });
}

const Sidebar = React.createClass({
  componentWillReceiveProps (next) {
    const {game, board, gameId} = this.props;
    if (!next.actions) {
      browserHistory.push('/thanks');
      const turn = game.turn === 'playerA' ? 'playerB' : 'playerA';
      const turnsTaken = game.turnsTaken ? ++game.turnsTaken : 1;
      const newBoard = swapPlayers(board);
      const gameData = Object.assign(game, {board: newBoard, turn, turnsTaken});
      this.props.endTurn(gameData, gameId);
    } else if (!next.game.orders.length) {
      browserHistory.push('/endgame');
    }
  },
  render () {
    const otherPlayer = this.props.game.playerA === this.props.currentPlayer ? this.props.game.playerB : this.props.game.playerA;
    return (
      <div className='sidebar'>
        <h3>Hello, {this.props.currentPlayer}.
        {otherPlayer && 'You are currently playing with co-op member ' + otherPlayer}
        {!otherPlayer && 'You don\'t have a teammate yet, but one will join you soon.'}
        </h3>
        <h3>Actions: {this.props.actions} / 15</h3>
        <h3>Holding: {this.props.item || 'Nothing'}</h3>
        <OrdersList data={this.props.game.orders}/>
        <button onClick={this.forceEndGame}>Force End Game</button>
      </div>
    );
  },
  forceEndGame () {
    browserHistory.push('/endgame');
  }
});

function mapStateToProps (state) {
  return {
    item: state.player.item,
    actions: state.player.actions,
    game: state.game,
    board: state.board,
    gameId: state.auth.user.gameId,
    currentPlayer: state.auth.user.username
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    endTurn (gameData, gameId) {
      dispatch(endTurn(gameData, gameId));
    },
    endGame () {
      dispatch(endGame(ownProps.gameId))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
