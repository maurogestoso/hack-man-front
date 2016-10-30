import React from 'react';
import {connect} from 'react-redux';

const Friends = React.createClass({
  renderFriends (friends) {
    return (
      <div>
       {friends.map(friend => {
         return (<span>{friend.name}</span>)
       })}
      </div>
    );
  },
  render () {
    return (
      <div>
        <h3>You have met {this.props.friends.length} out of 13 people who shop at this store and play this game.</h3>
        {this.props.friends.length && <h2>You've met:</h2>}
        {this.renderFriends(this.props.friends)}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    friends: state.auth.user.friends || []
  };
};

export default connect(mapStateToProps)(Friends);
