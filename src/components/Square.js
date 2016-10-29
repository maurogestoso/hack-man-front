import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';

import {movePlayer, takeItem, dropItem} from '../actions/index';

require('./Square.css');

const Square = React.createClass({
  render () {
    const {squareData} = this.props,
      {content, active} = squareData;
    return (
      <div
        className={classnames('square', content, {'active': active})}
        onClick={this.getHandler()}
      />
    );
  },
  getHandler () {
    const {row, col, squareData} = this.props;
    const {content, active, item} = squareData;
    if (!active) {
      return () => {};
    }
    switch (content) {
      case 'shelf': {
        return this.props.takeItem.bind(null, item)
      }
      case 'goal': {
        return this.props.dropItem.bind(null, item)
      }
      case 'empty':
        return this.props.movePlayer.bind(null, row, col);
      default:
        return () => {};
    }
  }
});

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    movePlayer (row, col) {
      dispatch(movePlayer(row, col));
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
