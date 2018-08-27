import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import axios from "axios";

class Footer extends Component {

  state = {
    content_phone:"",
    content_money:"",
    content_shipping:"",
  }

  componentDidMount(){
    axios.get("http://localhost:3002/fronthome")
    .then((response)=>{
      if(response.data !== undefined){
        this.setState({content_phone:response.data[0].content_phone})
        this.setState({content_shipping:response.data[0].content_shipping})
        this.setState({content_money:response.data[0].content_money})
      }
    })
  }


  render() {

    return (
      <div className="App">
    {/* <!-- Footer--> */}
    <footer className="main-footer">
      {/* <!-- Service Block--> */}
      <div className="services-block">
        <div className="container">
          <div className="row">

      {/* <!-- Untuk icon truck --> */}
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
              <div className="item d-flex align-items-center">
                <div className="icon"><i className="fas fa-truck "></i></div>
                <div className="text">
                  <h6 className="no-margin text-uppercase">Free shipping &amp; return</h6><p>{this.state.content_shipping}</p>
                </div>
              </div>
            </div>

        {/* <!-- Untuk icon --> */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="item d-flex align-items-center">
                <div className="icon"><i className="fas fa-money-bill-alt "></i></div>
                <div className="text">
                  <h6 className="no-margin text-uppercase">Money back guarantee</h6><p>{this.state.content_money}</p>
                </div>
              </div>
            </div>


        {/* <!-- Untuk icon headphones --> */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="item d-flex align-items-center">
                <div className="icon"><i className="fas fa-headphones "></i></div>
                <div className="text">
                  <h6 className="no-margin text-uppercase">{this.state.content_phone}</h6><p>24/7 Available Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* <!-- Main Block --> */}
      <div className="main-block">
        <div className="container">
          <div className="row">
            <div className="info col-lg-4">
              <div className="logo"><img src={"img/burunglogo.png"} alt="..."/></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <ul className="social-menu list-inline">
                <li className="list-inline-item"><a target="_blank" title="twitter">
                  <i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a target="_blank" title="facebook">
                  <i className="fab fa-facebook"></i></a></li>
                <li className="list-inline-item"><a target="_blank" title="instagram">
                  <i className="fab fa-instagram"></i></a></li>
                <li className="list-inline-item"><a target="_blank" title="pinterest">
                  <i className="fab fa-pinterest"></i></a></li>
                <li className="list-inline-item"><a target="_blank" title="vimeo">
                  <i className="fab fa-vimeo"></i></a></li>
              </ul>
            </div>

              <div className="site-links col-lg-2 col-md-6">
              <h5 className="text-uppercase">Shop</h5>
              <ul className="list-unstyled">
                <li> <a>Dried Bird's Nest </a></li>
                <li> <a>Bottled Bird's Nest</a></li>
                <li> <a>Brid's Gifts</a></li>
                <li> <Link to="/blog">Our Blog</Link></li>
                <li> <Link to="/category">Shop</Link></li>
              </ul>
            </div>
            <div className="site-links col-lg-2 col-md-6">
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled">
                <li> <Link to="/customerlogin">Login</Link></li>
                <li> <Link to="/customerlogin">Register</Link></li>
                <li> <a>Wishlist</a></li>
                <li> <Link to="/category">Our Products</Link></li>
              </ul>
            </div>


            <div className="newsletter col-lg-4">
              <h5 className="text-uppercase">Daily Offers & Discounts</h5>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            </div>
           </div>
        </div>
      </div>
    </footer>

      {/* <!-- Untuk bagian copyright --> */}
      <div className="copyrights" style={{backgroundColor:"black",height:"100%"}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <p style={{color:"white"}}> 2018 高兴鸟 Premium Birdnest.</p>
            </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
}

export default Footer;
