import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Signin = React.createClass({
  getInitialState () {
    return {
      username: ''
    }
  },
  updateUsername (e) {
    this.setState({
      username: e.target.value
    });
  },
  updateAge (e) {
    this.setState({
      age: e.target.value
    });
  },
  updateName (e) {
    this.setState({
      name: e.target.value
    });
  },
  updateInterests (e) {
    this.setState({
      interests: e.target.value
    });
  },
  signIn (e) {
    e.preventDefault();
    this.props.signIn(this.state.username);
  },
  signUp (e) {
    e.preventDefault();
    this.props.signUp(this.state);
  },
  render () {
    return (
      <div>
        <h3>Already played before?</h3>
        <form onSubmit={this.signIn}>
          <label>username</label>
          <input type='text' onChange={this.updateUsername} />
          <button type='submit'>
            Continue game!
          </button>
        </form>
        <h3>New?</h3>
        <form onSubmit={this.signUp}>
          <label>username</label>
          <input type='text' onChange={this.updateUsername} />
          <label>name</label>
          <input type='text' onChange={this.updateName} />
          <label>interests</label>
          <input type='text' onChange={this.updateInterests} />
          <label>age</label>
          <input type='text' onChange={this.updateAge} />
          <button type='submit'>
            Let's go!
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
    },
    signUp: (user) => {
      dispatch(actions.signUp(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(Signin);
