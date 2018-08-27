import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';
// import axios from 'axios';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Checkout5 extends Component {

  state={
    redirect:false
  }

  render() {

          // Mengecek apakah passwod sudah dan username uda benar?
          if(cookies.get("login") < 1){
            this.setState({redirect: true})   
          }
    
          // Mengirm redirect jika pass dan user bukan dapat value 1
            if (this.state.redirect) {
              return <Redirect to='/customerlogin'/>
            }

    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Order confirmed</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item">
              <Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Order confirmed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Checout Forms--> */}
    <section className="checkout">
      <div className="container">
        <div className="confirmation-icon"><i className="fa fa-check"></i></div>
        <h2>Thank you, {cookies.get("username")}. Your order is confirmed.</h2>
        <p className="mb-5">Your order hasn't shipped yet but we will send you ane email when it does.</p>
        <p> <Link to="/customerorders" className="btn btn-template wide">View or manage your order</Link></p>
      </div>
    </section>


  <Footer/>

    </div>
    );
  }
}

export default Checkout5;