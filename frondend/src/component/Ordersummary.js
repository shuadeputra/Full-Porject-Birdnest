import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Ordersummary extends Component {
  render() {
    return (

          <div className="col-lg-4">
            <div className="block-body order-summary">
              <h6 className="text-uppercase">Order Summary</h6>
              <p>Shipping and additional costs are calculated based on values you have entered</p>
              <ul className="order-menu list-unstyled">
                <li className="d-flex justify-content-between"><span>Order Subtotal </span><strong>$390.00</strong></li>
                <li className="d-flex justify-content-between"><span>Shipping and handling</span><strong>$10.00</strong></li>
                <li className="d-flex justify-content-between"><span>Tax</span><strong>$0.00</strong></li>
                <li className="d-flex justify-content-between"><span>Total</span><strong className="text-primary price-total">$400.00</strong></li>
              </ul>
            </div>
          </div>

    );
  }
}

export default Ordersummary;
