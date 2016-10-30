import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Signin = React.createClass({
  getInitialState () {
    return {
      username: ''
    }
  },
  updateState (e) {
    this.setState({
      username: e.target.value
    });
  },
  signIn (e) {
    e.preventDefault();
    this.props.signIn(this.state.username);
  },
  render () {
    return (
      <div>
        <form onSubmit={this.signIn}>
          <input type='text' onChange={this.updateState} />
          <button type='submit'>
            Play!
          </button>
        </form>
      </div>
    );
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (username) => {
      dispatch(actions.signIn(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(Signin);
