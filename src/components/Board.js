import React from 'react';
import {connect} from 'react-redux';

import Row from './Row';
import Player from './Player';

const Board = React.createClass({
  render () {
    return (
      <div>
        {this.renderBoard()}
        <Player />
      </div>
    );
  },
  renderBoard () {
    const {board} = this.props;
    return board.map((rowData, i) => {
      return <Row key={i} rowData={rowData} />
    });
  }
});

function mapStateToProps ({board}) {
  return {
    board
  };
}

export default connect(mapStateToProps)(Board);
