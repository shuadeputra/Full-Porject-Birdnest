import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link} from 'react-router-dom'

class Customeraddresses extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your Addresses</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Your profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-small">
      <div className="container">
        <div className="row">
  {/* <!-- Customer Sidebar--> */}

    <Customersidebar Customeraddresses="active"/>

  {/* <!-- End Customer Sidebar--> */}
        
  <div className="col-lg-8 col-xl-9 pl-lg-3">
            <div className="block-header mb-5">
              <h5>Invoice Address</h5>
            </div>
            <form className="content-block">
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-building"> Company </label> : Otocentral
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-road"> Street </label> : permata hijau
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-building"> Company </label> : Otocentral
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-box-open"> Zip </label> : 123                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-map-marker"> State </label> : Jakarta                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-globe"> Country </label> : Indonesia                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-phone"> Phone </label> : 081249621499                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label for="firstname" className="form-label fa fa-envelope"> Email </label> : Shuadeputra@gmail.com </div>

                <div className="col-sm-12 text-center">
                  
                  <Link to="Customeraddressesedit" className="btn btn-primary"><i className="fa fa-save"></i>Edit</Link>
                 
                        </div>
                      </div>
                      </div>                
                    </div>
                  </div>
                    </div>
                      </div>
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

export default Customeraddresses;