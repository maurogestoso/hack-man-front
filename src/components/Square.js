import React from 'react'
import classnames from 'classnames'

require('./Square.css');

const styles = {
  square: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: '1px solid black'
  }
};

const Square = React.createClass({
  render () {
    const {content} = this.props.squareData;
    return (
      <div style={styles.square} className={classnames(content, 'square')}></div>
    );
  }
});

export default Square;
