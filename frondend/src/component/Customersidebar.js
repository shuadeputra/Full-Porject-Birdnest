import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';


class Customersidebar extends Component {

  render() {

    return (      
    <div className="customer-sidebar col-xl-3 col-lg-4 mb-md-5">
          <div className="customer-profile"><a href="#" className="d-inline-block">
          <img src={"img/avatar/avatar1.jpg"} className="img-fluid rounded-circle customer-image"/>
          </a>
            <h5>Julie Machallova</h5>
            <p className="text-muted text-small">Ostrava, Czech republic</p>
          </div>
          <nav className="list-group customer-nav" id="sticky">
          
          <Link to="/customerorders" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.customersidebar}><span>
              <span className="fas fa-shopping-bag"></span> Orders</span>
              <small className="badge badge-pill badge-light">5</small>
            </Link>
            
            <Link to="/customeraccount" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.Customeraccount}><span>
              <span className="fas fa-user"></span> Profile</span></Link>

            <Link to="/Customeraddresses" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.Customeraddresses}><span><span className="fas fa-map"></span> Addresses</span></Link>
            
            <Link to="/Customerlogin" className="list-group-item d-flex justify-content-between align-items-center"><span>
              <span className="fa fas fa-sign-out-alt"></span>Log out</span></Link>


            </nav>
        </div>

    );
  }
}

export default Customersidebar;
