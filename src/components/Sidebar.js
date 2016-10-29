import React from 'react';
import {connect} from 'react-redux';

const Sidebar = React.createClass({
  render () {
    return (
      <div className='sidebar'>
        <h3>Holding: {this.props.item || 'Nothing'}</h3>
      </div>
    );
  },
});

function mapStateToProps ({player}) {
  return {
    item: player.item
  };
}

export default connect(mapStateToProps)(Sidebar);
