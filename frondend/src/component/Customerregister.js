import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class customerregister extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

  {/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Customer zone</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Customer zone</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- text page--> */}
  <section className="padding-small">
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="block">
            <div className="block-header">
              <h5>Register Account</h5>
            </div>
            <div className="block-body"> 
              <form method="get">
                <div className="form-group">
                  <label for="name" className="form-label">Name</label>
                  <input id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="email" className="form-label">Email</label>
                  <input id="email" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Password</label>
                  <input id="password" type="password" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Gander :</label>  &nbsp;&nbsp;
                  <select>
                  <option value="male">Male</option>
                  <option value="famale">Famale</option>
                </select>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Company</label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Phone Number</label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="image" className="form-label">Image</label>
                  <input type="file" className="form-control"/>
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary"><i className="fas fa-user"></i> Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <Footer/>

    </div>
    );
  }
}

export default customerregister;