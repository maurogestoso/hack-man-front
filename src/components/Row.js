import React from 'react';

import Square from './Square';

const Row = React.createClass({
  render () {
    return (
      <div className='row'>
        {this.renderSquares()}
      </div>
    );
  },
  renderSquares () {
    return this.props.rowData.map((squareData, i) => {
      const row = this.props.row, col = i;
      return <Square
        key={i}
        col={col}
        row={row}
        squareData={squareData}
      />
    });
  }
});


export default Row;
