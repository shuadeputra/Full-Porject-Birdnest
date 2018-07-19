import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link} from 'react-router-dom'

class Customeraccountedit extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your addresses</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Your addresses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-small">
      <div className="container">
        <div className="row">
  {/* <!-- Customer Sidebar--> */}

    <Customersidebar/>

  {/* <!-- End Customer Sidebar--> */}
        
  <div className="col-lg-8 col-xl-9 pl-lg-3">
            <div className="block-header mb-5">
              <h5>Change password  </h5>
            </div>
            <form className="content-block">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="password_old" className="form-label">Old password</label>
                    <input id="password_old" type="password" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="password_1" className="form-label">New password</label>
                    <input id="password_1" type="password" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="password_2" className="form-label">Retype new password</label>
                    <input id="password_2" type="password" className="form-control"/>
                  </div>
                </div>
              </div>

      {/* <!-- /.row--> */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>Change password</button>
              </div>
            </form>
            <div className="block-header mb-5">
              <h5>Personal details</h5>
            </div>
            <form className="content-block">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="firstname" className="form-label">Firstname</label>
                    <input id="firstname" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="lastname" className="form-label">Lastname</label>
                    <input id="lastname" type="text" className="form-control"/>
                  </div>
                </div>
              </div>

    {/* <!-- /.row--> */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="company" className="form-label">Company</label>
                    <input id="company" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="street" className="form-label">Street</label>
                    <input id="street" type="text" className="form-control"/>
                  </div>
                </div>
              </div>

      {/* <!-- /.row--> */}
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label for="city" className="form-label">Company</label>
                    <input id="city" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label for="zip" className="form-label">ZIP</label>
                    <input id="zip" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label for="state" className="form-label">State</label>
                    <select id="state" className="form-control"></select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label for="country" className="form-label">Country</label>
                    <select id="country" className="form-control"></select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="phone" className="form-label">Telephone</label>
                    <input id="phone" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input id="email" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-12 text-center">
                  <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>Save changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  <Footer/>

    </div>
    );
  }
}

export default Customeraccountedit;