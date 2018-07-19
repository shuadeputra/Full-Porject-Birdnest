import React, { Component } from 'react';
import Contentproduct from './Contentproduct';
import {Link} from 'react-router-dom';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div>

{/* <!-- Hero SECTION--> */}
      <section style={{background: "url(img/divider/divider.jpg)"}} className="divider">
        <div className="container"> 
          <div className="row">
            <div className="col-lg-6">
              <p>Old Collection</p>
              <h2 className="h1 text-uppercase no-margin">Huge Sales</h2>
              <p>At our outlet stores</p><a href="#" className="btn btn-template wide shop-now">Shop Now
                <i className="fas fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
      </section>


    {/* <!-- Categories Section--> */}
    <section className="categories">
      <div className="container">
        <header className="text-center">
          <h2 className="text-uppercase"><small>Top for this month</small>Our Featured Picks</h2>
        </header>
        
    {/* <!-- Banner pertama --> */}
        <div className="row text-left">
          <div className="col-lg-4"><a href="#">
              <div style={{ backgroundImage:"url(img/banner/banner1.jpg)"}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">Dried brid's nest</h3><p>New Collection</p>
                </div>
              </div></a></div>

    {/* <!-- Banner kedua --> */}
          <div className="col-lg-4"><a href="#">
              <div style={{ backgroundImage:"url(img/banner/banner2.jpg)"}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">Bottled bird’s nest</h3><p>New Collection</p>
                </div>
              </div></a></div>

      {/* <!-- Banner ketiga --> */}
          <div className="col-lg-4"><a href="#">
              <div style={{ backgroundImage:"url(img/banner/banner3.jpg)"}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">Brid's Gifts</h3><p>Sale of 20%</p>
                </div>
              </div></a></div>
        </div>
      </div>
    </section>

  <Contentproduct/>

      </div>

    );
  }
}

export default Content;
