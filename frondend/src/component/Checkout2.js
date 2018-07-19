import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordersummary from './Ordersummary';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link} from 'react-router-dom'

class Checkout2 extends Component {
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
              <li className="nav-item"><a href="checkout2.html" className="nav-link active">Delivery Method </a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Payment Method </a></li>
              <li className="nav-item"><a href="#" className="nav-link disabled">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="delivery-method" className="tab-block">
                <form action="#" className="shipping-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input type="radio" name="shippping" id="option1" className="radio-template"/>
                      <label for="option1"><strong>Usps next day</strong><br/><span className="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="radio" name="shippping" id="option2" className="radio-template"/>
                      <label for="option2"><strong>Usps next day</strong><br/><span className="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="radio" name="shippping" id="option3" className="radio-template"/>
                      <label for="option3"><strong>Usps next day</strong><br/><span className="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="radio" name="shippping" id="option4" className="radio-template"/>
                      <label for="option4"><strong>Usps next day</strong><br/><span className="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                  </div>
                </form>
                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                <Link to="/checkout1" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to Address</Link>
                
                <Link to="/checkout3" className="btn btn-template wide next">Choose payment method<i className="fa fa-angle-right"></i></Link></div>
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

export default Checkout2;