import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Similaritems extends Component {
  render() {
    return (
    <div>
   
    <section class="related-products">
      <div class="container">
        <header class="text-center">
          <h2><small>Similar Items</small>You may also like</h2>
        </header>
        <div class="row">

          {/* <!-- item--> */}
    {/* <!-- Product pertama --> */}
          <div className="item col-lg-3">
              <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                  <Link to="#" className="add-to-cart">
                            <i className="fas fa-shopping-cart"></i></Link><Link to="detail" className="visit-product active">
                            <i className="fas fa-search"></i>View</Link>
                          </div>
                    </div>
                  </div>
                  <div className="title"><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Blood Red B'Nest</h3></a><span className="price text-muted">$549.97</span></div>
                </div>
          </div>

        {/* <!-- item--> */}
  {/* <!-- Product ke dua --> */}
          <div className="item col-lg-3">
              <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest2.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <Link to="#" className="add-to-cart">
                            <i className="fas fa-shopping-cart"></i></Link><Link to="detail" className="visit-product active">
                            <i className="fas fa-search"></i>View</Link>
                          </div>
                    </div>
                  </div>
                  <div className="title"><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Golden Orange B'Nest</h3></a><span className="price text-muted">$499.97</span></div>
                </div>
          </div>

      {/* <!-- item--> */}
  {/* <!-- Product ke tiga --> */}
          <div className="item col-lg-3">
              <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest3.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <Link to="#" className="add-to-cart">
                            <i className="fas fa-shopping-cart"></i></Link><Link to="detail" className="visit-product active">
                            <i className="fas fa-search"></i>View</Link>
                          </div>
                    </div>
                  </div>
                  <div className="title"><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried White B'Nest </h3></a><span className="price text-muted">$97.00</span></div>
                </div>
          </div>
          
          {/* <!-- item--> */}
    {/* <!-- Product ke empat --> */}
          <div className="item col-lg-3">
              <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest4.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <Link to="#" className="add-to-cart">
                            <i className="fas fa-shopping-cart"></i></Link><Link to="detail" className="visit-product active">
                            <i className="fas fa-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Triangle B'Nest</h3></a><span className="price text-muted">$188.00</span></div>
                </div>
          </div>
        </div>
      </div>
    </section>

    </div>
    );
  }
}

export default Similaritems;