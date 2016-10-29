import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';

import {movePlayer} from '../actions/index';

require('./Square.css');

const Square = React.createClass({
  render () {
    const {isPlayerHere, squareData} = this.props,
      {content, active} = squareData;
    return (
      <div
        className={classnames('square', content, {'active': active})}
        onClick={this.getHandler()}
      >
        {isPlayerHere && <div className='player' />}
      </div>
    );
  },
  getHandler () {
    const {row, col, squareData} = this.props;
    const {content, active} = squareData;
    if (!active) {
      return () => {};
    }
    switch (content) {
      case undefined:
        return this.props.movePlayer.bind(null, row, col);
      default:
        return () => {};
    }
  }
});

function mapStateToProps ({player}, ownProps) {
  const isPlayerHere = player.row === ownProps.row &&
      player.col === ownProps.col;
  return {
    isPlayerHere
  };
}

function mapDispatchToProps (dispatch) {
  return {
    movePlayer (row, col) {
      dispatch(movePlayer(row, col));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Square);
