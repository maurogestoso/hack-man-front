import React from 'react';

const styles = {
  player: {
    borderRadius: '50%',
    backgroundColor: 'tomato',
    width: '30px',
    height: '30px'
  }
};

const Player = React.createClass({
  render () {
    return (
      <div style={styles.player} className='player'></div>
    );
  }
});

export default Player;
