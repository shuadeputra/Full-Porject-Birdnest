import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Order_detail extends Component {

  state = {
    redirect: false,
    datadapat: [],
    Street: "",
    ZIP:"",
    City:"",
    Contry:"",
    Phone_number:""
  }

  componentDidMount(){
    var invoice_number = this.props.location.state.invoice_number
    var self = this;
    axios.post('http://localhost:3001/order_detail',
    {
        invoice_number: invoice_number,
    }).then((respone) => {
      self.setState({ datadapat: respone.data, })
    })
    
    axios.post("http://localhost:3001/order_detail/address_customer",{
      invoice_number: invoice_number,
    }).then((respone)=>{
      self.setState({
        Street : respone.data[0].Street,
        ZIP: respone.data[0].ZIP,
        City: respone.data[0].City,
        Contry: respone.data[0].Contry,
        Phone_number: respone.data[0].Phone_Number
      })
    })
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }
  
  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


  // Looping dari database
  const data = this.state.datadapat.map((item, index) => {
    // var id = item.id;
    var invoiceid = item.invoiceid
    var total_price = item.total_price
    var product_name = item.product_name
    var price = item.price
    var quantity = item.quantity
    var date = item.date
    return <div key={index} className="form-group col-md-10">
      <p className="control-label">Invoice number : {invoiceid} </p>
      <p className="control-label">Product Name: {product_name} </p>
      <p className="control-label">Price : {price}</p>
      <p className="control-label">Quantity : {quantity} </p>
      <p className="control-label">Total Price : {total_price} </p>
      <p className="control-label">Date : {date} </p>
      <hr/>
    </div>
  })

    return (
   <div>

     {/* Bagian navbar admin */}
     <Navbaradmin orders="active" />


    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-table"></i> Orders Detail</h1><br/>
          <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/orders"> Back </Link>
        </div>

        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><Link to="/orders">Orders</Link></li>
          <li className="breadcrumb-item active">Orders Detail </li>
        </ul>
      </div>
     
     {/* Mulai content */}
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Orders Detail</h3>
            <hr/>
            <div className="tile-body">
              <form className="row">
                {data}
              </form>
              <center>
                <h4>Street : {this.state.Street}</h4>
                <h4>ZIP : {this.state.ZIP}</h4>
                <h4>City : {this.state.City}</h4>
                <h4>Contry : {this.state.Contry}</h4>
                <h4>Phone_number : {this.state.Phone_number}</h4>
              </center>
            </div>
          </div>
        </div>
    </main>
    

    </div>
    );
  }
}

export default Order_detail;