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
        <h3>You have collected {this.props.friends.length} friends</h3>
        {this.renderFriends(this.props.friends)}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    friends: state.auth.user.friends
  };
};

export default connect(mapStateToProps)(Friends);
