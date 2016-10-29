import React from 'react'

import Row from './Row';

import gridData from './gridData'


const Grid = React.createClass({
  render () {
    return (
      <div>
        <h2>Grid</h2>
        {gridData.map((rowData, i) => {
          return <Row key={i} rowData={rowData} />
        })}
      </div>
    );
  }
});

export default Grid;
