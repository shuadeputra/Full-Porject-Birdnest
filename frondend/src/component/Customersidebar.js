import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Customersidebar extends Component {

  state ={
    name :"",
    picture :"",
    email:"",
  }

  componentDidMount(){
    axios.post('http://localhost:3002/customer/ditel',{
      id_user: cookies.get("login")
    }).then((respon) => {
      if(respon.data.length === 1){
      this.setState({picture:respon.data[0].image});
      this.setState({name:respon.data[0].First_Name});
      this.setState({email:respon.data[0].Email_Address});
      }
    })
  }

  logut(){
    // this.props.dispatch({type:'logout',},);
    cookies.remove("login")
    cookies.remove("username")
  } 


  render() {

    return (      
    <div className="customer-sidebar col-xl-3 col-lg-4 mb-md-5">
          <div className="customer-profile"><a className="d-inline-block">
          <img className="img-fluid rounded-circle customer-image" src={`http://localhost:3002/image/user_customer/${this.state.picture}`} alt="costomer_image" />
          </a>
            <h5>{this.state.name}</h5>
            <p className="text-muted text-small">{this.state.email}</p>
          </div>
          <nav className="list-group customer-nav" id="sticky">
          
          <Link to="/customerorders" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.customersidebar}><span>
              <span className="fas fa-shopping-bag"></span> Orders</span>
            </Link>
            
            <Link to="/customeraccount" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.Customeraccount}><span>
              <span className="fas fa-user"></span> Profile</span></Link>

            <Link to="/Customeraddresses" className={"list-group-item d-flex justify-content-between align-items-center " + this.props.Customeraddresses}><span><span className="fas fa-map"></span> Addresses</span></Link>
            

            <Link onClick={()=>{this.logut();}} to="/Customerlogin" className="list-group-item d-flex justify-content-between align-items-center"><span>
              <span className="fa fas fa-sign-out-alt"></span>Log out</span></Link>


            </nav>
        </div>

    );
  }
}

export default Customersidebar;
