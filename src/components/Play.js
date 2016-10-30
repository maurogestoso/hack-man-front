import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import Sidebar from './Sidebar';

const Play = React.createClass({
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <Board />
      </div>
    );
  }
});

export default Play;
