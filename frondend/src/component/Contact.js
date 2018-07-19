import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contactform from './Contactform';
import '../App.css';
import {Link} from 'react-router-dom'

class Contact extends Component {
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
              Are you curious about something? Do you have some kind of problem with our products? As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am
              he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
            </p>
          </header>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-map"></div>
              </div>
              <h3>Address</h3>
              <p>13/25 New Avenue<br/>New Heaven, 45Y 73J<br/>England, <strong>Great Britain</strong></p>
            </div>
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-address-book"></div>
              </div>
              <h3>Call center</h3>
              <p>This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication.</p>
              <p><strong>+33 555 444 333</strong></p>
            </div>
            <div className="col-md-4">
              <div className="contact-icon">
                <div className="fas fa-envelope"></div>
              </div>
              <h3>Electronic support</h3>
              <p>Please feel free to write an email to us or to use our electronic ticketing system.</p>
              <ul className="list-style-none">
                <li><strong><a href="mailto:">info@fakeemail.com</a></strong></li>
                <li><strong><a href="#">
                      Ticketio
                       - our ticketing support platform</a></strong></li>
              </ul>
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