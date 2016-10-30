import React from 'react';
import {Link} from 'react-router';

const NotYourTurn = React.createClass({
  render () {
    return (
      <div>
        <h1>It's not your turn yet! Come back soon!</h1>
        <Link to='/'>Back home</Link>
      </div>
    )
  }
});

export default NotYourTurn;
