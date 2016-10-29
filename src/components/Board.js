import React from 'react';
import {connect} from 'react-redux';

import Row from './Row';

const Board = React.createClass({
  render () {
    return (
      <div className='board'>
        {this.renderBoard()}
      </div>
    );
  },
  renderBoard () {
    const {board} = this.props;
    return board.map((rowData, i) => {
      return <Row key={i} row={i} rowData={rowData} />
    });
  }
});

function mapStateToProps ({board}) {
  return {
    board
  };
}

export default connect(mapStateToProps)(Board);
