import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contactform from './Contactform';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {

  state={
    content:"",
    address:"",
    callcenter:"",
    electronic_support:"",
  }

  componentDidMount(){
    axios.get('http://localhost:3002/Contact', {
    })
      .then((respon) => {
        this.setState({ content: respon.data[0].content });
        this.setState({ address: respon.data[0].address });
        this.setState({ callcenter: respon.data[0].callcenter });
        this.setState({ electronic_support: respon.data[0].electronic_support });
      })
  }


  render() {
    return (
    <div>
   
    <Navbar />

    {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Contact</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <main className="contact-page">


      {/* <!-- Contact page--> */}
      <section className="contact">
        <div className="container">
          <header>
            <p className="lead">
                {this.state.content}
            </p>
          </header>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-map"></div>
              </div>
              <h3>Address</h3>
              <p>{this.state.address}</p>
            </div>
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-address-book"></div>
              </div>
              <h3>Call center</h3>
              <p>{this.state.callcenter}</p>
            </div>
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-envelope"></div>
              </div>
              <h3>Electronic support</h3>
              <p>{this.state.electronic_support}</p>
              {/* <ul className="list-style-none">
                <li><strong><a href="mailto:">info@fakeemail.com</a></strong></li>
                <li><strong><a href="#">
                      Ticketio
                       - our ticketing support platform</a></strong></li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      <hr/>
        <Contactform/>
    </main>

  <Footer/>

    </div>
    );
  }
}

export default Contact;