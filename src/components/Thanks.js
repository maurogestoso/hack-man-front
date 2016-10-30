import React from 'react';
import {Link} from 'react-router';

const Thanks = React.createClass({
  render () {
    return (
      <div>
        <h2>
          Thanks for playing! Another co-op member will now take their go.
        </h2>
        <h2>
          Come back soon to play again :)
        </h2>
        <Link to='/'>Back home</Link>
      </div>
    );
  }
});

export default Thanks;
