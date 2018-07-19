import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link} from 'react-router-dom'

class Customerorders extends Component {
  render() {
    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your orders</h1><p className="lead">Your orders in one place.</p>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Orders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-small">
      <div className="container">
        <div className="row">
  {/* <!-- Customer Sidebar--> */}

    <Customersidebar customersidebar='active' />

  {/* <!-- End Customer Sidebar--> */}
        
          <div className="col-lg-8 col-xl-9 pl-lg-3">
            <table className="table table-hover table-responsive-md">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th># 1735</th>
                  <td>22/6/2017</td>
                  <td>$150.00</td>
                  <td><span className="badge badge-info">Being prepared</span></td>
                  <td><Link to="/customerorder" className="btn btn-primary btn-sm">View</Link></td>
                </tr>
                <tr>
                  <th># 1734</th>
                  <td>7/5/2017</td>
                  <td>$150.00</td>
                  <td><span className="badge badge-warning">Action needed</span></td>
                  <td><Link to="/customerorder" className="btn btn-primary btn-sm">View</Link></td>
                </tr>
                <tr>
                  <th># 1730</th>
                  <td>30/9/2016</td>
                  <td>$150.00</td>
                  <td><span className="badge badge-success">Received</span></td>
                  <td><Link to="/customerorder" className="btn btn-primary btn-sm">View</Link></td>
                </tr>
                <tr>
                  <th># 1705</th>
                  <td>22/6/2016</td>
                  <td>$150.00</td>
                  <td><span className="badge badge-danger">Cancelled</span></td>
                  <td><Link to="/customerorder" className="btn btn-primary btn-sm">View</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>


  <Footer/>

    </div>
    );
  }
}

export default Customerorders;