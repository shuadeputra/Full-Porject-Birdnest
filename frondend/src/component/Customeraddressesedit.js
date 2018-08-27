import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Customeraddressesedit extends Component {
  
  state = {
    viewaddress: [],
    redirect:false,
    hasil_respon:""
  }

  componentDidMount() {
    // console.log(cookies.get("login"))
    axios.post('http://localhost:3002/invoice/address', {
      id_user: cookies.get("login")
    })
      .then((respon) => {
        this.setState({ viewaddress: respon.data });
        // console.log(respon.data)
      })
  }

  update(obj){
    
    axios.post('http://localhost:3002/invoice/address/update', {
      id : cookies.get("login"),
      First_Name : obj.fistname.value,
      Last_Name : obj.lastname.value,
      Email_Address : obj.email.value,
      Street : obj.street.value,
      City : obj.city.value,
      ZIP : obj.zip.value,
      State : obj.state.value,
      Country : obj.country.value,
      Phone_Number : obj.phone_number.value,
      Company : obj.company.value,
    }).then((respon) => {
        
        if(respon.data === "Sukses"){
          this.setState({hasil_respon:1})
          this.setState({redirect:true})
        }
      })
  
  }

  render() {

          // Mengecek apakah passwod sudah dan username uda benar?
  if(cookies.get("login") < 1){
    this.setState({redirect:true})   
  }

    // Mengirim ke page checkout2
    if (this.state.redirect && this.state.hasil_respon === 1) {
      return <Redirect to='/Customeraddresses'/>
    }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin'/>
    }


     // looping untuk viewaddress
     var data = this.state.viewaddress.map((item, index) => {
      var id = item.id;
      var First_Name = item.First_Name;
      var Last_Name = item.Last_Name;
      var Email_Address = item.Email_Address;
      var Street = item.Street;
      var City = item.City;
      var ZIP = item.ZIP;
      var State = item.State;
      var Country = item.Country;
      var Phone_Number = item.Phone_Number;
      var Company = item.Company;

      return <div key={index}>
          {/* <!-- Invoice Address--> */}
          <div className="block-header mb-5">
            <h6>Invoice address</h6>
          </div>

          <input hidden type="text" ref="id" defaultValue={id}/>
          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label">First Name</label>
              <input id="firstname" ref="fistname" defaultValue={First_Name} type="text" name="first-name" placeholder="Enter you first name" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Last Name</label>
              <input id="lastname" ref="lastname" defaultValue={Last_Name} type="text" name="last-name" placeholder="Enter your last name" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Email Address</label>
              <input id="email" ref="email" defaultValue={Email_Address} type="email" name="email" placeholder="enter your email address" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Street</label>
              <input id="street" ref="street" defaultValue={Street} type="text" name="address" placeholder="Your street name" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label className="form-label">City</label>
              <input id="city" ref="city" defaultValue={City} type="text" name="city" placeholder="Your city" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label className="form-label">ZIP</label>
              <input id="zip" ref="zip" defaultValue={ZIP} type="text" name="zip" placeholder="ZIP code" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label className="form-label">State</label>
              <input id="state" ref="state" defaultValue={State} type="text" name="state" placeholder="Your state" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label className="form-label">Country</label>
              <input id="country" ref="country" defaultValue={Country} type="text" name="country" placeholder="Your country" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Phone Number</label>
              <input id="phone-number" ref="phone_number" defaultValue={Phone_Number} type="tel" name="phone-number" placeholder="Your phone number" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Company</label>
              <input id="company" type="text" ref="company" defaultValue={Company} name="company" placeholder="Your company name" className="form-control" />
            </div>

          </div>
          {/* <!-- /Shipping Address--> */}
          <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
          
            <button onClick={()=>{this.update(this.refs)}}  className="btn btn-primary"><i className="fa fa-save"></i>Save Change</button></div>
        </div>
      })



    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your profile</h1>
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
            {/* Awal looping */}
                 {data}
            {/* akhir looping */}
          </div>
        </div>
      </div>
    </section>

  <Footer/>

    </div>
    );
  }
}

export default Customeraddressesedit;