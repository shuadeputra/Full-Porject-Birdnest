import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordersummary from './Ordersummary';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link} from 'react-router-dom'

class Checkout4 extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  <Herosectioncheckout/>


  {/* <!-- Checout Forms--> */}
    <section className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nav nav-pills">
              <li className="nav-item"><a href="checkout1.html" className="nav-link">Address</a></li>
              <li className="nav-item"><a href="checkout2.html" className="nav-link">Delivery Method </a></li>
              <li className="nav-item"><a href="checkout3.html" className="nav-link">Payment Method </a></li>
              <li className="nav-item"><a href="checkout4.html" className="nav-link active">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="order-review" className="tab-block">
                <div className="cart">
                  <div className="cart-holder">
                    <div className="basket-header">
                      <div className="row">
                        <div className="col-6">Product</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Unit Price</div>
                      </div>
                    </div>
                    <div className="basket-body">
           {/* <!-- Product--> */}
                      <div className="item row d-flex align-items-center">
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                          <img src={"img/product/bottle1.1.png"} alt="..." className="img-fluid"/>
                            <div className="title"><a href="detail.html">
                                <h6>Flower Series Bottled Bird’s </h6></a></div>
                          </div>
                        </div>
                        <div className="col-2"><span>$65.00</span></div>
                        <div className="col-2"><span>2</span></div>
                        <div className="col-2"><span>$130.00</span></div>
                      </div>
              {/* <!-- Product--> */}
                      <div className="item row d-flex align-items-center">
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                          <img src={"img/product/bottle2.1.png"} alt="..." className="img-fluid"/>
                            <div className="title"><a href="detail.html">
                                <h6>ock Sugar Bottled Birdnest</h6></a></div>
                          </div>
                        </div>
                        <div className="col-2"><span>$50.00</span></div>
                        <div className="col-2"><span>3</span></div>
                        <div className="col-2"><span>$150.00</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="total row"><span className="col-md-10 col-2">Total</span><span className="col-md-2 col-10 text-primary">$280.00</span></div>
                </div>
                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                <Link to="/checkout3" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to payment method</Link>

                <Link to="/checkout5" className="btn btn-template wide next">Place an order<i class="fa fa-angle-right"></i></Link></div>
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

export default Checkout4;