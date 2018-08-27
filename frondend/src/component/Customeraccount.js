import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class Customeraccount extends Component {
  state={
    Email_Address:"",
    First_Name:"",
    Last_Name:"",
    image:"isi",
    phone:"",
  }
  componentDidMount(){
    axios.post('http://localhost:3002/customer/ditel',{
      id_user: cookies.get("login")
    }).then((respon) => {
      if(respon.data.length === 1){
      this.setState({image:respon.data[0].image});
      this.setState({First_Name:respon.data[0].First_Name});
      this.setState({Last_Name:respon.data[0].Last_Name});
      this.setState({Email_Address:respon.data[0].Email_Address});
      this.setState({phone:respon.data[0].phone});
      }
    })
  }
  
  
  render() {

        // Mengecek apakah passwod sudah dan username uda benar?
        if (cookies.get("login") < 1) {
          this.setState({redirect: true})
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

    <Customersidebar Customeraccount='active'/>

  {/* <!-- End Customer Sidebar--> */}
        
  <div className="col-lg-8 col-xl-9 pl-lg-3">
            <div className="block-header mb-5">
              <h5>Personal details</h5>
            </div>
            <form className="content-block">
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-user"> Firstname</label> : {this.state.First_Name}
                </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-user"> Lastname</label> : {this.state.Last_Name}
                </div>
    
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-phone"> Phone </label> : {this.state.phone}               </div>
              <div className="row col-md-12">
                  <div className="form-group">
                    <label className="form-label fa fa-envelope"> Email </label> : {this.state.Email_Address}</div>
                    
              <div className="row col-md-12">
                  <div className="form-group">
                  <img style={{width:"160px",height:"160px",marginLeft:"20px",border:"1px solid black"}} alt="image_customer" src={`http://localhost:3002/image/user_customer/${this.state.image}`}  />
                  </div>

                <div className="col-sm-12 text-center">
                  
                  <Link to="Customeraccountedit" className="btn btn-primary"><i className="fa fa-save"></i>Edit</Link>
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

export default Customeraccount;