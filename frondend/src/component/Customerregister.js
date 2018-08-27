import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';

class customerregister extends Component {
  state = {
    foto: '',
    username:"",
    password:"",
    gander:"",
    First_Name:"",
    Last_Name:"",
    Email_Address:"",
    Street:"",
    City:"",
    ZIP:"",
    State:"",
    Country:"",
    Phone_Number:"",
    Company:"",
    redirect:false,
    confim:'',
    massage:"",
    massageuser:""
}

  onchange = (e) => {
    switch(e.target.name){
        case 'foto':
            this.setState({
                foto: e.target.files[0],
            });
            break;
          default :
          this.setState({
            foto: "",});
    }
  }

  value = (e) => {
    this.setState({
      username:e.username.value,
      password:e.password.value,
      gander:e.gander.value,
      First_Name:e.First_Name.value,
      Last_Name:e.Last_Name.value,
      Email_Address:e.Email_Address.value,
      Street:e.Street.value,
      City:e.City.value,
      ZIP:e.ZIP.value,
      State:e.State.value,
      Country:e.Country.value,
      Phone_Number:e.Phone_Number.value,
      Company:e.Company.value,
    })

  }

  register = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', this.state.foto);
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    formData.append('gander', this.state.gander);
    formData.append('First_Name', this.state.First_Name);
    formData.append('Last_Name', this.state.Last_Name);
    formData.append('Email_Address', this.state.Email_Address);
    formData.append('Street', this.state.Street);
    formData.append('City', this.state.City);
    formData.append('ZIP', this.state.ZIP);
    formData.append('State', this.state.State);
    formData.append('Country', this.state.Country);
    formData.append('Phone_Number', this.state.Phone_Number);
    formData.append('Company', this.state.Company);

    // akan mengecek dl apakah foto sudah ada atau belum
    if(this.state.foto !== ""){
    axios.post('http://localhost:3002/register/', formData)
    .then((respon) => {
      if (respon.data === "berhasil") {
        this.setState({ confim: respon.data });
        this.setState({ redirect: true });
      } else {
        this.setState({ massageuser: respon.data})
      }
    });
    } else {
      this.setState({ massage: "Plase Make Sure Add Your Image" })
    }
  }

  render() {

        // Mengirim ke page checkout2
        if (this.state.redirect && this.state.confim === "berhasil") {
          return <Redirect to='/customerlogin'/>
        }

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
              <form method="get" onSubmit={this.register} >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">User name</label>
                  <input id="name" ref="username" type="text" className="form-control" required/>
                  <p style={{color:"red"}}>{this.state.massageuser}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="Email_Address" ref="Email_Address" type="text" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input id="password" ref="password" type="password" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password"  className="form-label">Gander :</label>  &nbsp;&nbsp;
                  <select ref="gander">
                  <option value="male">Male</option>
                  <option value="famale">Famale</option>
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">First_Name</label>
                  <input type="text" ref="First_Name" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Last_Name</label>
                  <input type="text" ref="Last_Name" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Street</label>
                  <input type="text" ref="Street" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">City</label>
                  <input type="text" ref="City" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">ZIP</label>
                  <input type="number" ref="ZIP" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">State</label>
                  <input type="number" ref="State" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Country</label>
                  <input type="text" ref="Country" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Company</label>
                  <input type="text" ref="Company" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Phone Number</label>
                  <input type="text" ref="Phone_Number" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="image" className="form-label">Image</label>
                  <input ref="foto" name="foto" onChange={this.onchange} type="file" className="form-control"  />
                </div>

                {/* Massage */}
                <p style={{color:"red"}}>{this.state.massage}</p>

                <div className="form-group text-center">
                  <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fas fa-user"></i> Register</button>
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