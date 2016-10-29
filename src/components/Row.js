import React from 'react';

import Square from './Square';

const styles = {
  row: {

  }
};

const Row = React.createClass({
  render () {
    return (
      <div style={styles.row}>
        {this.props.rowData.map((squareData, i) => {
          return <Square key={i} squareData={squareData} />
        })}
      </div>
    );
  }
});

export default Row;
