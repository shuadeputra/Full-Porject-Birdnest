import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordersummary from './Ordersummary';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link} from 'react-router-dom'

class Checkout1 extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  <Herosectioncheckout/>


    {/* <!-- Checkout Forms--> */}
    <section className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nav nav-pills">
              <li className="nav-item"><a href="checkout1.html" className="nav-link active">Address</a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Delivery Method </a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Payment Method </a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="address" className="active tab-block">
                <form action="#">

      {/* <!-- Invoice Address--> */}
                  <div className="block-header mb-5">
                    <h6>Invoice address</h6>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="firstname" className="form-label">First Name</label>
                      <input id="firstname" type="text" name="first-name" placeholder="Enter you first name" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="lastname" className="form-label">Last Name</label>
                      <input id="lastname" type="text" name="last-name" placeholder="Enter your last name" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="email" className="form-label">Email Address</label>
                      <input id="email" type="email" name="email" placeholder="enter your email address" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="street" className="form-label">Street</label>
                      <input id="street" type="text" name="address" placeholder="Your street name" className="form-control"/>
                    </div>
                    <div className="form-group col-md-3">
                      <label for="city" className="form-label">City</label>
                      <input id="city" type="text" name="city" placeholder="Your city" className="form-control"/>
                    </div>
                    <div className="form-group col-md-3">
                      <label for="zip" className="form-label">ZIP</label>
                      <input id="zip" type="text" name="zip" placeholder="ZIP code" className="form-control"/>
                    </div>
                    <div className="form-group col-md-3">
                      <label for="state" className="form-label">State</label>
                      <input id="state" type="text" name="state" placeholder="Your state" className="form-control"/>
                    </div>
                    <div className="form-group col-md-3">
                      <label for="country" className="form-label">Country</label>
                      <input id="country" type="text" name="country" placeholder="Your country" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="phone-number" className="form-label">Phone Number</label>
                      <input id="phone-number" type="tel" name="phone-number" placeholder="Your phone number" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="company" className="form-label">Company</label>
                      <input id="company" type="text" name="company" placeholder="Your company name" className="form-control"/>
                    </div>
                    <div className="form-group col-12 mt-3 ml-3">
                      <input id="another-address" type="checkbox" className="checkbox"/>
                      <label for="another-address" data-toggle="collapse" data-target="#shippingAddress" aria-expanded="false" aria-controls="shippingAddress">Use different shipping address</label>
                    </div>
                  </div>

        {/* <!-- /Invoice Address-->
        <!-- Shippping Address--> */}
                  <div id="shippingAddress" aria-expanded="false" className="collapse">
                    <div className="block-header mb-5 mt-3">
                      <h6>Shipping address</h6>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label for="shipping_firstname" className="form-label">First Name</label>
                        <input id="shipping_firstname" type="text" name="shipping_first-name" placeholder="Enter you first name" className="form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="shipping_lastname" className="form-label">Last Name</label>
                        <input id="lshipping_astname" type="text" name="shipping_last-name" placeholder="Enter your last name" className="form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="shipping_email" className="form-label">Email Address</label>
                        <input id="shipping_email" type="email" name="shipping_email" placeholder="enter your email address" className="form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="shipping_street" className="form-label">Street</label>
                        <input id="shipping_street" type="text" name="shipping_address" placeholder="Your street name" className="form-control"/>
                      </div>
                      <div className="form-group col-md-3">
                        <label for="shipping_city" className="form-label">City</label>
                        <input id="shipping_city" type="text" name="shipping_city" placeholder="Your city" className="form-control"/>
                      </div>
                      <div className="form-group col-md-3">
                        <label for="shipping_zip" className="form-label">ZIP</label>
                        <input id="shipping_zip" type="text" name="shipping_zip" placeholder="ZIP code" className="form-control"/>
                      </div>
                      <div className="form-group col-md-3">
                        <label for="shipping_state" className="form-label">State</label>
                        <input id="shipping_state" type="text" name="shipping_state" placeholder="Your state" className="form-control"/>
                      </div>
                      <div className="form-group col-md-3">
                        <label for="shipping_country" className="form-label">Country</label>
                        <input id="shipping_country" type="text" name="shipping_country" placeholder="Your country" className="form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="shipping_phone-number" className="form-label">Phone Number</label>
                        <input id="shipping_phone-number" type="tel" name="shipping_phone-number" placeholder="Your phone number" className="form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="shipping_company" className="form-label">Company</label>
                        <input id="shipping_company" type="text" name="shipping_company" placeholder="Your company name" className="form-control"/>
                      </div>
                    </div>
                  </div>

        {/* <!-- /Shipping Address--> */}
                  <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                  
                  <Link to="/cart" className="btn btn-template-outlined wide prev">
                  <i className="fa fa-angle-left"></i>Back to basket</Link>
                  
                  <Link to="/checkout2" className="btn btn-template wide next">Choose delivery method<i className="fa fa-angle-right"></i></Link></div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- order sammary --> */}
          <Ordersummary/>

        </div>
      </div>
    </section>



  <Footer/>

    </div>
    );
  }
}

export default Checkout1;