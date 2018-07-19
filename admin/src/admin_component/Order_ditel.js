import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username,
      invoicenumber: state.invoicenumber
    };
}

class Order_ditel extends Component {

  state = {
    redirect: false,
    datadapat: [],
  }

  componentDidMount(){

    var self = this 
    axios.post('http://localhost:3001/order_ditel',
    {
        invoice_number: this.props.invoicenumber,
    }).then((respone) => {
      self.setState({ datadapat: respone.data, })
    }) 
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
  } 
  
  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


  // Looping dari database
  const data = this.state.datadapat.map((item, index) => {
    var id = item.id;
    var invoiceid = item.invoiceid
    var total_price = item.total_price
    var product_name = item.product_name
    var price = item.price
    var quantity = item.quantity
    var date = item.data
    return (
      
    <div className="form-group col-md-10">
      <p className="control-label">Invoice number : {invoiceid} </p>
      <p className="control-label">Product Name: {product_name} </p>
      <p className="control-label">Price : {price}</p>
      <p className="control-label">Quantity : {quantity} </p>
      <p className="control-label">Total Price : {total_price} </p>
      <p className="control-label">Date : {date} </p>
      <hr/>
    </div>
    )
  })

    return (
   <div>

     {/* Bagian navbar admin */}
     <Navbaradmin orders="active" />


    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-table"></i> Orders Ditel</h1><br/>
          <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/orders"> Back </Link>
        </div>

        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">Home</li>
          <li class="breadcrumb-item"><Link to="/orders">Orders</Link></li>
          <li class="breadcrumb-item active">Orders Ditel </li>
        </ul>
      </div>
     
     {/* Mulai content */}
      <div class="clearix"></div>
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">Orders Ditel</h3>
            <hr/>
            <div class="tile-body">
              <form class="row">
                {data}
              </form>
            </div>
          </div>
        </div>
    </main>
    

    </div>
    );
  }
}

export default connect(mapStateToProps)(Order_ditel);