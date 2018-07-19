import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Contentproduct extends Component {
  render() {
    return (
      <div>

 {/* <!-- Order Details Section--> */}
    <section className="order-details no-padding-top"> 
      <div className="container">
        <div className="row">                         
          <div className="col-lg-6">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Coupon Code</h6>
              </div>
              <div className="block-body">
                <p>If you have a coupon code, please enter it in the box below</p>
                <form action="#">
                  <div className="form-group d-flex">
                    <input type="text" name="coupon"/>
                    <button type="submit" className="cart-black-button">Apply coupon</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Instructions for seller</h6>
              </div>
              <div className="block-body">
                <p>If you have some information for the seller you can leave them in the box below</p>
                <form action="#">
                  <textarea name="instructions"></textarea>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Order Summary</h6>
              </div>
              <div className="block-body">
                <p>Shipping and additional costs are calculated based on values you have entered.</p>
                <ul className="order-menu list-unstyled">
                  <li className="d-flex justify-content-between"><span>Order Subtotal </span><strong>$358.00</strong></li>
                  <li className="d-flex justify-content-between"><span>Shipping and handling</span><strong>$10.00</strong></li>
                  <li className="d-flex justify-content-between"><span>Tax</span><strong>$0.00</strong></li>
                  <li className="d-flex justify-content-between"><span>Total</span><strong className="text-primary price-total">$368.00</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center CTAs">
          <Link to="/checkout1" className="btn btn-template btn-lg wide">Proceed to checkout<i className="fa fa- arrow-right"></i></Link></div>
        </div>
      </div>
    </section>


      </div>

    );
  }
}

export default Contentproduct;
