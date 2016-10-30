import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';

import {movePlayer, takeItem, dropItem, decreaseActions, endTurn} from '../actions/index';

require('./Square.css');

const Square = React.createClass({
  render () {
    const {squareData} = this.props,
      {content, active} = squareData;
    return (
      <div
        className={classnames('square', content, {'active': active})}
        onClick={this.getHandler()}>
      </div>
    );
  },
  getHandler () {
    const {row, col, squareData, movesRemaining, heldItem} = this.props;
    const {content, active, item} = squareData;
    if (!active) {
      return () => {};
    }
    if (!movesRemaining) {
      return () => {};
    }
    switch (content) {
      case 'shelf': {
        return this.props.takeItem.bind(null, item)
      }
      case 'goal': {
        return this.props.dropItem.bind(null, heldItem)
      }
      case 'empty':
        return this.props.movePlayer.bind(null, row, col);
      default:
        return () => {};
    }
  }
});

function mapStateToProps (state) {
  return {
    heldItem: state.player.item,
    movesRemaining: state.player.actions,
    game: state.game,
    board: state.board,
    gameId: state.auth.user.gameId
  };
}

function mapDispatchToProps (dispatch) {
  return {
    movePlayer (row, col) {
      dispatch(movePlayer(row, col));
      dispatch(decreaseActions());
    },
    takeItem (item) {
      dispatch(takeItem(item));
    },
    dropItem (item) {
      dispatch(dropItem(item));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Square);
