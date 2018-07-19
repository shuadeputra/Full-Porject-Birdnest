import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cartcomponent from './Cartcomponent';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link} from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
    <div>
   
    <Navbar />
    <Herosectioncheckout/>

    {/* <!-- Shopping Cart Section--> */}
    <section className="shopping-cart">
      <div className="container">
        <div className="basket">
          <div className="basket-holder">
            <div className="basket-header">
              <div className="row">
                <div className="col-5">Product</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <div className="col-1 text-center">Remove</div>
              </div>
            </div>
            <div className="basket-body">

              {/* <!-- Product--> */}
              <div className="item">
                <div className="row d-flex align-items-center">
                  <div className="col-5">
                    <div className="d-flex align-items-center">
                    <img src={"img/product/bottle1.1.png"} alt="..." className="img-fluid"/>
                      <div className="title"><a href="detail.html">
                          <h5>Flower Series Bottled Bird’s Nest</h5></a></div>
                    </div>
                  </div>
                  <div className="col-2"><span>$52.00</span></div>
                  <div className="col-2">
                    <div className="d-flex align-items-center">
                      <div className="quantity d-flex align-items-center">
                        <div className="dec-btn">-</div>
                        <input type="text" value="4" className="quantity-no"/>
                        <div className="inc-btn">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"><span>$208.00</span></div>
                  <div className="col-1 text-center"><i className="delete fa fa-trash"></i></div>
                </div>
              </div>

              {/* <!-- Product--> */}
              <div className="item">
                <div className="row d-flex align-items-center">
                  <div className="col-5">
                    <div className="d-flex align-items-center">
                    <img src={"img/product/bottle2.1.png"} alt="..." className="img-fluid"/>
                      <div className="title"><a href="detail.html">
                          <h5>ock Sugar Bottled Birdnest</h5></a></div>
                    </div>
                  </div>
                  <div className="col-2"><span>$50.00</span></div>
                  <div className="col-2">
                    <div className="d-flex align-items-center">
                      <div className="quantity d-flex align-items-center">
                        <div className="dec-btn">-</div>
                        <input type="text" value="3" className="quantity-no"/>
                        <div className="inc-btn">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"><span>$150.00</span></div>
                  <div className="col-1 text-center"><i className="delete fa fa-trash"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="CTAs d-flex align-items-center justify-content-center justify-content-md-end flex-column flex-md-row">
        <Link to="/category" className="btn btn-template-outlined wide">Continue Shopping</Link>
        <a href="#" className="btn btn-template wide">Update Cart</a></div>
      </div>
    </section>

    <Cartcomponent/>

  <Footer/>

    </div>
    );
  }
}

export default Cart;