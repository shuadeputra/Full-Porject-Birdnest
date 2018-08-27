import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contenthome extends Component {
  
  state={
    user:"",
    blog:"",
    product:"",
    email:""
  }

  componentDidMount(){
    //////////////// Untuk mengambil brp jumlah customer
    axios.get("http://localhost:3001/home/usercustomer")
    .then((response)=>{
      if(response.data !== undefined){
      this.setState({user:response.data[0].jumlah})
      }
    })
    ///////////////////// Untuk mengambil jumlah blog
    axios.get("http://localhost:3001/home/blog")
    .then((response)=>{
      if(response.data !== undefined){
      this.setState({blog:response.data[0].jumlah})
      }
    })
    ////////////////// Untuk mengambil jumlah product
    axios.get("http://localhost:3001/home/product")
    .then((response)=>{
      if(response.data !== undefined){
      this.setState({product:response.data[0].jumlah})
      }
    })
    ////////////////// Untuk mengambil jumlah email yang belum terbaca
    axios.get("http://localhost:3001/home/email")
    .then((response)=>{
      if(response.data !== undefined){
      this.setState({email:response.data[0].jumlah})
      }
    })

  }


  render() {
    return (
  <div>

<main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-dashboard"></i> Dashboard</h1>
          <p>高兴鸟 Admin</p>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item"><Link to="/homeadmin">Dashboard</Link></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x"></i>
            <div className="info">
              <h4>Users</h4>
              <p><b>{this.state.user}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small info coloured-icon"><i className="icon fa fa-book fa-3x"></i>
            <div className="info">
              <h4>Blog</h4>
              <p><b>{this.state.blog}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small warning coloured-icon"><i className="icon fa fa-shopping-cart fa-3x"></i>
            <div className="info">
              <h4>Product</h4>
              <p><b>{this.state.product}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small danger coloured-icon"><i className="icon fa fa-envelope fa-3x"></i>
            <div className="info">
              <h4>New Email</h4>
              <p><b>{this.state.email}</b></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">About us</h3>
              <p>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Revenue</h3>
            <p>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p>
          </div>
        </div>
      </div>
    </main>

 </div>
    );
  }
}

export default Contenthome;
