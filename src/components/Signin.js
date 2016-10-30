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
      <div className="signin-container">
        <div className="already-played-container">
          <h3 className="played-before-title">Already played before?</h3>
          <form onSubmit={this.signIn}>
            <input type='text' onChange={this.updateUsername} placeholder="Username" />
            <button className="signin-button continue-game" type='submit'>
              Continue game!
            </button>
          </form>
        </div>



        <div className="new-container">
          <h3 className="new-title">New?</h3>
          <form onSubmit={this.signUp}>

            <input type='text' onChange={this.updateUsername} placeholder="Username"/> <br />

            <input placeholder="Name" type='text' onChange={this.updateName} /> <br />

            <input placeholder="Interests" type='text' onChange={this.updateInterests} /> <br />

            <input placeholder="Age" type='text' onChange={this.updateAge} /> <br />
            <button className="signin-button lets-go" type='submit'>
              Let's go!
            </button>
          </form>
        </div>


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
