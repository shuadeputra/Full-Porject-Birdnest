import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordersummary from './Ordersummary';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link} from 'react-router-dom'

class Checkout3 extends Component {
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
              <li className="nav-item"><a href="checkout1.html" className="nav-link">Address</a></li>
              <li className="nav-item"><a href="checkout2.html" className="nav-link">Delivery Method </a></li>
              <li className="nav-item"><a href="checkout3.html" className="nav-link active">Payment Method </a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="payment-method" className="tab-block">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div id="headingOne" role="tab" className="card-header">
                      <h6><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Credit Card</a></h6>
                    </div>
                    <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne" className="collapse show">
                      <div className="card-body">
                        <form action="#">
                          <div className="row">
                            <div className="form-group col-md-6">
                              <label for="card-name" className="form-label">Name on Card</label>
                              <input type="text" name="card-name" placeholder="Name on card" id="card-name" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="card-number" className="form-label">Card Number</label>
                              <input type="text" name="card-number" placeholder="Card number" id="card-number" className="form-control"/>
                            </div>
                            <div className="form-group col-md-4">
                              <label for="expiry-date" className="form-label">Expiry Date</label>
                              <input type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date" className="form-control"/>
                            </div>
                            <div className="form-group col-md-4">
                              <label for="cvv" className="form-label">CVC/CVV</label>
                              <input type="text" name="cvv" placeholder="123" id="cvv" className="form-control"/>
                            </div>
                            <div className="form-group col-md-4">
                              <label for="zip" className="form-label">ZIP</label>
                              <input type="text" name="zip" placeholder="123" id="zip" className="form-control"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo" role="tab" className="card-header">
                      <h6><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="collapsed">Paypal</a></h6>
                    </div>
                    <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" className="collapse">
                      <div className="card-body">
                        <input type="radio" name="shippping" id="payment-method-1" className="radio-template"/>
                        <label for="payment-method-1"><strong>Continue with Paypal</strong><br/><span className="label-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree" role="tab" className="card-header">
                      <h6><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="collapsed">Pay on delivery</a></h6>
                    </div>
                    <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree" className="collapse">
                      <div className="card-body">
                        <input type="radio" name="shippping" id="payment-method-2" className="radio-template"/>
                        <label for="payment-method-2"><strong>Pay on Delivery</strong><br/><span className="label-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                
                <Link to="/checkout2" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to delivery method</Link>
                
                <Link to="/checkout4" className="btn btn-template wide next">Continue to order review<i className="fa fa-angle-right"></i></Link></div>

              </div>
            </div>
          </div>
          {/* <!--- Ordersummary---> */}
          <Ordersummary/>

        </div>
      </div>
    </section>



  <Footer/>

    </div>
    );
  }
}

export default Checkout3;