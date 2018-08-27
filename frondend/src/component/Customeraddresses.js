import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class Customeraddresses extends Component {

  state={
    First_Name: "",
    Last_Name: "",
    Email_Address: "",
    Street: "",
    City: "",
    ZIP: "",
    State: "",
    Country: "",
    Phone_Number: "",
    Company: "",
  }

  componentDidMount(){
    axios.post('http://localhost:3002/customer/address_customer',{
      id_user: cookies.get("login")
    }).then((respon) => {
      if(respon.data.length === 1){
      this.setState({First_Name:respon.data[0].First_Name});
      this.setState({Last_Name:respon.data[0].Last_Name});
      this.setState({Email_Address:respon.data[0].Email_Address});
      this.setState({Street:respon.data[0].Street});
      this.setState({City:respon.data[0].City});
      this.setState({ZIP:respon.data[0].ZIP});
      this.setState({State:respon.data[0].State});
      this.setState({Country:respon.data[0].Country});
      this.setState({Phone_Number:respon.data[0].Phone_Number});
      this.setState({Company:respon.data[0].Company});
      }
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
                    <label className="form-label fa fa-building"> Company </label> : {this.state.Company}
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-road"> Street </label> : {this.state.Street}
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-building"> City </label> : {this.state.City}
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-box-open"> Zip </label> : {this.state.ZIP}                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-map-marker"> State </label> : {this.state.State}               </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-globe"> Country </label> : {this.state.Country}                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-phone"> Phone </label> : {this.state.Phone_Number}               </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-envelope"> Email </label> : {this.state.Email_Address} </div>

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