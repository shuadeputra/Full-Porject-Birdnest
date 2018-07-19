import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class Checkout5 extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section class="hero hero-page gray-bg padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-lg-9 order-2 order-lg-1">
            <h1>Order confirmed</h1>
          </div>
          <div class="col-lg-3 text-right order-1 order-lg-2">
            <ul class="breadcrumb justify-content-lg-end">
              <li class="breadcrumb-item">
              <Link to="/">Home</Link></li>
              <li class="breadcrumb-item active">Order confirmed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Checout Forms--> */}
    <section class="checkout">
      <div class="container">
        <div class="confirmation-icon"><i class="fa fa-check"></i></div>
        <h2>Thank you, Julie. Your order is confirmed.</h2>
        <p class="mb-5">Your order hasn't shipped yet but we will send you ane email when it does.</p>
        <p> <Link to="/customerorder" class="btn btn-template wide">View or manage your order</Link></p>
      </div>
    </section>


  <Footer/>

    </div>
    );
  }
}

export default Checkout5;