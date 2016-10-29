import React from 'react';

import Board from './components/Board';
import Sidebar from './components/Sidebar';

const App = React.createClass({
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <Board />
      </div>
    );
  }
});

export default App;
