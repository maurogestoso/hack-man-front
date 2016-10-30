import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import Sidebar from './Sidebar';
import Friends from './Friends';

const Play = React.createClass({
  render () {
    return (
      <div className='App'>
        <Sidebar />
        <Board />
        <Friends />
      </div>
    );
  }
});

export default Play;
