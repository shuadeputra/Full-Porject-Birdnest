import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class About extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>About us</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">About us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- about us--> */}
    <section className="padding-small">
      <div className="container">
        <div className="row about-item">
          <div className="col-lg-8 col-sm-9">
            <h2>How it all began</h2>
            <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
  
    {/* <!-- Text icon --> */}
          <div className="col-lg-4 col-sm-3 d-none d-sm-flex align-items-center">
            <div className="about-icon ml-lg-0"><i className="fas fa-line-chart"></i></div>
          </div>
        </div>
        <div className="row about-item">
          <div className="col-lg-4 col-sm-3 d-none d-sm-flex align-items-center">
            <div className="about-icon mr-lg-0"><i className="fas fa-user"></i></div>
          </div>

  {/* <!-- Text icon --> */}
          <div className="col-lg-8 col-sm-9">
            <h2>Who we are</h2>
            <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
        </div>
        <div className="row about-item">
          <div className="col-lg-8 col-sm-9">
            <h2>We care</h2>
            <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-4 col-sm-3 d-none d-sm-flex align-items-center">
            <div className="about-icon ml-lg-0"><i className="fas fa-heart"></i></div>
          </div>
        </div>

{/* <!-- Text icon --> */}
        <div className="row about-item">
          <div className="col-lg-4 col-sm-3 d-none d-sm-flex align-items-center">
            <div className="about-icon mr-lg-0"><i className="fas fa-truck"></i></div>
          </div>
          <div className="col-lg-8 col-sm-9">
            <h2>Fast delivery</h2>
            <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
        </div>
        <div className="row about-item">
          <div className="col-lg-8 col-sm-9">
            <h2>Your security and privacy matters</h2>
            <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>

   {/* <!-- Text Icon  --> */}
          <div className="col-lg-4 col-sm-3 d-none d-sm-flex align-items-center">
            <div className="about-icon ml-lg-0"><i className="fas fa-user-shield"></i></div>
          </div>
        </div>
      </div>
    </section>

  <Footer/>

    </div>
    );
  }
}

export default About;