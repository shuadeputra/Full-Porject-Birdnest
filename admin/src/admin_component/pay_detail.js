import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class pay_detail extends Component {

  state = {
    redirect: false,
    datadapat: [],
  }

  componentDidMount(){
    var invoice_number = this.props.location.state.invoice_number
    var self = this;
    axios.post('http://localhost:3001/pay_detail',
    {
        invoice_number: invoice_number,
    }).then((respone) => {
      self.setState({ datadapat: respone.data, })
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
    var confirmation_name = item.confirmation_name
    var confirmation_image = item.confirmation_image
    var total_price = item.total_price
    var invoice_number = item.invoice_number
    var payment = item.payment

    return <div key={index} className="form-group col-md-10">
      <p className="control-label">Invoice number : {invoice_number} </p>
      <p className="control-label">Confirmation Name: {confirmation_name} </p>
      <p className="control-label">Total Price : {total_price} </p>
      <p className="control-label">payment : {payment} </p>
      <img alt='imgpayment' style={{ width: "160px", height: "160px", marginLeft: "20px", border: "1px solid black" }} src={`http://localhost:3001/image/payment/${confirmation_image}`} />
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
          <h1><i className="fa fa-table"></i> Pay Detail</h1><br/>
          <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/orders"> Back </Link>
        </div>

        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><Link to="/orders">Orders</Link></li>
          <li className="breadcrumb-item active">Pay Detail </li>
        </ul>
      </div>
     
     {/* Mulai content */}
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Pay Detail</h3>
            <hr/>
            <div className="tile-body">
              <form className="row">
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

export default pay_detail;