import React from 'react';

import './OrdersList.css';

const Order = React.createClass({
  render () {
    return (
      <div className='order'>
        <h4>Order {this.props.i + 1}</h4>
        <ul>
          {this.props.data.map((item, i) => {
            return (
              <li key={i}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
});

const OrdersList = React.createClass({
  render () {
    return (
      <div className='orders-list'>
        {this.props.data.map((order, i) => {
          return order.length ? (<Order key={i} i={i} data={order}/>) : null;
        })}
      </div>);
  }
});

export default OrdersList;