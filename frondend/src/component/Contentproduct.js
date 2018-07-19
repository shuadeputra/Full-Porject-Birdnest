import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Contentproduct extends Component {
  render() {
    return (
      <div>

    {/* <!-- Dried bird's Collection --> */}
    <section className="men-collection gray-bg">
      <div className="container">
        <header className="text-center">
          <h2 className="text-uppercase"><small>The Best Choice</small>Dried brid's nest</h2>
        </header>

        <div className="container text-center my-3">
          <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
              <div className="carousel-inner w-100" role="listbox">
        
        {/* <!--Product Pertama  --> */}
                <div className="carousel-item row no-gutters active">                    
                    <div className="col-3 float-left item product is-gray">
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
                              <h3 className="h6 text-uppercase no-margin-bottom">Dried Blood Red B'Nest</h3></a><span className="price text-muted">$549.97</span>    
                          </div>
                        </div>
                      
          {/* <!-- Product ke dua --> */}
                <div className="col-3 float-left item product is-gray">
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
                          <h3 className="h6 text-uppercase no-margin-bottom">Dried Golden Orange B'Nest</h3></a><span className="price text-muted">$499.97</span>    
                      </div>
                    </div>

           {/* <!-- Product ke tiga --> */}
                      <div className="col-3 float-left item product is-gray">
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
                                <h3 className="h6 text-uppercase no-margin-bottom">Dried White B'Nest</h3></a><span className="price text-muted">$97.00</span>    
                            </div>
                          </div>
                          

              {/* <!-- Product ke empat --> */}
                  <div className="col-3 float-left item product is-gray">
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
                            <h3 className="h6 text-uppercase no-margin-bottom">Dried Triangle B'Nest</h3></a><span className="price text-muted">$188.00</span>    
                        </div>
                      </div>
              </div>

          <div className="carousel-item row no-gutters">

        {/* <!-- Product ke lima --> */}
                    <div className="col-3 float-left item product is-gray">
                        <div className="image d-flex align-items-center justify-content-center">
                            <img src={"img/product/birdnest5.png"} alt="product" className="img-fluid"/>
                            <div className="hover-overlay d-flex align-items-center justify-content-center">
                              <div className="CTA d-flex align-items-center justify-content-center">
                              <Link to="#" className="add-to-cart">
                                <i className="fas fa-shopping-cart"></i></Link><Link to="detail" className="visit-product active">
                                  <i className="fas fa-search"></i>View</Link>
                                </div>
                            </div>
                          </div>
                          <div className="title"><a href="detail.html">
                              <h3 className="h6 text-uppercase no-margin-bottom">Dried Yantiao B'Nest</h3></a><span className="price text-muted">$138.00</span>    
                          </div>
                        </div>

          {/* <!-- Product ke enam --> */}
                    <div className="col-3 float-left item product is-gray">
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
                              <h3 className="h6 text-uppercase no-margin-bottom">Dried Blood Red B'Nest</h3></a><span className="price text-muted">$549.97</span>   
                          </div>
                        </div>

        {/* <!-- Product ke Tujuh --> */}
                  <div className="col-3 float-left item product is-gray">
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
                            <h3 className="h6 text-uppercase no-margin-bottom">Dried Golden Orange B'Nest</h3></a><span className="price text-muted">$499.97</span>    
                        </div>
                      </div>

             {/* <!-- Product ke tujuh --> */}
                        <div className="col-3 float-left item product is-gray">
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
                                  <h3 className="h6 text-uppercase no-margin-bottom">Dried White B'Nest</h3></a><span className="price text-muted">$97.00</span>    
                              </div>
                              </div>
                          </div>
                      </div>
              <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
      </div>
 
    </section>


      </div>

    );
  }
}

export default Contentproduct;
