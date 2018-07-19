import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem } from "react-bootstrap";



class Navbar extends Component {

  render() {
    return (
      <div className="App">
         <header className="header">
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 hidden-lg-down text-col">
              <ul className="list-inline">
                <li className="list-inline-item"><i className="fas fa-phone iconcolor"></i>020-800-456-747</li>
                <li className="list-inline-item">Free shipping on orders over $300</li>
              </ul>
            </div>
{/* <!-- Bagian usernya --> */}
            <div className="col-lg-6 d-flex justify-content-end">
              <ul className="list-inline">
                <li className="list-inline-item"><Link to="/customerorder"><i className="fa fa-box"></i>shipping</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
{/* <!-- Awal navbar --> */}
      <div className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
              <Link className="navbar-brand home" to="/">
                  <img src={"img/burunglogo.png"}/>
              </Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
              <span className="navbar-toggler-icon"></span></button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                <LinkContainer className="nav-item" to="/">
                    <NavItem className="nav-link">HOME</NavItem>
                  </LinkContainer>

              <LinkContainer className="nav-item" to="/category">
                    <NavItem className="nav-link">SHOP</NavItem>
                  </LinkContainer>

              <LinkContainer className="nav-item" to="/about">
                    <NavItem className="nav-link">ABOUT</NavItem>
                  </LinkContainer>

              <LinkContainer className="nav-item" to="/blog">
                    <NavItem className="nav-link">BLOG</NavItem>
                  </LinkContainer>

              <LinkContainer className="nav-item" to="/contact">
                    <NavItem className="nav-link">CONTACT</NavItem>
                  </LinkContainer>
                </ul>
  
                 &nbsp;<form className="navbar-form navbar-right">
                  <div className="input-group">        
                <input type="text" className="form-control col-sm-1 col-md-10" placeholder="Search"/> &nbsp;
                <div className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-search"></i>
                  </button> 
                </div>
                </div>            
            </form>

                
            <div className="right-col d-flex align-items-lg-center flex-column flex-lg-row">
                  {/* <!-- User Not Logged - link to login page--> */}
              <div className="user col-sm-1 col-md-3"> <Link id="userdetails" to="/customerlogin" className="user-link"> 
              <i className="fas fa-user"> </i> 
              <a className="d-md-none text-col"> &nbsp; Ade Putra</a>
              </Link>

              
              </div>
                  {/* <!-- Cart Dropdown--> */}
                  <div className="cart dropdown show col-md-8">
                  <Link id="cartdetails" to="/cart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-shopping-cart"></i>
                  
                  <i className="cart-no">"(1)"</i>
                  </Link>

                  <Link to="/cart" className="d-md-none text-col">View Cart</Link>

                    <div aria-labelledby="cartdetails" className="dropdown-menu">
                    <br/>
                      {/* <!-- cart item--> */}
                      <div className="dropdown-item cart-product">
                        <div className="d-flex align-items-center">
                          <div className="img">
                          <img src={"img/product/birdnest2.png"}  style={{width:"100px", height:"100px"}}className="img-fluid"/></div>
                          <div className="details d-flex justify-content-between">
                            <div className="text">
                            <a href="#"><strong>Dried Golden Orange B'Nest</strong></a>
                            <p><small>Quantity: 1 </small>
                            <br/>
                            <small className="price">$499.97 </small></p></div>
                            <a href="#" className="delete"><i className="fa fa-trash-o"></i></a>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      {/* <!-- total price--> */}
                      <div className="dropdown-item total-price d-flex justify-content-between"><span>Total</span>
                      <strong className="text-primary">$499.97</strong></div>
                      {/* <!-- call to actions--> */}
                      <hr/>
                      <div className="dropdown-item CTA d-flex">
                      <Link to="/cart" className="btn btn-template wide">View Cart</Link> &nbsp;
                      <Link to="/checkout1" className="btn btn-template wide">Checkout</Link>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            </div>
            <div/>
</header>
      </div>

    );
  }
}

export default Navbar;
