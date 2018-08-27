import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';

const $ = require('jquery')
$.DataTable = require('datatables.net')

const cookies = new Cookies();

class Customerorders extends Component {
  state ={
    viewall:[],
  }

  componentDidMount(){
    axios.post('http://localhost:3002/customer/invoice',{
      id_user: cookies.get("login")
    }).then((respon) => {
      this.setState({viewall:respon.data});
      $('#example').DataTable();
    })
  }

  render() {


    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") < 1) {
      this.setState({redirect:true})
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin' />
    }

    var data = this.state.viewall.map((item, index) => {
      // var id = item.id_cart;
      var invoice_number = item.invoice_number;
      // var user_customerid = item.user_customerid;
      // var delivery = item.delivery;
      var status = item.status;
      var color = item.color;
      var payment = item.payment;
      var total_price = item.total_price;
       return <tr key={index}>
        <th>{invoice_number}</th>
        <td>{payment}</td>
        <td>${total_price}</td>
        <td><span className={color}>{status}</span></td>
        <td><span><Link to={{pathname: '/payment', state: {invoice_number:invoice_number}}} className="btn btn-warning btn-sm">payment</Link></span></td>
        <td><Link to={{pathname: '/customerorder', state: {invoice_number:invoice_number}}} className="btn btn-primary btn-sm">View</Link></td>
      </tr>
      })


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
            <table id="example" className="table table-hover table-responsive-md">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Payment</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Payment Confirmation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody >
                {/* Awal dari looping */}
                  {data}
                {/* Akhir dari looping */}
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